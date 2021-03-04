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
                        <h1>Hello, Friend!</h1>
                        <p>Enter Your Personal Details <br />
                        And Start Your Journey With Us.</p>
                        <button onClick={handleChange}>Sign Up</button>
                        <div className={styles.add}>
                            <h3>Sign Up Using</h3>
                            <div>g+</div>
                            <div>E</div>
                        </div>
                    </div>

                       {/* Sign Up */}
                    <div className={`${ (act) ? styles.askSign : styles.deactive }`}>
                        <h3 className={styles.logo3}><span>Bike</span><strong>Therapist</strong></h3>
                        <h1>Welcome, Back!</h1>
                        <p>To Keep Connected With Us Please<br />
                            Login With Your Personal Info.</p>
                        <button onClick={handleChange}>Sign In</button>
                        <div className={styles.add}>
                            <h3>Sign In Using</h3>
                            <div>g+</div>
                            <div>E</div>
                        </div>
                    </div>

                </div>
        
                
                <div className={styles.logCover}>
                    <div className={`${ (act) ? styles.deactive : styles.login }`}>
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

                    {/* Sign Up */}
                    
                    <div className={`${ (act) ? styles.register : styles.deactive }`}>
                        <h1>SignUp</h1>
                        <div className={styles.inputs}>
                            <div className={styles.wrap}>
                            <div className={styles.wrapper} style={{position:"static",
                            display:"inline"}}>
                                
                                <label htmlFor="">Name</label>
                                <input type="text" style={{width:"43%"}} />
                                <div style={{width:"20.5rem"}}></div>
                            </div>
                            <div className={styles.wrapper} style={{position:"static",
                            display:"inline"}}>
                                
                                <label htmlFor="" style={{marginLeft:"45%"}}>Phone No</label>
                                <input type="text" style={{width:"43%",marginLeft:"3.5%"}} />
                                <div style={{width:"20.5rem",marginLeft:"46%"}}></div>
                            </div>
                            </div>

                            <div className={styles.space} style={{marginTop:"8%"}}>
                                <label htmlFor="">Username</label>
                                <input type="text" />
                                <div></div>
                            </div>
                            <div className={styles.space}  style={{marginTop:"8%"}}>
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
                    </div>

                </div>
            </div>
    );
};

export default Login;