import { useState } from 'react';
import styles from "../../styles/loginStyles/Login.module.css";

const Login = ()=>{
    const [act,setAct] = useState(false);

    const handleChange = ()=>{
        setAct(prev => !prev);
    };

    return (
            <div className={styles.outlay}>
               
                <div className={styles.cover}>
                    <div className={`${ (act) ? styles.deactive : styles.askSign }`}>
                        <h3 className={styles.logo3}><span>Bike</span><strong>Therapist</strong></h3>
                        <div className={styles.heading}><h1>Hello, Friend!</h1></div>
                        <p>Enter Your Personal Details <br />
                        And Start Your Journey With Us.</p>
                       <div className={styles.btn1}><button onClick={handleChange}>Sign Up</button></div>
                        <div className={styles.add}>
                            <h3>Sign Up Using</h3>
                            <div>g+</div>
                            <div>E</div>
                        </div>
                    </div>

                       {/* Sign Up */}
                    <div className={`${ (act) ? styles.askSign : styles.deactive }`}>
                        <h3 className={styles.logo3}><span>Bike</span><strong>Therapist</strong></h3>
                        <div className={styles.heading}><h1>Welcome, Back!</h1></div>
                        <p>To Keep Connected With Us Please<br />
                            Login With Your Personal Info.</p>
                        <div className={styles.btn1}><button onClick={handleChange}>Sign In</button></div>
                        <div className={styles.add}>
                            <h3>Sign In Using</h3>
                            <div>g+</div>
                            <div>E</div>
                        </div>
                    </div>

                </div>
        
                
                <div className={styles.logCover}>
                    <form className={`${ (act) ? styles.deactive : styles.login }`}>
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
                    </form>

                    {/* Sign Up */}
                    
                    <form className={`${ (act) ? styles.register : styles.deactive }`}>
                        <h1>SignUp</h1>
                        <div className={styles.inputs}>
                            <div className={styles.wrap}>
                            <div className={`${styles.wrapper} ${styles.wrapper2}`}>
            
                                <label htmlFor="">Name</label>
                                <input type="text" />
                                <div></div>
                            </div>
                            <div className={`${styles.wrapper} ${styles.wrapper2}`}>
                                
                                <label htmlFor="">Phone No</label>
                                <input type="text" />
                                <div></div>
                            </div>
                            </div>

                            <div className={styles.space}>
                                <label htmlFor="">Username</label>
                                <input type="text" />
                                <div></div>
                            </div>
                            <div className={styles.space} >
                                <label htmlFor="">Password</label>
                                <input type="text" />
                                <div></div>
                            </div>
                        </div>
                        <div className={styles.buttons}>
                            <button>Sign up</button>
                            <div className={styles.or}>
                                <div className={styles.line}><hr /></div>
                                <div>OR</div>
                                <div className={styles.line}><hr /></div>
                            </div>
                            <button>Sign up using (E)</button>
                        </div>
                    </form>

                </div>
            </div>
    );
};

export default Login;