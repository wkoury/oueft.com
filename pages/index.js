import Head from "next/head";
import React from "react";
import styles from "../styles/Home.module.css";
import Link from "next/link";

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
          <span>an <a href="https://www.naqt.com/registration/field.jsp?tournament_id=11791" rel="noopener noreferrer" target="_blank">online NAQT tournament</a></span>
          <p>on <a href="https://www.notion.so/Oklahoma-Early-Fall-Tournament-2020-d3e32cef3be74fa99dd45914002474a3" rel="noopener noreferrer" target="_blank">October 24</a>!</p>
        </div>
        <br></br>
        <Link href="https://www.naqt.com/stats/tournament/standings.jsp?tournament_id=11791"><a rel="noopener noreferrer" target="_blank">Results</a></Link>
      </main>
      <div className={styles.footer}>
        <span>©2020 <a href="https://wkoury.com" rel="noopener noreferrer" target="_blank">Will Koury</a></span>
      </div>
    </div>
  );
}
