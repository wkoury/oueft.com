import Head from "next/head";
import React from "react";
import styles from "../styles/Home.module.css";
import NAQT_LINK from "../services/NAQT";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Oklahama Early Fall Tournament</title>
      </Head>
      <main>
        <div className={styles.announcement}>
          <p>The OU Academic Team</p>
          <p>hosted</p>
          <span>an <a href={NAQT_LINK} rel="noopener noreferrer" target="_blank">online NAQT tournament</a></span>
          <p>on October 24!</p>
        </div>
      </main>
      <div className={styles.footer}>
        <span>©2020 <a href="https://wkoury.com" rel="noopener noreferrer" target="_blank">Will Koury</a></span>
      </div>
    </div>
  );
}
