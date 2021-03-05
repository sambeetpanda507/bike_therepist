import { useState } from "react";
import style from "../../styles/AuthStyles/Login.module.css";

const Login = () => {
  const [act, setAct] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //handle user input function
  const handleInput = (event) => {
    if (event.target.name === "name") setName(event.target.value);
    else if (event.target.name === "phone") setPhone(event.target.value);
    else if (event.target.name === "email") setEmail(event.target.value);
    else setPassword(event.target.value);
  };

  const handleChange = () => {
    setName("");
    setPhone("");
    setEmail("");
    setPassword("");
    setAct((prev) => !prev);
  };

  return (
    <div className={style.outlay}>
      <div className={style.cover}>
        <div className={`${act ? style.deactive : style.askSign}`}>
          <h3 className={style.logo3}>
            <span>Bike</span>
            <strong>Therapist</strong>
          </h3>
          <h1>Hello, Friend!</h1>
          <p>
            Enter Your Personal Details <br />
            And Start Your Journey With Us.
          </p>
          <button onClick={handleChange}>Sign Up</button>
          <div className={style.add}>
            <h3>Sign Up Using</h3>
            <div>g+</div>
            <div>E</div>
          </div>
        </div>

        {/* Sign Up */}
        <div className={`${act ? style.askSign : style.deactive}`}>
          <h3 className={style.logo3}>
            <span>Bike</span>
            <strong>Therapist</strong>
          </h3>
          <h1>Welcome, Back!</h1>
          <p>
            To Keep Connected With Us Please
            <br />
            Login With Your Personal Info.
          </p>
          <button onClick={handleChange}>Sign In</button>
          <div className={style.add}>
            <h3>Sign In Using</h3>
            <div>g+</div>
            <div>E</div>
          </div>
        </div>
      </div>

      <div className={style.logCover}>
        <div className={`${act ? style.deactive : style.login}`}>
          <h1>Login</h1>
          <div className={style.inputs}>
            <div className={style.wrapper}>
              <label htmlFor="loginEmail">Email</label>
              <input
                type="text"
                name="email"
                id="loginEmail"
                value={email}
                onChange={handleInput}
              />
              <div></div>
            </div>
            <div className={style.space}>
              <label htmlFor="loginPassword">Password</label>
              <input
                type="password"
                name="password"
                id="loginPassword"
                value={password}
                onChange={handleInput}
              />
              <div></div>
            </div>
          </div>
          <div className={style.buttons}>
            <button>Sign in</button>
            <div className={style.or}>
              <div className={style.line}>
                <hr />
              </div>
              <div>OR</div>
              <div className={style.line}>
                <hr />
              </div>
            </div>
            <button>Sign in using (E)</button>
          </div>
          <p>
            Forgot PassWord ? <a className={style.forgot}>Click here</a>
          </p>
        </div>

        {/* Sign Up */}

        <div className={`${act ? style.register : style.deactive}`}>
          <h1>SignUp</h1>
          <div className={style.inputs}>
            <div className={style.wrap}>
              <div
                className={style.wrapper}
                style={{ position: "static", display: "inline" }}
              >
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  style={{ width: "43%" }}
                  name="name"
                  id="name"
                  value={name}
                  onChange={handleInput}
                />
                <div style={{ width: "20.5rem" }}></div>
              </div>
              <div
                className={style.wrapper}
                style={{ position: "static", display: "inline" }}
              >
                <label htmlFor="phone" style={{ marginLeft: "45%" }}>
                  Phone No
                </label>
                <input
                  type="text"
                  style={{ width: "43%", marginLeft: "3.5%" }}
                  name="phone"
                  id="phone"
                  value={phone}
                  onChange={handleInput}
                />
                <div style={{ width: "20.5rem", marginLeft: "46%" }}></div>
              </div>
            </div>

            <div className={style.space} style={{ marginTop: "8%" }}>
              <label htmlFor="email">Email</label>
              <input
                type="text"
                name="email"
                id="email"
                value={email}
                onChange={handleInput}
              />
              <div></div>
            </div>
            <div className={style.space} style={{ marginTop: "8%" }}>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                value={password}
                onChange={handleInput}
              />
              <div></div>
            </div>
          </div>
          <div className={style.buttons}>
            <button>Sign up</button>
            <div className={style.or}>
              <div className={style.line}>
                <hr />
              </div>
              <div>OR</div>
              <div className={style.line}>
                <hr />
              </div>
            </div>
            <button>Sign up using (E)</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
