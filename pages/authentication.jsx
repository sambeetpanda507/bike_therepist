import Head from "next/head";
import AuthForm from "../components/authComponents/AuthForm";

const Authentication = () => {
  return (
    <section id="authentication">
      <Head>
        <meta
          title="authentication page"
          content="this is the user authentication page for the biketherapist"
        />
        <title>User Authentication</title>
      </Head>
      <AuthForm />
    </section>
  );
};

export default Authentication;
