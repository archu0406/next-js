import Image from "next/image";
import styles from "../styles/IcecreamCard.module.css";
import Link from "next/link";

function IcecreamCard ({title, price, img, description}) {
  return (

    <div className={styles.container}>
        <Link href="/product/213">
        <div className={styles.imgContainer}>
                <Image
                  src={img ? img : '/img/2.jpg'}
                  layout="fill"
                  objectFit="contain"
                  alt=""
                />
        </div>
        </Link>
        <h1 className={styles.title}>{title}</h1>
        <span className={styles.price}>{price}</span>
        <p className={styles.desc}>{description}</p>
    </div>
  );
};

export default IcecreamCard;