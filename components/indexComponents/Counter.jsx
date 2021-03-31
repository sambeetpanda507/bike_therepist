import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import style from "../../styles/Counter.module.css";

const Counter = () => {
  return (
    <section id="counter" className={style.counter}>
      <div className={style.containerDiv}>
        <h1 className={style.primaryHeading}>
          Excellence in Automotive Services Since 2001
        </h1>
        <div className={style.counterDiv}>
          <div className={style.count}>
            <CountUp start={0} end={10} delay={0}>
              {({ countUpRef, start }) => (
                <VisibilitySensor onChange={start} delayedCall>
                  <div>
                    <span ref={countUpRef} className={style.actualCount} />
                  </div>
                </VisibilitySensor>
              )}
            </CountUp>
            <p className={style.countDesc}>year of experience</p>
          </div>
          <div className={style.count}>
            <CountUp start={0} end={167} delay={0}>
              {({ countUpRef, start }) => (
                <VisibilitySensor onChange={start} delayedCall>
                  <div>
                    <span ref={countUpRef} className={style.actualCount} />
                  </div>
                </VisibilitySensor>
              )}
            </CountUp>
            <p className={style.countDesc}>Two-wheeler serviced at Doorstep</p>
          </div>
          <div className={style.count}>
            <CountUp start={0} end={80} delay={0}>
              {({ countUpRef, start }) => (
                <VisibilitySensor onChange={start} delayedCall>
                  <div>
                    <span ref={countUpRef} className={style.actualCount} />
                  </div>
                </VisibilitySensor>
              )}
            </CountUp>
            <p className={style.countDesc}>Happy Customers</p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Counter;
