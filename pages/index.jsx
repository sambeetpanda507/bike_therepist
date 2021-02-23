import Head from "next/head";
import Landing from "../components/Landing";
import BookServices from "../components/BookService";
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
    </section>
  );
}
