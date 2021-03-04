import styles from "../../styles/loginStyles/Login.module.css";

const Login = ()=>{
    return (
            <div className={styles.outlay}>
                <div className={styles.askSign}>
                    <h3 className={styles.logo3}><span>Bike</span><strong>Therapist</strong></h3>
                    <h1>Hello, Friend!</h1>
                    <p>Enter Your Personal Details <br />
                    And Start Your Journey With Us.</p>
                    <button>Sign Up</button>
                    <div className={styles.add}>
                        <h3>Sign Up Using</h3>
                        <div>g+</div>
                        <div>E</div>
                    </div>
                </div>
                <div className={styles.login}>
                    <h1>Login</h1>
                    <div className={styles.inputs}>
                        <div className={styles.wrapper}>
                            <label htmlFor="">Username</label>
                            <input type="text" />
                            <div></div>
                        </div>
                        <div className={styles.space}>
                            <label htmlFor="">Password</label>
                            <input type="text" />
                            <div></div>
                        </div>
                    </div>
                    <div className={styles.buttons}>
                        <button>Sign in</button>
                        <div className={styles.or}>
                            <div className={styles.line}><hr /></div>
                            <div>OR</div>
                            <div className={styles.line}><hr /></div>
                        </div>
                        <button>Sign in using (E)</button>
                    </div>
                    <p>Forgot PassWord ? <a className={styles.forgot}>Click here</a></p>
                </div>
            </div>
    );
};

export default Login;