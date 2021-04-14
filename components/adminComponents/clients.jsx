import { useState, useEffect } from "react";
import moment from "moment";
import styles from "../../styles/adminDashboard/invoices.module.css";

const Payments = ({ clientsData }) => {
  const [modal, setModal] = useState(false);
  const [clientId, setClientId] = useState("");
  const [clientEmail, setClientEmail] = useState("");
  const [modalData, setModalData] = useState(null);

  useEffect(() => {
    if (clientId.length > 0) {
      const client = clientsData.find((value, index, arr) => {
        return value._id === clientId;
      });
      if (client) setClientEmail(client.email);
    }
    if (clientEmail.length > 0 && !clientId.length > 0) {
      const client = clientsData.find((value, index, arr) => {
        return value.email === clientEmail;
      });
      if (client) setClientId(client._id);
    }
  }, [clientId, clientEmail]);

  const handleModalOpen = () => {
    let client;
    if (clientId.length > 0 && clientEmail.length > 0) {
      client = clientsData.find((value, index, arr) => {
        return value._id === clientId;
      });
      if (client) setModalData(client);
    } else {
      return alert("please fill the required field");
    }
    setModal(true);
  };

  const handleModalClose = () => {
    setModal(false);
    setModalData(null);
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
            <input
              type="text"
              list="clientId"
              value={clientId}
              onChange={(e) => {
                setClientEmail("");
                setClientId(e.target.value);
              }}
              required
            />
            <label>Client ID</label>
            <datalist id="clientId">
              {clientsData.map((client, index) => {
                return <option value={client._id} key={index} />;
              })}
            </datalist>
          </div>
          <div className={styles.wrapper}>
            <input
              type="text"
              list="clientEmail"
              value={clientEmail}
              onChange={(e) => {
                setClientId("");
                setClientEmail(e.target.value);
              }}
              required
            />
            <label>Email</label>
            <datalist id="clientEmail">
              {clientsData.map((client, index) => {
                return <option value={client.email} key={index} />;
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
                  <p>{modalData ? modalData._id : "N/A"}</p>
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
                    {modalData ? modalData.name : "N/A"}
                  </p>
                  <p>
                    <span>Email : </span>
                    {modalData ? modalData.email : "N/A"}
                  </p>
                  <p>
                    <span>Phone : </span>
                    {modalData ? modalData.phone : "N/A"}
                  </p>
                  <p>
                    <span>Dob : </span>
                    {modalData
                      ? moment(modalData.dob).format("MMMM Do YYYY")
                      : "N/A"}
                  </p>
                  <p>
                    <span>Address : </span>
                    {`${modalData ? modalData.houseNumber : "N/A"}, ${
                      modalData ? modalData.streetNumber : "N/A"
                    }, ${modalData ? modalData.city : "N/A"}, ${
                      modalData ? modalData.state : "N/A"
                    }, ${modalData ? modalData.postalCode : "N/A"}`}
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
                  <p>{modalData ? modalData.brand : "N/A"}</p>
                  <p>{modalData ? modalData.state.toUpperCase() : "N/A"}</p>
                  <p>
                    {modalData
                      ? moment(modalData.bookingDate).format("MMMM Do YYYY")
                      : "N/A"}
                  </p>
                  <p>
                    {modalData
                      ? moment(modalData.createdAt).format("LTS")
                      : "N/A"}
                  </p>
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
