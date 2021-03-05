import { useState, useEffect } from "react";
import Link from "next/link";
import style from "../../styles/AuthStyles/AuthForm.module.css";

const AuthForm = () => {
  const [isSignin, setIsSignin] = useState(true);
  const [isEmailFieldEmpty, setIsEmailFieldEmpty] = useState(true);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

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
    } else if (e.target.name === "phone") {
      setPhone(e.target.value);
    } else if (e.target.name === "email") {
      setEmail(e.target.value);
    } else if (e.target.name === "password") {
      setPassword(e.target.value);
    } else {
      setConfirmPassword(e.target.value);
    }
  };
  const handleEmail = () => {
    if (email) {
      setIsEmailFieldEmpty(false);
    } else {
      setIsEmailFieldEmpty(true);
    }
  };
  const handleSignup = (e) => {
    e.preventDefault();
  };
  const handleSignin = (e) => {
    e.preventDefault();
  };
  return (
    <section id="testSignup" className={style.testSignup}>
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
                <button>signup using gmail</button>
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
                <button>signup using gmail</button>
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
