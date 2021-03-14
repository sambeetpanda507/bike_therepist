import Head from "next/head";
import SidePanel from "../components/adminComponents/SidePanel";
import Invoices from "../components/adminComponents/invoices";
import styles from "../styles/adminDashboard/sidepanel.module.css";

const adminDashBoard = () => {
  return (
    <section id="dashboard">
      <Head>
        <meta
          title="Admin/Invoices"
          content="this is the pricing page of biketherapist Admin"
        />
        <title>Invoices</title>
      </Head>
      <div className={styles.main}>
        <SidePanel />
        <Invoices />
      </div>
    </section>
  );
};

export default adminDashBoard;
