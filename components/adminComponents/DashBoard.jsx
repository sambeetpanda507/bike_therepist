import styles from "../../styles/adminDashboard/dashboard.module.css";

const DashBoard = () => {
  return (
    <div className={styles.dashboard}>
      <div className={styles.welcome}>
        <div id={styles.welcome}>
          <h1>Welcome Admin!</h1>
          <p>Dashboard</p>
        </div>
      </div>

      <div className={styles.first}>
        <div className={styles.f1}>
          <div className={styles.icon}>
            <div>
              <i class="fas fa-tools"></i>
            </div>
          </div>
          <div className={styles.info}>
            <div>
              <h1>15</h1>
              <p>Today's Services</p>
            </div>
          </div>
        </div>

        <div className={styles.f2}>
          <div className={styles.icon}>
            <div>
              <i class="fas fa-users-cog"></i>
            </div>
          </div>
          <div className={styles.info}>
            <div>
              <h1>8</h1>
              <p>User Admins</p>
            </div>
          </div>
        </div>

        <div className={styles.f3}>
          <div className={styles.icon}>
            <div>
              <i class="fas fa-phone-volume"></i>
            </div>
          </div>
          <div className={styles.info}>
            <div>
              <h1>85</h1>
              <p>Total Services</p>
            </div>
          </div>
        </div>

        <div className={styles.f4}>
          <div className={styles.icon}>
            <div>
              <i class="fas fa-cogs"></i>
            </div>
          </div>
          <div className={styles.info}>
            <div>
              <h1>10</h1>
              <p>Today's Pending</p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.second}>
        <div className={styles.s1}>
          <div>
            <h1>Services</h1>
          </div>
          <div className={styles.progress}>
            <h1>81</h1>
            <progress value="15" max="20"></progress>
          </div>
          <div>
            <p>Total Services 256.</p>
          </div>
        </div>

        <div className={styles.s2}>
          <div>
            <h1>Services</h1>
          </div>
          <div className={styles.progress}>
            <h1>81</h1>
            <progress value="15" max="20"></progress>
          </div>
          <div>
            <p>Total Services 256.</p>
          </div>
        </div>

        <div className={styles.s3}>
          <div>
            <h1>Services</h1>
          </div>
          <div className={styles.progress}>
            <h1>81</h1>
            <progress value="15" max="20"></progress>
          </div>
          <div>
            <p>Total Services 256.</p>
          </div>
        </div>

        <div className={styles.s4}>
          <div>
            <h1>Services</h1>
          </div>
          <div className={styles.progress}>
            <h1>81</h1>
            <progress value="15" max="20"></progress>
          </div>
          <div>
            <p>Total Services 256.</p>
          </div>
        </div>
      </div>
      <div className={styles.third}>
        <div className={styles.t1}></div>
        <div className={styles.t2}></div>
      </div>
      <div className={styles.fourth}>
        <div className={styles.fo1}></div>
      </div>
    </div>
  );
};
export default DashBoard;
