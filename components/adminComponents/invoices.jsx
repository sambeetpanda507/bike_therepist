import styles from "../../styles/adminDashboard/invoices.module.css";

const Invoices = () => {
  return (
    <div className={styles.invoices}>
      <div className={styles.invoice}>
        <div>
          <h1>Invoices</h1>
          <p>Dashboard / Invoices</p>
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
            <th>#</th>
            <th>Client ID</th>
            <th>Name</th>
            <th>Paid Date</th>
            <th>Total</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
          <tr>
            <td>1.</td>
            <td>Client ID</td>
            <td>Name</td>
            <td>Paid Date</td>
            <td>Total</td>
            <td>Status</td>
            <td>:</td>
          </tr>
          <tr>
            <td>1.</td>
            <td>Client ID</td>
            <td>Name</td>
            <td>Paid Date</td>
            <td>Total</td>
            <td>Status</td>
            <td>:</td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Invoices;