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
          <span><a href='https://www.naqt.com/registration/field.jsp?tournament_id=12507' rel='noopener noreferrer' target='_blank'>an in-person NAQT tournament</a></span>
          <p>on October 2!</p>
          <p><a href='https://www.naqt.com/registration/register.jsp?type=TEAM&tournament_id=12507' rel='noopener noreferrer' target='_blank'>Registration</a> opens on Tuesday, August 24!</p>
          <p>Contact <a href="mailto:wkoury@hey.com">Will Koury</a> with any questions.</p>
      </div>
    </main>
      <div className={styles.footer}>
        <span>©2021 <a href="https://wkoury.com" rel="noopener noreferrer" target="_blank">Will Koury</a></span>
      </div>
    </div>
  );
}
