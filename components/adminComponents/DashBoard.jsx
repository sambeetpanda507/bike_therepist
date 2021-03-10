import Link from "next/link";
import styles from "../../styles/adminDashboard/dashboard.module.css";

const DashBoard = () => {
  return (
    <div className={styles.dashboard}>
      <div className={styles.welcome}>
        <div>
          <h1>Welcome Admin!</h1>
          <p>Dashboard</p>
        </div>
        <div className={styles.hide}>
          <i class="fas fa-user-circle"></i>
        </div>
      </div>

      <div className={styles.first}>
        <div className={styles.f1}>
          <div className={styles.icon}>
            <div>
              <i class="fas fa-tools"></i>
            </div>
          </div>
          <div className={styles.info}>
            <div>
              <h1>15</h1>
              <p>Today's Services</p>
            </div>
          </div>
        </div>

        <div className={styles.f2}>
          <div className={styles.icon}>
            <div>
              <i class="fas fa-users-cog"></i>
            </div>
          </div>
          <div className={styles.info}>
            <div>
              <h1>8</h1>
              <p>User Admins</p>
            </div>
          </div>
        </div>

        <div className={styles.f3}>
          <div className={styles.icon}>
            <div>
              <i class="fas fa-phone-volume"></i>
            </div>
          </div>
          <div className={styles.info}>
            <div>
              <h1>85</h1>
              <p>Total Services</p>
            </div>
          </div>
        </div>

        <div className={styles.f4}>
          <div className={styles.icon}>
            <div>
              <i class="fas fa-cogs"></i>
            </div>
          </div>
          <div className={styles.info}>
            <div>
              <h1>10</h1>
              <p>Today's Pending</p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.second}>
        <div className={styles.s1}>
          <div>
            <h1>Services</h1>
          </div>
          <div className={styles.progress}>
            <h1>81</h1>
            <progress value="15" max="20"></progress>
          </div>
          <div>
            <p>Total Services 256.</p>
          </div>
        </div>

        <div className={styles.s2}>
          <div>
            <h1>Services</h1>
          </div>
          <div className={styles.progress}>
            <h1>81</h1>
            <progress value="15" max="20"></progress>
          </div>
          <div>
            <p>Total Services 256.</p>
          </div>
        </div>

        <div className={styles.s3}>
          <div>
            <h1>Services</h1>
          </div>
          <div className={styles.progress}>
            <h1>81</h1>
            <progress value="15" max="20"></progress>
          </div>
          <div>
            <p>Total Services 256.</p>
          </div>
        </div>

        <div className={styles.s4}>
          <div>
            <h1>Services</h1>
          </div>
          <div className={styles.progress}>
            <h1>81</h1>
            <progress value="15" max="20"></progress>
          </div>
          <div>
            <p>Total Services 256.</p>
          </div>
        </div>
      </div>

      <div className={styles.third}>
        <div className={styles.t1}>
          <div className={styles.heading}>
            <p>Invoices</p>
          </div>

          <div className={styles.table1}>
            <table>
              <thead>
                <tr>
                  <th>Invoice ID</th>
                  <th>Client</th>
                  <th>Due Date</th>
                  <th>Total</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>#INV-01</td>
                  <td>Tarun Koli</td>
                  <td>11 Mar 2019</td>
                  <td>Rs.380</td>
                  <td>Paypal</td>
                </tr>
                <tr>
                  <td>#INV-01</td>
                  <td>Tarun Koli</td>
                  <td>11 Mar 2019</td>
                  <td>Rs.380</td>
                  <td>Paypal</td>
                </tr>
                <tr>
                  <td>#INV-01</td>
                  <td>Tarun Koli</td>
                  <td>11 Mar 2019</td>
                  <td>Rs.380</td>
                  <td>Paypal</td>
                </tr>
                <tr>
                  <td>#INV-01</td>
                  <td>Tarun Koli</td>
                  <td>11 Mar 2019</td>
                  <td>Rs.380</td>
                  <td>Paypal</td>
                </tr>
                <tr>
                  <td>#INV-01</td>
                  <td>Tarun Koli</td>
                  <td>11 Mar 2019</td>
                  <td>Rs.380</td>
                  <td>Paypal</td>
                </tr>
                <tr>
                  <td>#INV-01</td>
                  <td>Tarun Koli</td>
                  <td>11 Mar 2019</td>
                  <td>Rs.380</td>
                  <td>Paypal</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className={styles.view}>
            <Link href="/invoices">
              <p>View all invoices</p>
            </Link>
          </div>
        </div>

        <div className={styles.t2}>
          <div className={styles.heading}>
            <p>Payments</p>
          </div>

          <div className={styles.table1}>
            <table>
              <thead>
                <tr>
                  <th>Invoice ID</th>
                  <th>Client</th>
                  <th>Paid Date</th>
                  <th>Amount</th>
                  <th>Type</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>#INV-01</td>
                  <td>Tarun Koli</td>
                  <td>11 Mar 2019</td>
                  <td>Rs.380</td>
                  <td>Paypal</td>
                </tr>
                <tr>
                  <td>#INV-01</td>
                  <td>Tarun Koli</td>
                  <td>11 Mar 2019</td>
                  <td>Rs.380</td>
                  <td>Paypal</td>
                </tr>
                <tr>
                  <td>#INV-01</td>
                  <td>Tarun Koli</td>
                  <td>11 Mar 2019</td>
                  <td>Rs.380</td>
                  <td>Paypal</td>
                </tr>
                <tr>
                  <td>#INV-01</td>
                  <td>Tarun Koli</td>
                  <td>11 Mar 2019</td>
                  <td>Rs.380</td>
                  <td>Paypal</td>
                </tr>
                <tr>
                  <td>#INV-01</td>
                  <td>Tarun Koli</td>
                  <td>11 Mar 2019</td>
                  <td>Rs.380</td>
                  <td>Paypal</td>
                </tr>
                <tr>
                  <td>#INV-01</td>
                  <td>Tarun Koli</td>
                  <td>11 Mar 2019</td>
                  <td>Rs.380</td>
                  <td>Paypal</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className={styles.view}>
            <Link href="/payments">
              <p>View all payments</p>
            </Link>
          </div>
        </div>
      </div>

      <div className={styles.fourth}>
        <div className={styles.fo1}>
          <div className={styles.heading}>Clients</div>
          <div className={styles.table2}>
            <table>
              <thead>
                <tr>
                  <th>Client ID</th>
                  <th>Client</th>
                  <th>Email</th>
                  <th>Brand</th>
                  <th>Varient</th>
                  <th>Date</th>
                  <th>Timing</th>
                  <th>Phone No.</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>#CLI-06</td>
                  <td>Tarun Koli</td>
                  <td>nop@gmail.com</td>
                  <td>HONDA</td>
                  <td>ACTIVA 4G</td>
                  <td>12 Mar 2019</td>
                  <td>5 PM</td>
                  <td>9876543210</td>
                  <td className={styles.decide}>
                    <button>Pending</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <Link href="/clients">
            <div className={styles.view}>View all the Clients</div>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default DashBoard;
