import Head from "next/head";
import Image from "next/image";
import Featured from "../components/Featured";
import IcecreamList from "../components/IcecreamList";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>TOP N TOWN Icecream Shop</title>
        <meta name="description" content="Best ice cream shop in town" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured/>
      <IcecreamList/>
    </div>
  );
}