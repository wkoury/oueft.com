import Head from "next/head";
import React from "react";
import styles from "../../styles/Home.module.css";
import Link from "next/link";

export default function Index () {
    return(
        <div className={styles.container}>
            <Head>
                <title>Results</title>
            </Head>

            <div className={styles.statsContainer}>
                <iframe
                    className={styles.stats}
                    src="stats/oueft_standings.html"
                    name="Stats"
                ></iframe>
            </div>
            <div className={styles.footer}>
                <Link href="/">Back</Link>
            </div>
        </div>
    );
}