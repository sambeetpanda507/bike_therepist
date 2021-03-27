import moment from "moment";
import styles from "../../styles/adminDashboard/invoices.module.css";

const Payments = ({ paymentData }) => {
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
          <label>Name</label>
          <datalist id="clientEmail">
            {paymentData.map((payment, index) => {
              return <option value={payment.email} key={index} />;
            })}
          </datalist>
        </div>
        <div className={styles.btn}>
          <i className="fas fa-search"></i> &nbsp;&nbsp;SEARCH
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
