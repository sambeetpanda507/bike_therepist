import styles from '../styles/bookService/UserDetails.module.css';
import bookStyle from "../styles/BookService.module.css";

const UserDetails=()=>{

    const day = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,
                25,26,27,28,29,30,31];
    const year = [1990,1991,1992,1993,1994,1995,1996,1997,1998,1999,2000,2001,
        2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,
    2016,2017,2018,2019,2020,2021];

    const years = year.map((p,key)=><option key={key} value={p}>{p}</option>);

    const days= day.map((p,key) =>  <option key={key} value={p}>{p}</option>);

    return(
        <div className={styles.userDetails}>
            <div className={bookStyle.container} className={styles.status}>
                <div className={bookStyle.progressSection}>
                    <div className={bookStyle.progressContainer}>
                        <label htmlFor="brand">1. brand</label>
                        <div className={bookStyle.progressBarWrapper}>
                            <p></p>
                        </div>
                    </div>
                    <div className={bookStyle.progressContainer}>
                        <label htmlFor="time">2. preferrable time</label>
                        <div className={bookStyle.progressBarWrapper}>
                            <p></p>
                        </div>
                    </div>
                    <div className={bookStyle.progressContainer}>
                        <label htmlFor="details">3. details</label>
                        <div className={bookStyle.progressBarWrapper}>
                            <p></p>
                        </div>
                    </div>
                    <div className={bookStyle.progressContainer}>
                        <label htmlFor="done">4. done</label>
                        <div className={bookStyle.progressBarWrapper}>
                            <p></p>
                        </div>
                    </div>
                </div>
                <div className={styles.infoContainer}>
                    <p className={styles.info}>You selected a service booking for
                    DUKE 250 at 3:00 pm on February 27, 2021.<br />Please provide your
                    details in the form below to proceed with the booking.</p></div>
            </div>

            <div className={styles.details}>
                <div className={styles.inputs1}>
                    <label>Name</label>
                    <input type="text" name="name" />
                </div>
                <div className={styles.inputs1}>
                    <label>Phone</label>
                    <input type="text" name="name" />
                </div>
                <div className={styles.inputs1}>
                    <label>Email</label>
                    <input type="text" name="name" />
                </div>
                <h1>Address</h1>
                <div className={styles.inputs2}>
                    <label>HouseNumber / StreetNumber</label>
                    <input type="text" name="name" />
                </div>
                <div className={styles.inputs2}>
                    <label>Street Address</label>
                    <input type="text" name="name" />
                </div>
                <div className={styles.inputs2}>
                    <label>City</label>
                    <input type="text" name="name" />
                </div>
                <div className={styles.inputs2}>
                    <label>State Relegion</label>
                    <input type="text" name="name" />
                </div>
                <div className={styles.inputs2} className={styles.inputs4}>
                    <label>Postal Code</label>
                    <input type="text" name="name" />
                    <input type="text" name="name" />
                    <input type="text" name="name" />
                
                </div>
                <div className={styles.inputs1}>
                    <label>BirthDay</label>
                    <select name="year">
                    <option value="">--Select Year--</option>
                      {years}
                    </select>
                </div>
                <div className={styles.inputs1}>
                    <label>&nbsp;</label>
                    <select name="month">
                    <option value="">--Select Month--</option>
                        <option value="january">January</option>
                        <option value="january">Febuary</option>
                        <option value="january">March</option>
                        <option value="january">April</option>
                        <option value="january">May</option>
                        <option value="january">June</option>
                        <option value="january">July</option>
                        <option value="january">August</option>
                        <option value="january">September</option>
                        <option value="january">October</option>
                        <option value="january">November</option>
                        <option value="january">December</option>
                    </select>
                </div>
                <div className={styles.inputs1}>
                    <label>&nbsp;</label>
                   <select name="day" >
                   <option value="">--Select Day--</option>
                       {days}
                   </select>
                </div>
                <div className={styles.inputs2} className={styles.inputs3}>
                    <label>Special Notes(if any)</label>
                    <input type="text" name="name" />
                </div>
            </div>
            <div className={styles.bottom}>
                <div><hr /></div>
                <div>
                    <button>&larr; Back</button>
                    <button>Next &rarr;</button>
                </div>
            </div>
            <div className={styles.end}></div>
        </div>
    );
};

export default UserDetails;