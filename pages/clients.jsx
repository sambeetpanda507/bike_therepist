import Head from "next/head";
import Header from "../components/adminComponents/header";
import SidePanel from "../components/adminComponents/SidePanel";
import Clients from "../components/adminComponents/clients";
import styles from "../styles/adminDashboard/sidepanel.module.css";

const adminDashBoard = () => {
  return (
    <section id="dashboard">
      <Head>
        <meta
          title="Admin/Clients"
          content="this is the pricing page of biketherapist Admin"
        />
        <title>Clients</title>
      </Head>
      <div className={styles.main}>
        <SidePanel />
        <Clients />
      </div>
    </section>
  );
};

export default adminDashBoard;
