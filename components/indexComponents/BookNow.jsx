import { useEffect } from "react";
import Aos from "aos";
import Link from "next/link";
import "aos/dist/aos.css";
import style from "../../styles/BookNow.module.css";

const BookNow = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <section className={style.bookNow} id="bookNow">
      <div className={style.container}>
        <div className={style.imgDiv} data-aos="zoom-in">
          <img src="/bikeImg.webp" alt="bike image" />
        </div>
        <div className={style.content} data-aos="zoom-in">
          <div className={style.contentWrapper}>
            <p>Struggling for your bike service, not your business?</p>
            <br />
            <br />
            <h1>we can fix that</h1>
            <div className={style.btnGrp}>
              <Link href="/book-service">
                <button>book now</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookNow;
