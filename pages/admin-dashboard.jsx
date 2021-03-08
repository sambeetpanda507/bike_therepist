import Head from "next/head";
import Header from "../components/adminComponents/header";
import SidePanel from "../components/adminComponents/SidePanel";
import DashBoard from "../components/adminComponents/DashBoard";
import styles from "../styles/adminDashboard/dashboard.module.css";

const adminDashBoard = () => {
  return (
    <section id="dashboard">
      <Head>
        <meta
          title="Admin/DashBoard"
          content="this is the pricing page of biketherapist Admin"
        />
        <title>Admins DashBoard</title>
      </Head>
      <div className={styles.main}>
        <SidePanel />
        <DashBoard />
      </div>
    </section>
  );
};

export default adminDashBoard;
