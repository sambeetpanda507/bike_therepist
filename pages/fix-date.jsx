import Link from "next/link";
import { useState } from "react";
import bookStyle from "../styles/BookService.module.css";
import styles from "../styles/bookService/FixDate.module.css";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const FixDate = () => {
  let [date, setDate] = useState("");

  const onChange = (date) => {
    setDate(date);
    console.log(date);
  };

  return (
    <div className={styles.fixdate}>
      <div className={bookStyle.container} className={styles.status}>
        <div className={bookStyle.progressSection}>
          <div className={bookStyle.progressContainer}>
            <label htmlFor="brand">1. brand</label>
            <div className={bookStyle.progressBarWrapper}>
              <p></p>
            </div>
          </div>
          <div className={bookStyle.progressContainer}>
            <label htmlFor="time">2. preferrable time</label>
            <div className={bookStyle.progressBarWrapper}>
              <p></p>
            </div>
          </div>
          <div className={bookStyle.progressContainer}>
            <label htmlFor="details">3. details</label>
            <div className={bookStyle.progressBarWrapper}>
              <p></p>
            </div>
          </div>
          <div className={bookStyle.progressContainer}>
            <label htmlFor="done">4. done</label>
            <div className={bookStyle.progressBarWrapper}>
              <p></p>
            </div>
          </div>
        </div>
        <div className={styles.infoContainer}>
          <p className={styles.info}>
            Below you can find a list of available time slots for your DUKE 250
            service.
            <br />
            Click on a time slot to proceed with booking.
          </p>
        </div>
      </div>

      <div className={styles.calContainer}>
        <div className={styles.calender}>
          <div className={styles.cal}>
            <Calendar
              onChange={onChange}
              value={date}
              className={bookStyle.calender}
            />
          </div>

          <div className={styles.timing}>
            <Link href="/user-details">
              <div
                style={{ backgroundColor: "yellow" }}
                className={styles.btn1}
              >
                Sat,Feb 27
              </div>
            </Link>
            <div className={styles.btn1}>9:00 am</div>
            <div className={styles.btn1}>11:00 am</div>
            <div className={styles.btn1}>1:00 pm</div>
            <div className={styles.btn1}>3:00 pm</div>
            <div className={styles.btn1}>5:00 pm</div>
            <div className={styles.btn1}>7:00 pm</div>
          </div>
        </div>
        <div className={styles.logo}>
          <h1>
            <span className={styles.textLogo}>Bike</span>
            <br />
            <strong>Therapist</strong>
          </h1>
        </div>
      </div>
      <div className={styles.bottom}>
        <div>
          <hr />
        </div>
        <div>
          <button>&larr; Back</button>
        </div>
      </div>
      <div className={styles.end}></div>
    </div>
  );
};

export default FixDate;
