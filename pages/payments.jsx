import Head from "next/head";
import Header from "../components/adminComponents/header";
import SidePanel from "../components/adminComponents/SidePanel";
import Payments from "../components/adminComponents/payments";
import styles from "../styles/adminDashboard/sidepanel.module.css";

const adminDashBoard = () => {
  return (
    <section id="dashboard">
      <Head>
        <meta
          title="Admin/Payments"
          content="this is the pricing page of biketherapist Admin"
        />
        <title>Payments</title>
      </Head>
      <div className={styles.main}>
        <SidePanel />
        <Payments />
      </div>
    </section>
  );
};

export default adminDashBoard;
