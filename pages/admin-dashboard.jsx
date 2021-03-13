import Head from "next/head";
import { parseCookies } from "nookies";
import SidePanel from "../components/adminComponents/SidePanel";
import DashBoard from "../components/adminComponents/DashBoard";
import styles from "../styles/adminDashboard/sidepanel.module.css";

const adminDashBoard = ({ data }) => {
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
        <DashBoard clientsData={data} />
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
  return {
    props: { data },
  };
}

export default adminDashBoard;
