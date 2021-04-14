import Head from "next/head";
import SidePanel from "../components/adminComponents/SidePanel";
import Payments from "../components/adminComponents/payments";
import axios from "axios";
import { parseCookies } from "nookies";
import styles from "../styles/adminDashboard/sidepanel.module.css";

const adminDashBoard = ({ paymentData, adminRes }) => {
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
        <SidePanel adminRes={adminRes} />
        <Payments paymentData={paymentData} />
      </div>
    </section>
  );
};

export async function getServerSideProps(context) {
  const cookies = parseCookies(context);
  if (cookies) {
    if (!cookies.jwt) {
      context.res.writeHead(302, { Location: "/" });
      context.res.end();
    }
  } else {
    context.res.writeHead(302, { Location: "/" });
    context.res.end();
  }
  const paymentRes = await fetch("http://localhost:8080/api/payments", {
    method: "GET",
    mode: "cors",
    credentials: "same-origin",
  });

  const paymentData = await paymentRes.json();

  const admin = await axios({
    url: "http://localhost:8080/api/get-user",
    headers: context.req ? { cookie: context.req.headers.cookie } : undefined,
  });

  const adminRes = admin.data;
  return {
    props: { paymentData, adminRes },
  };
}

export default adminDashBoard;
