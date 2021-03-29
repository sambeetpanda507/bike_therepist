import { useState } from "react";
import moment from "moment";
import styles from "../../styles/adminDashboard/invoices.module.css";

const Payments = ({ paymentData }) => {
  const [modal, setModal] = useState(false);

  const handleModal = () => {
    console.log("Entered");
    setModal((prev) => !prev);
  };

  return (
    <div className={styles.invoices}>
      <div className={styles.invoice}>
        <div>
          <h1>Payments</h1>
          <p>Dashboard / Payments</p>
        </div>
      </div>
      <div className={styles.search}>
        {/* <div className={styles.wrapper}>
          <input type="text" list="client-id" required />
          <label>Client ID</label>
          <datalist id="client-id">
            {paymentData.map((payment, index) => {
              return <option value={payment._id} key={index} />;
            })}
          </datalist>
        </div> */}
        <div className={styles.wrapper}>
          <input type="text" list="clientEmail" required />
          <label>Email</label>
          <datalist id="clientEmail">
            {paymentData.map((payment, index) => {
              return <option value={payment.email} key={index} />;
            })}
          </datalist>
        </div>
        <div className={styles.btn} onClick={handleModal}>
          <i className="fas fa-search"></i> &nbsp;&nbsp;SEARCH
        </div>
        <div className={`${styles.modal} ${modal ? styles.modalOn : ""}`}>
          <div className={styles.close} onClick={handleModal}>
            X
          </div>
          <div className={styles.modalIn}>
            <div className={styles.invo}>
              <div>
                <i class="fas fa-tools"></i>
                <h1>
                  <span>Bike</span>Therapist
                </h1>
              </div>
              <div>
                <h1>Client ID</h1>
                <p>#09sa87as656hsjchj82r3</p>
                <h3>
                  <span>Date : </span>
                  {Date().toString().split("G")[0]}
                </h3>
              </div>
            </div>

            <div className={styles.userInfo}>
              <div>
                <h2>User Details</h2>
                <p>
                  <span>Name : </span>Tarun Koli
                </p>
                <p>
                  <span>Email : </span>abc@gmail.com
                </p>
                <p>
                  <span>Phone : </span>9876543210
                </p>
                <p>
                  <span>Dob : </span>02-june-2001
                </p>
                <p>
                  <span>Address : </span>L-1 7/433,Sangam Vihar,New Delhi-
                  110080,L-1 7/433,Sangam Vihar,L-1 7/433,Sangam Vihar,New
                  Delhi- 110080,L-1 7/433,Sangam Vihar
                </p>
              </div>

              <div>
                <h2>Payment Details</h2>
                <p>
                  <span>Amount Paid : </span>Rs.560
                </p>
                <p>
                  <span>BankName : </span>State Bank Of India
                </p>
                <p>
                  <span>State : </span>New delhi
                </p>
                <p>
                  <span>Type : </span>UPI
                </p>
                <p>
                  <span>PaymentID : </span>#343tfe5yg32rffer45
                </p>
              </div>
            </div>

            <div className={styles.demand}>
              <h2>Service details</h2>
              <div>
                <p>Brand</p>
                <p>Varient</p>
                <p>Booking Date</p>
                <p>Booking Time</p>
              </div>
              <div>
                <p>Yamaha</p>
                <p>KTM ,Model 1.2</p>
                <p>12 March 2021</p>
                <p>3:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.table3}>
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Client ID</th>
              <th>Email</th>
              <th>Paid Date</th>
              <th>Payment Amount</th>
              <th>Payment Type</th>
            </tr>
          </thead>
          <tbody>
            {paymentData.map((payment, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{payment._id}</td>
                  <td>{payment.email}</td>
                  <td>{moment(payment.createdAt).format("MMMM Do YYYY")}</td>
                  <td>{`₹ ${payment.amount / 100} /-`}</td>
                  <td>{payment.type}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Payments;
