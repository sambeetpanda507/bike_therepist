import style from "../../styles/OurClient.module.css";

const OurClient = () => {
  return (
    <section id="client" className={style.client}>
      <div className={style.containerDiv}>
        <h1 className={style.title}>
          <span>our</span> client said
        </h1>
        <div className={style.underline}></div>
        <div className={style.carouselContainer}>
          <div className={style.invertedCommaStart}>
            <img src="/comma-start.png" alt="inverted comma start" />
          </div>
          <div className={`${style.prevBtn} ${style.carouselBtn}`}>&#8668;</div>
          <ul className={style.carousel}>
            <li className={style.carouselItem}>
              <div>
                <p className={style.carouselTitle}>
                  Lorem Ipsum is simply dummy text of the printing
                  <hr />
                </p>
                <p className={style.carouselContent}>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don't look
                  even slightly believable. If you are going to use a passage of
                  Lorem Ipsum, you need to be sure there isn't anything
                  embarrassing hidden in the middle of text.
                </p>
              </div>
            </li>
          </ul>
          <div className={`${style.nextBtn} ${style.carouselBtn}`}>&#8669;</div>
          <div className={style.invertedCommaEnd}>
            <img src="/comma-end.png" alt="inverted comma end" />
          </div>
        </div>
        <div className={style.carouselDots}>
          <div className={style.dot}></div>
          <div className={style.dot}></div>
          <div className={style.dot}></div>
        </div>
      </div>
      <div className={style.bar}></div>
    </section>
  );
};
export default OurClient;
