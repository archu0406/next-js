import Image from "next/image";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.card}>
          <h1 className={styles.title}>FIND OUR RESTAURANTS</h1>
          <p className={styles.text}>
            169 Consumer Rd #304.
            <br /> North York Toronto ON M5J 5V8
            <br /> (602) 867-1010
          </p>
          <p className={styles.text}>
            234 Mcnicoll Avenue
            <br /> Toronto, ON M3S 5V9
            <br /> (602) 867-1011
          </p>
          <p className={styles.text}>
            614 Spadina Ave
            <br /> Toronto ON, M5B 9V6
            <br /> (602) 867-1012
          </p>
          <p className={styles.text}>
            634 Dufferin Street
            <br /> Toronto ON, M5D 3V8
            <br /> (602) 867-1013
          </p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>WORKING HOURS</h1>
          <p className={styles.text}>
            MONDAY UNTIL FRIDAY
            <br /> 9:00 – 22:00
          </p>
          <p className={styles.text}>
            SATURDAY - SUNDAY
            <br /> 12:00 – 24:00
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;