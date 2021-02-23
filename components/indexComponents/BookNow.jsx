import style from "../../styles/BookNow.module.css";

const BookNow = () => {
  return (
    <section className={style.bookNow} id="bookNow">
      <div className={style.container}>
        <div className={style.imgDiv}>
          <img src="/bikeImg.png" alt="bike image" />
        </div>
        <div className={style.content}>
          <div className={style.contentWrapper}>
            <p>Struggling for your bike service, not your business?</p>
            <br />
            <br />
            <h1>we can fix that</h1>
            <div className={style.btnGrp}>
              <button>book now</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookNow;
