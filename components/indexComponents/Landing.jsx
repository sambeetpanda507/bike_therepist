import style from "../../styles/Landing.module.css";

const Landing = () => {
  return (
    <section className={style.landing} id="landing">
      <h1 className={style.headingPrimary}>
        <span className={style.mechanic}>mechanic</span> at your <br />{" "}
        <span className={style.door}>doorstep</span>
      </h1>
      <h3 className={style.headingSecondary}>At Delhi & gurgaon</h3>
      <div className={style.button}>
        <button>book now &rarr;</button>
      </div>
    </section>
  );
};

export default Landing;
