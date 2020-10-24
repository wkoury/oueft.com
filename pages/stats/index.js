import Head from "next/head";
import React from "react";
import styles from "../../styles/Home.module.css";

export default function Index() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Results</title>
            </Head>

            <div className={styles.statsContainer}>
                <iframe
                    className={styles.stats}
                    src="stats/report.html_standings.html"
                    name="Stats"
                ></iframe>
            </div>
        </div>
    );
}