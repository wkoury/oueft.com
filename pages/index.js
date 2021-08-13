import Head from "next/head";
import React from "react";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Oklahama Early Fall Tournament</title>
      </Head>
      <main>
        <div className={styles.announcement}>
          <p>The OU Academic Team</p>
          <p>is hosting</p>
          <span>an in-person NAQT tournament</span>
          <p>on October 2!</p>
          <p>Registration will be made available to the public soon.</p>
          <p>Contact <a href="mailto:wkoury@hey.com">Will Koury</a> for details.</p>
      </div>
    </main>
      <div className={styles.footer}>
        <span>©2021 <a href="https://wkoury.com" rel="noopener noreferrer" target="_blank">Will Koury</a></span>
      </div>
    </div>
  );
}
