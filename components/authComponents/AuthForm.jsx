import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import firebase, { signInWithGoogle, auth } from "../firebase";
import style from "../../styles/AuthStyles/AuthForm.module.css";

const AuthForm = () => {
  const [isSignin, setIsSignin] = useState(true);
  const [isEmailFieldEmpty, setIsEmailFieldEmpty] = useState(true);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);
  const router = useRouter();

  useEffect(() => {
    if (error) {
      toast.error(error, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  }, [error]);

  useEffect(() => {
    handleEmail();
  }, [email]);

  const handleAuthToggle = () => {
    setName("");
    setPhone("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setIsSignin((prev) => !prev);
  };
  const handleInput = (e) => {
    if (e.target.name === "name") {
      setName(e.target.value);
      setError(null);
    } else if (e.target.name === "phone") {
      setPhone(e.target.value);
      setError(null);
    } else if (e.target.name === "email") {
      setEmail(e.target.value);
      setError(null);
    } else if (e.target.name === "password") {
      setPassword(e.target.value);
      setError(null);
    } else {
      setConfirmPassword(e.target.value);
      setError(null);
    }
  };
  const handleEmail = () => {
    if (email) {
      setIsEmailFieldEmpty(false);
    } else {
      setIsEmailFieldEmpty(true);
    }
  };
  const handleSignup = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      return setError("password does not match !!!");
    }
    try {
      const res = await axios({
        url: "http://localhost:8080/api/signup",
        data: {
          name,
          email,
          phone,
          password,
        },
        method: "POST",
        withCredentials: true,
      });
      if (res.status === 201) {
        setName("");
        setPhone("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        setError(null);
        setIsSignin(false);
        toast.success("account created", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    } catch (err) {
      setError(err.response.data.msg);
    }
  };
  const handleSignin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios({
        url: "http://localhost:8080/api/signin",
        method: "POST",
        data: {
          email,
          password,
        },
        withCredentials: true,
      });
      if (res.status === 200) {
        window.localStorage.setItem("userId", res.data.userId);
        setEmail("");
        setPassword("");
        setError(null);
        toast.success("login successful", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        router.replace("/");
      }
    } catch (err) {
      setError(err.response.data.msg);
    }
  };

  const handleGmail = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth
      .signInWithPopup(provider)
      .then((result) => {
        if (result) {
          console.log("auth from : ", result);
          router.replace("/");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <section id="testSignup" className={style.testSignup}>
      <ToastContainer
        position="top-center"
        autoClose={8000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        className={style.myToast}
      />

      <div className={style.testSignupContainer}>
        {/*left col: start*/}
        <div className={style.colLeft}>
          <h2 className={style.title}>
            <span>bike</span> therapist
          </h2>
          <div className={style.message}>
            <h1 className={style.msgTitle}>
              {isSignin ? "hello, friends!" : "welcome, back!"}
            </h1>
            <p>
              {isSignin
                ? "enter your personal details and start your journey with us."
                : "To Keep Connected With Us Please Login With Your Personal Info."}
            </p>
          </div>
          <div className={style.colLeftbtnGrp}>
            <button className={style.signUpBtn} onClick={handleAuthToggle}>
              {isSignin ? "sign in" : "sign up"}
            </button>
          </div>
          <h2 className={style.option}>signup using</h2>
          <div className={style.icons}>
            <div>
              <i className="fas fa-envelope fa-2x"></i>
            </div>
          </div>
        </div>
        {/*left col: end*/}
        {/*right col: start*/}
        <div className={style.colRight}>
          <h1 className={style.colRightTitle}>
            {isSignin ? "sign up" : "sign in"}
          </h1>
          <div className={style.formWrapper}>
            <form
              autoComplete="off"
              className={`${style.rightForm} ${
                isSignin ? style.signUpForm : style.hide
              }`}
              onSubmit={handleSignup}
            >
              <div className={style.inputWrapper}>
                <div className={style.formGrp}>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={name}
                    onChange={handleInput}
                    required
                  />
                  <label htmlFor="name">name</label>
                </div>
                <div className={style.formGrp}>
                  <input
                    type="text"
                    id="phone"
                    name="phone"
                    value={phone}
                    onChange={handleInput}
                    required
                  />
                  <label htmlFor="phone">phone no.</label>
                </div>
              </div>
              <div className={style.formGrp}>
                <input
                  type="email"
                  id="signupEmail"
                  name="email"
                  value={email}
                  onChange={handleInput}
                  required
                />
                <label
                  htmlFor="signupEmail"
                  className={isEmailFieldEmpty ? null : style.labelUp}
                >
                  email
                </label>
              </div>
              <div className={style.formGrp}>
                <input
                  type="password"
                  id="signupPassword"
                  name="password"
                  value={password}
                  onChange={handleInput}
                  required
                />
                <label htmlFor="signupPassword">password</label>
              </div>
              <div className={style.formGrp}>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirm"
                  value={confirmPassword}
                  onChange={handleInput}
                  required
                />
                <label htmlFor="confirmPassword">confirm password</label>
              </div>
              <div className={style.btnGrp}>
                <button type="submit">sign up</button>
              </div>
              <h1 className="text-center text-danger text-uppercase p-1">or</h1>
              <div className={style.btnGrp}>
                <button onClick={handleGmail}>signin using gmail</button>
              </div>
              <p className={style.forgotPassword}>
                <span className="text-warning">forgot password ?</span>{" "}
                <span className="text-danger">
                  click{" "}
                  <Link href="/forgot-password" className={style.link}>
                    <a>here</a>
                  </Link>
                </span>
              </p>
            </form>
            <form
              autoComplete="off"
              className={`${style.rightForm} ${
                isSignin ? style.signInForm : style.show
              }`}
              onSubmit={handleSignin}
            >
              <div className={style.formGrp}>
                <input
                  type="email"
                  id="signinEmail"
                  name="email"
                  value={email}
                  onChange={handleInput}
                  required
                />
                <label
                  htmlFor="signinEmail"
                  className={isEmailFieldEmpty ? null : style.labelUp}
                >
                  email
                </label>
              </div>
              <div className={style.formGrp}>
                <input
                  type="password"
                  id="signinPassword  "
                  name="password"
                  value={password}
                  onChange={handleInput}
                  required
                />
                <label htmlFor="signinPassword">password</label>
              </div>
              <div className={style.btnGrp}>
                <button type="submit">sign in</button>
              </div>
              <h1 className="text-center text-danger text-uppercase p-1">or</h1>
              <div className={style.btnGrp}>
                <button onClick={handleGmail}>signin using gmail</button>
              </div>
              <p className={style.forgotPassword}>
                <span className="text-warning">forgot password ?</span>{" "}
                <span className="text-danger">
                  click{" "}
                  <Link href="/forgot-password" className={style.link}>
                    <a>here</a>
                  </Link>
                </span>
              </p>
            </form>
          </div>
        </div>
        {/*right col: end*/}
      </div>
    </section>
  );
};
export default AuthForm;
