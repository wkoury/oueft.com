import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import Footer from '../components/Footer';
import styles from '../styles/Home.module.css';

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
          <span><a href="https://www.naqt.com/registration/field.jsp?tournament_id=12507" rel="noopener noreferrer" target="_blank">an in-person NAQT tournament</a></span>
          <p><Link href="/stats">October 2!</Link></p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
