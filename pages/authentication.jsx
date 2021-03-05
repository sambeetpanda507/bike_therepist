import Login from "../components/authComponents/Login";
import SignUp from "../components/authComponents/SignUp";
import AuthForm from "../components/authComponents/AuthForm";
import styles from "../styles/AuthStyles/Login.module.css";

const Authentication = () => {
  return (
    <>
      <div className={styles.wallPaper}>
        <SignUp />
      </div>
      <AuthForm />
    </>
  );
};

export default Authentication;
