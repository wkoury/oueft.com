import Head from "next/head";
import React from "react";
import styles from "../../styles/Home.module.css";

export default function Index () {
    return(
        <div className={styles.container}>
            <Head>
                <title>Results</title>
            </Head>

            <div classname={styles.statsContainer}>
                <iframe
                    className={styles.stats}
                    src="stats/OUEFT2020qzx_standings.html"
                    name="Stats"
                ></iframe>
            </div>

            {/* <main>
                <h2>Most Recent Results</h2>
                <h6>As of Round 0</h6>
            </main> */}
            
        </div>
    );
}