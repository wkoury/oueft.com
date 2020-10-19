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
        <p>The OU Academic Team</p>
        <p>is hosting</p>
        <span>an <a href="https://www.naqt.com/registration/field.jsp?tournament_id=11791" rel="noopener noreferrer" target="_blank">online NAQT tournament</a></span>
        <p>on <a href="https://www.notion.so/Oklahoma-Early-Fall-Tournament-2020-d3e32cef3be74fa99dd45914002474a3" rel="noopener noreferrer" target="_blank">October 24</a>!</p>
      </main>
    </div>
  );
}
