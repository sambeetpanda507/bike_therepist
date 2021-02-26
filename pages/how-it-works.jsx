import Head from "next/head";
import Landing from "../components/howItWorks/Landing";
const HowItWorks = () => {
  return (
    <section id="how">
      <Head>
        <meta
          title="description"
          content="this page will show you how biketherapist works and what are its functionality"
        />
        <title>How It Works ?</title>
      </Head>
      <Landing />
    </section>
  );
};
export default HowItWorks;
