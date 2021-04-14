import Head from "next/head";
import { parseCookies } from "nookies";
import axios from "axios";
import SidePanel from "../components/adminComponents/SidePanel";
import DashBoard from "../components/adminComponents/DashBoard";
import styles from "../styles/adminDashboard/sidepanel.module.css";

const adminDashBoard = ({ data, paymentData, adminRes }) => {
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
        <SidePanel adminRes={adminRes} />
        <DashBoard clientsData={data} paymentData={paymentData} />
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
  const res = await fetch("http://localhost:8080/api/clients", {
    method: "GET",
    mode: "cors",
    credentials: "same-origin",
  });
  const data = await res.json();

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
    props: { data, paymentData, adminRes },
  };
}

export default adminDashBoard;
