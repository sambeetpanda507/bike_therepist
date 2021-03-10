import styles from "../../styles/adminDashboard/invoices.module.css";

const Payments = () => {
  return (
    <div className={styles.invoices}>
      <div className={styles.invoice}>
        <div>
          <h1>Clients</h1>
          <p>Dashboard / Clients</p>
        </div>
      </div>
      <div className={styles.search}>
        <div className={styles.wrapper}>
          <input type="text" required />
          <label>Client ID</label>
        </div>
        <div className={styles.wrapper}>
          <input type="text" required />
          <label>Name</label>
        </div>
        <div className={styles.btn}>
          <i class="fas fa-search"></i> &nbsp;&nbsp;SEARCH
        </div>
      </div>
      <div className={styles.table3}>
        <table>
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
          <tr>
            <td>1</td>
            <td>Client ID</td>
            <td>Name</td>
            <td>Paid Date</td>
            <td>Total</td>
            <td>Status</td>
            <td>5pm</td>
            <td>9876543210</td>
            <td>
              <button>Pending</button>
            </td>
          </tr>
          <tr>
            <td>1</td>
            <td>Client ID</td>
            <td>Name</td>
            <td>Paid Date</td>
            <td>Total</td>
            <td>Status</td>
            <td>5pm</td>
            <td>9876543210</td>
            <td>
              <button>Pending</button>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Payments;
