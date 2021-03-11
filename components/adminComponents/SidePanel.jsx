import { useContext } from "react";
import { AuthContext } from "../AuthContext";
import styles from "../../styles/adminDashboard/dashboard.module.css";

const SidePanel = () => {
  const [user, setUser] = useContext(AuthContext);
  // console.log("auth context user image : ", user.photoURL);
  return (
    <div className={`${styles.sidepanel}`}>
      <div className={styles.profile}>
        <div className={styles.avatar}>
          {user ? (
            <img src={`${user.photoURL}`} alt="avatar image" />
          ) : (
            <img src="/avatar.svg" alt="avatar image" />
          )}
        </div>
        <div>
          <h1>Tarun Koli</h1>
          <p>Web Developer</p>
        </div>
      </div>

      <div className={styles.details}>
        <div className={styles.username}>
          <div>
            <h3>Username:</h3>
          </div>
          <div>tarunkoli_07</div>
        </div>
        <div className={styles.dob}>
          <div>
            <h3>DOB:</h3>
          </div>
          <div>02 June 2001</div>
        </div>
        <div className={styles.email}>
          <div>
            <h3>Email:</h3>
          </div>
          <div>abc@gmail.com</div>
        </div>
        <div className={styles.phone}>
          <div>
            <h3>Phone:</h3>
          </div>
          <div>9876543210</div>
        </div>
      </div>

      <div className={styles.bottom}>
        <div>
          <i className="fas fa-rupee-sign"></i> Payments
        </div>
        <div>
          <i className="fas fa-file-invoice"></i> Invoices
        </div>
        <div>
          <i className="fas fa-users"></i> Clients
        </div>
        <div>
          <i className="fas fa-sign-out-alt"></i> Logout
        </div>
      </div>
    </div>
  );
};
export default SidePanel;
