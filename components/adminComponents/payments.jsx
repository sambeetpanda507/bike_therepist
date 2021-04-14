import { useState } from "react";
import moment from "moment";
import axios from "axios";
import styles from "../../styles/adminDashboard/invoices.module.css";

const Payments = ({ paymentData }) => {
  const [modal, setModal] = useState(false);
  const [email, setEmail] = useState("");
  const [paymentModalData, setPaymentModalData] = useState(null);
  const [customerModalData, setCustomerModalData] = useState(null);
  const handleModalOpen = () => {
    if (!email || email.length === 0) {
      return alert("please enter email id");
    }
    axios({
      url: `http://localhost:8080/api/payment-details?email=${email}`,
      method: "GET",
    })
      .then((res) => {
        if (res.status === 200) {
          setPaymentModalData(res.data);
          axios({
            url: `http://localhost:8080/api/customer-details?customerId=${res.data.customerId}`,
            method: "GET",
          })
            .then((data) => {
              if ((data.status = 200)) {
                setCustomerModalData(data.data);
              }
            })
            .catch((error) => {
              console.log(error);
            });
        }
      })
      .catch((err) => console.log(err));
    setModal(true);
  };

  const handleModalClose = () => {
    setCustomerModalData(null);
    setPaymentModalData(null);
    setModal(false);
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
        <div className={styles.wrapper}>
          <input
            type="text"
            list="clientEmail"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
          />
          <label>Email</label>
          <datalist id="clientEmail">
            {paymentData.map((payment, index) => {
              return <option value={payment.email} key={index} />;
            })}
          </datalist>
        </div>
        <div className={styles.btn} onClick={handleModalOpen}>
          <i className="fas fa-search"></i> &nbsp;&nbsp;SEARCH
        </div>
        <div className={`${styles.modal} ${modal ? styles.modalOn : ""}`}>
          <div className={styles.close} onClick={handleModalClose}>
            X
          </div>
          <div className={styles.modalIn}>
            <div className={styles.invo}>
              <div>
                <i className="fas fa-tools"></i>
                <h1>
                  <span>Bike</span>Therapist
                </h1>
              </div>
              <div>
                <h1>Client ID</h1>
                <p>
                  {customerModalData ? customerModalData.customer._id : "N/A"}
                </p>
                <h3>
                  <span>Date : </span>
                  {moment(Date.now()).format("MMMM Do YYYY")}
                </h3>
              </div>
            </div>

            <div className={styles.userInfo}>
              <div>
                <h2>User Details</h2>
                <p>
                  <span>Name : </span>
                  {customerModalData ? customerModalData.customer.name : "N/A"}
                </p>
                <p>
                  <span>Email : </span>
                  {customerModalData ? customerModalData.customer.email : "N/A"}
                </p>
                <p>
                  <span>Phone : </span>
                  {customerModalData ? customerModalData.customer.phone : "N/A"}
                </p>
                <p>
                  <span>Dob : </span>
                  {moment(
                    customerModalData ? customerModalData.customer.dob : "N/A"
                  ).format("MMMM Do YYYY")}
                </p>
                <p>
                  <span>Address : </span>
                  {`${
                    customerModalData
                      ? customerModalData.customer.houseNumber
                      : "N/A"
                  }, ${
                    customerModalData
                      ? customerModalData.customer.streetNumber
                      : "N/A"
                  }, ${
                    customerModalData ? customerModalData.customer.city : "N/A"
                  }, ${
                    customerModalData ? customerModalData.customer.state : "N/A"
                  }, ${
                    customerModalData
                      ? customerModalData.customer.postalCode
                      : "N/A"
                  }`}
                </p>
              </div>

              <div>
                <h2>Payment Details</h2>
                <p>
                  <span>Amount Paid : </span> ₹
                  {paymentModalData
                    ? parseInt(paymentModalData.amount) / 100
                    : "N/A"}
                </p>
                <p>
                  <span>State : </span>
                  {customerModalData
                    ? customerModalData.customer.state.toUpperCase()
                    : "N/A"}
                </p>
                <p>
                  <span>Type : </span>
                  {paymentModalData
                    ? paymentModalData.type.toUpperCase()
                    : "N/A"}
                </p>
                <p>
                  <span>PaymentID : </span>
                  {paymentModalData ? paymentModalData.paymentId : "N/A"}
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
                <p>
                  {customerModalData ? customerModalData.customer.brand : "N/A"}
                </p>
                <p>
                  {customerModalData
                    ? customerModalData.customer.variant
                    : "N/A"}
                </p>
                <p>
                  {customerModalData
                    ? moment(customerModalData.customer.bookingDate).format(
                        "MMMM Do YYYY"
                      )
                    : "N/A"}
                </p>
                <p>
                  {customerModalData
                    ? moment(customerModalData.customer.createdAt).format("LTS")
                    : "N/A"}
                </p>
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
