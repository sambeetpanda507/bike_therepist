import Head from "next/head";
import Landing from "../components/indexComponents/Landing";
import BookServices from "../components/indexComponents/BookService";
import OurServices from "../components/indexComponents/OurServices";
import AboutBike from "../components/indexComponents/AboutBike";
import BookNow from "../components/indexComponents/BookNow";

export default function Home() {
  return (
    <section id="home">
      <Head>
        <title>BikeTherapist</title>
        <meta
          name="description"
          content="Bike therapist is a website which provides complete service for a bike"
        />
      </Head>
      <Landing />
      <BookServices />
      <OurServices />
      <AboutBike />
      <BookNow />
    </section>
  );
}
