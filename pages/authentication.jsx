import Login from "../components/authComponents/Login"; 
import SignUp from "../components/authComponents/SignUp"; 
import styles from "../styles/loginStyles/Login.module.css";

const Authentication = ()=>{
    return (
        <div className={styles.wallPaper}>
            <SignUp />
        </div>
    ); 
};

export default Authentication;