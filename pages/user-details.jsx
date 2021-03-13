import { useContext, useEffect, useState } from "react";
import Link from "next/link";
import { BookingContext, ACTIONS } from "../components/BookingContext";
import { useRouter } from "next/router";
import axios from "axios";
import moment from "moment";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import style from "../styles/AuthStyles/AuthForm.module.css";
import styles from "../styles/bookService/UserDetails.module.css";
import bookStyle from "../styles/BookService.module.css";

const UserDetails = () => {
  const [state, dispatch] = useContext(BookingContext);
  const [error, setError] = useState(null);
  const router = useRouter();

  useEffect(() => {
    if (error) {
      toast.error(error, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  }, [error]);

  const handleNext = async () => {
    if (
      state.brand &&
      state.variant &&
      state.bookingDate &&
      state.bookingTime &&
      state.name &&
      state.email &&
      state.phone &&
      state.houseNumber &&
      state.streetNumber &&
      state.city &&
      state.state &&
      state.postalCode &&
      state.dob
    ) {
      try {
        const respose = await axios({
          url: "http://localhost:8080/api/booking",
          method: "POST",
          data: {
            brand: state.brand,
            variant: state.variant,
            bookingDate: moment(state.bookingDate).toISOString(),
            bookingTime: state.bookingTime,
            name: state.name,
            email: state.email,
            phone: state.phone,
            houseNumber: state.houseNumber,
            streetNumber: state.streetNumber,
            city: state.city,
            state: state.state,
            postalCode: state.postalCode,
            dob: moment(state.dob).toISOString(),
            note: state.note,
          },
        });
        if (respose.status === 201) {
          window.alert("booking successfull");
          router.replace("/");
        }
      } catch (err) {
        setError(err.response.data.msg);
      }
    } else {
      window.alert("please fill the required field");
    }
  };

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={8000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        className={style.myToast}
      />
      <div className={styles.userDetails}>
        <div className={bookStyle.container} className={styles.status}>
          <div
            className={`${bookStyle.progressSection} ${styles.progressSection}`}
          >
            <div
              className={`${bookStyle.progressContainer} ${styles.progressContainer}`}
            >
              <label htmlFor="brand">1. brand</label>
              <div
                className={`${bookStyle.progressBarWrapper} ${styles.progressBarWrapper}`}
              >
                <p></p>
              </div>
            </div>
            <div
              className={`${bookStyle.progressContainer} ${styles.progressContainer}`}
            >
              <label htmlFor="time">2. preferrable time</label>
              <div
                className={`${bookStyle.progressBarWrapper} ${styles.progressBarWrapper}`}
              >
                <p></p>
              </div>
            </div>
            <div
              className={`${bookStyle.progressContainer} ${styles.progressContainer}`}
            >
              <label htmlFor="details">3. details</label>
              <div
                className={`${bookStyle.progressBarWrapper} ${styles.progressBarWrapper}`}
              >
                <p></p>
              </div>
            </div>
            <div
              className={`${bookStyle.progressContainer} ${styles.progressContainer}`}
            >
              <label htmlFor="done">4. done</label>
              <div
                className={`${bookStyle.progressBarWrapper} ${styles.progressBarWrapper}`}
              >
                <p></p>
              </div>
            </div>
          </div>
          <div className={styles.infoContainer}>
            <p className={styles.info}>
              You selected a service booking for DUKE 250 at 3:00 pm on February
              27, 2021. Please provide your details in the form below to proceed
              with the booking.
            </p>
          </div>
        </div>

        <div className={styles.details}>
          <div className={styles.inputWrapper}>
            <div className={styles.inputs1}>
              <label>Name</label>
              <input
                type="text"
                name="name"
                value={state.name}
                onChange={(e) => {
                  dispatch({
                    type: ACTIONS.name,
                    payload: { name: e.target.value },
                  });
                }}
                required
              />
            </div>
            <div className={styles.inputs1}>
              <label>Phone</label>
              <input
                type="text"
                name="phone"
                value={state.phone}
                onChange={(e) => {
                  dispatch({
                    type: ACTIONS.phone,
                    payload: { phone: e.target.value },
                  });
                }}
                required
              />
            </div>
            <div className={styles.inputs1}>
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={state.email}
                onChange={(e) => {
                  dispatch({
                    type: ACTIONS.email,
                    payload: { email: e.target.value },
                  });
                }}
                required
              />
            </div>
          </div>
          <h1>Address</h1>
          <div className={styles.inputs2}>
            <label>HouseNumber / StreetNumber</label>
            <input
              type="text"
              name="houseNumber"
              value={state.houseNumber}
              onChange={(e) => {
                dispatch({
                  type: ACTIONS.houseNumber,
                  payload: { houseNumber: e.target.value },
                });
              }}
              required
            />
          </div>
          <div className={styles.inputs2}>
            <label>Street Address</label>
            <input
              type="text"
              name="address"
              value={state.streetNumber}
              onChange={(e) => {
                dispatch({
                  type: ACTIONS.streetNumber,
                  payload: { streetNumber: e.target.value },
                });
              }}
              required
            />
          </div>
          <div className={styles.inputs2}>
            <label>City</label>
            <input
              type="text"
              name="city"
              value={state.city}
              onChange={(e) => {
                dispatch({
                  type: ACTIONS.city,
                  payload: { city: e.target.value },
                });
              }}
              required
            />
          </div>
          <div className={styles.inputs2}>
            <label>State</label>
            <input
              type="text"
              name="state"
              value={state.state}
              onChange={(e) => {
                dispatch({
                  type: ACTIONS.state,
                  payload: { state: e.target.value },
                });
              }}
              required
            />
          </div>
          <div className={styles.inputs2} className={styles.inputs4}>
            <label>Postal Code</label>
            <input
              type="text"
              name="postalCode"
              onChange={(e) => {
                dispatch({
                  type: ACTIONS.postalCode,
                  payload: { postalCode: e.target.value },
                });
              }}
              required
            />
          </div>
          <div className={styles.inputs1}>
            <label>Date Of Birth</label>
            <input
              type="date"
              name="date"
              id="date"
              value={state.dob}
              onChange={(e) => {
                dispatch({
                  type: ACTIONS.dob,
                  payload: { dob: e.target.value },
                });
              }}
              required
            />
          </div>
          <div className={styles.inputs3}>
            <label>Special Notes(if any)</label>
            <textarea
              name="note"
              id="note"
              cols="30"
              rows="10"
              onChange={(e) => {
                dispatch({
                  type: ACTIONS.note,
                  payload: { note: e.target.value },
                });
              }}
              required
            ></textarea>
          </div>
        </div>
        <div className={styles.bottom}>
          <div>
            <hr />
          </div>
          <div>
            <Link href="/fix-date">
              <button>&larr; Back</button>
            </Link>
            <button onClick={handleNext}>Next &rarr;</button>
          </div>
        </div>
      </div>
      <div className={styles.end}></div>
    </>
  );
};

export default UserDetails;
