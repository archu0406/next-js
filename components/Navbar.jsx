import Image from "next/image";
import styles from "../styles/Navbar.module.css";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.callButton}>
          <Image src="/img/telephone.png" alt="" width="32" height="32" />
        </div>
        <div className={styles.texts}>
          <div className={styles.text}>ORDER NOW!</div>
          <div className={styles.text}>012 345 678</div>
        </div>
      </div>
      <div className={styles.item}>
        <ul className={styles.list}>
          <li className={styles.listItem}><Link href="/">Homepage</Link></li>
          <li className={styles.listItem}><Link href="/">Products</Link></li>
          <li className={styles.listItem}><Link href="/">Menu</Link></li>
          <Image src="/img/logo.png" alt="" width="160px" height="69px" />
          <li className={styles.listItem}><Link href="/">Events</Link></li>
          <li className={styles.listItem}><Link href="/">Blog</Link></li>
          <li className={styles.listItem}><Link href="/">Contact</Link></li>
        </ul>
      </div>
     
      <div className={styles.item}>
        <div className={styles.cart}>
            <Link href="/cart">
                <Image src="/img/cart.png" alt="" width="30px" height="30px" />
            </Link>
            <div className={styles.counter}>2</div>
        </div>
      </div>
   
      
    </div>
  );
};

export default Navbar;