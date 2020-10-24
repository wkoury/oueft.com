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
          <p>is hosting</p>
          <span>an <a href="https://www.naqt.com/registration/field.jsp?tournament_id=11791" rel="noopener noreferrer" target="_blank">online NAQT tournament</a></span>
          <p>on <a href="https://www.notion.so/Oklahoma-Early-Fall-Tournament-2020-d3e32cef3be74fa99dd45914002474a3" rel="noopener noreferrer" target="_blank">October 24</a>!</p>
        </div>
        <br></br>
        <h3>Important Links:</h3>
        <p><a href="https://www.notion.so/c30c250946a04b469ef752d5b4ceb796?v=9d216d9730344d80bfc5d197bffb25c7" rel="noopener noreferrer" target="_blank">Tournament HQ</a></p>
        <p><a href="https://www.notion.so/Playoffs-Pools-Schedule-958810c40e5441b19825e8128d572ad8" rel="noopener noreferrer" target="_blank">Playoff Pools & Schedule</a></p>
        <p><a href="https://www.notion.so/Preliminary-Pools-Schedule-ac0ace758e4f4cc5bae7842a7d45da83" rel="noopener noreferrer" target="_blank">Preliminary Pools & Schedule</a></p>
        <Link href="/stats"><a rel="noopener noreferrer" target="_blank">Most Recent Stats</a></Link>
        <p><a href="https://www.notion.so/Resources-for-Moderators-90926db5ba18456590e79c8715339c4e" rel="noopener noreferrer" target="_blank">Resources for Moderators</a></p>
      </main>
      <div className={styles.footer}>
        <span>©2020 <a href="https://wkoury.com" rel="noopener noreferrer" target="_blank">Will Koury</a></span>
      </div>
    </div>
  );
}
