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
            <div className={styles.modalIn}></div>
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
