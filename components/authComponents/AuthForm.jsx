import { useState } from "react";
import Link from "next/link";
import style from "../../styles/AuthStyles/AuthForm.module.css";

const AuthForm = () => {
  const [isSignin, setIsSignin] = useState(true);
  const handleAuthToggle = () => {
    setIsSignin((prev) => !prev);
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
            >
              <div className={style.inputWrapper}>
                <div className={style.formGrp}>
                  <input type="text" id="name" name="name" required />
                  <label htmlFor="name">name</label>
                </div>
                <div className={style.formGrp}>
                  <input type="text" id="phone" name="phone" required />
                  <label htmlFor="phone">phone no.</label>
                </div>
              </div>
              <div className={style.formGrp}>
                <input type="email" id="signupEmail" name="email" required />
                <label htmlFor="signupEmail">email</label>
              </div>
              <div className={style.formGrp}>
                <input
                  type="password"
                  id="signupPassword"
                  name="password"
                  required
                />
                <label htmlFor="signupPassword">password</label>
              </div>
              <div className={style.formGrp}>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirm"
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
            >
              <div className={style.formGrp}>
                <input type="email" id="signupEmail" name="email" required />
                <label htmlFor="signupEmail">email</label>
              </div>
              <div className={style.formGrp}>
                <input
                  type="password"
                  id="signupPassword"
                  name="password"
                  required
                />
                <label htmlFor="signupPassword">password</label>
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
