import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import style from "../../styles/Brand.module.css";
const brandLogos = [
  "/brand-logo1.svg",
  "/brand-logo2.svg",
  "/brand-logo3.svg",
  "/brand-logo4.svg",
  "/brand-logo5.svg",
  "/brand-logo6.svg",
  "/brand-logo7.svg",
  "/brand-logo8.svg",
  "/brand-logo9.svg",
  "/brand-logo10.svg",
];
const Brand = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <section id="brand" className={style.brand}>
      <div className={style.container}>
        <h1 className={style.primaryHeading} data-aos="fade-up">
          <span className={style.brands}>brands</span> we serve
        </h1>
        <div className={style.logoDiv}>
          {brandLogos.map((val, index) => {
            return (
              <div className={style.logo} key={index} data-aos="zoom-in">
                <img src={val} alt="brand logo" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Brand;
