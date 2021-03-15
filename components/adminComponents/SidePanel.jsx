import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useContext, useEffect } from "react";
import axios from "axios";
import styles from "../../styles/adminDashboard/dashboard.module.css";
import { SideContext } from "./SideContext";

const SidePanel = () => {
  const [hide, setHide] = useContext(SideContext);
  const [userData, setUserData] = useState(false);
  const router = useRouter();

  useEffect(() => {
    let userId = window.localStorage.getItem("userId");
    axios({
      url: "http://localhost:8080/api/is-user",
      method: "POST",
      data: {
        userId: userId,
      },
      withCredentials: true,
    })
      .then((res) => {
        setUserData(res.data.isLoggedin);
      })
      .catch((err) => {
        setUserData(err.response.data.isLoggedin);
      });
  });
  const handleLogout = () => {
    if (userData) {
      axios({
        url: "http://localhost:8080/api/logout",
        method: "GET",
        withCredentials: true,
      })
        .then((res) => {
          if (res.status === 200) {
            window.localStorage.removeItem("userId");
            router.reload("/");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const handleHide = () => {
    setHide((prev) => !prev);
  };

  return (
    <div className={`${styles.sidepanel} ${hide ? styles.hide2 : null}`}>
      <span onClick={handleHide}>X</span>
      <div className={styles.profile}>
        <div className={styles.avatar}>
          <img src="/avatar.svg" alt="avatar image" />
        </div>
        <div>
          <h1>Admin</h1>
          <p>BikeTherapist</p>
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
        <Link href="/payments">
          <div>
            <i className="fas fa-rupee-sign"></i> Payments
          </div>
        </Link>
        <Link href="/clients">
          <div>
            <i className="fas fa-users"></i> Clients
          </div>
        </Link>
        <div onClick={handleLogout}>
          <i className="fas fa-sign-out-alt"></i> Logout
        </div>
      </div>
    </div>
  );
};
export default SidePanel;
