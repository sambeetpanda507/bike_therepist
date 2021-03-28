import { useState } from "react";
import moment from "moment";
import styles from "../../styles/adminDashboard/invoices.module.css";

const Payments = ({ clientsData }) => {
  const [modal, setModal] = useState(false);

  const handleModal = () => {
    console.log("Entered");
    setModal((prev) => !prev);
  };

  return (
    <div className={styles.invoices}>
      <fieldset>
        <div className={styles.invoice}>
          <div>
            <legend>
              <h1>Clients</h1>
              <p>Dashboard / Clients</p>
            </legend>
          </div>
        </div>
        <div className={styles.search}>
          <div className={styles.wrapper}>
            <input type="text" list="clientId" required />
            <label>Client ID</label>
            <datalist id="clientId">
              {clientsData.map((client, index) => {
                return <option value={client._id} key={index} />;
              })}
            </datalist>
          </div>
          <div className={styles.wrapper}>
            <input type="text" list="clientName" required />
            <label>Name</label>
            <datalist id="clientName">
              {clientsData.map((client, index) => {
                return <option value={client.name} key={index} />;
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
      </fieldset>
      <div className={styles.table3}>
        <table border="1">
          <thead>
            <tr>
              <th>Client ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Brand</th>
              <th>Varient</th>
              <th>Date</th>
              <th>Timing</th>
              <th>Phone</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {clientsData.map((client, index) => {
              return (
                <tr key={index}>
                  <td>{client._id}</td>
                  <td>{client.name}</td>
                  <td>{client.email}</td>
                  <td>{client.brand}</td>
                  <td>{client.variant}</td>
                  <td>{moment(client.bookingDate).format("MMMM Do YYYY")}</td>
                  <td>{client.bookingTime}</td>
                  <td>{client.phone}</td>
                  <td>{client.status}</td>
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
