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
          <p>is hosting</p>
          <span><a href="https://www.naqt.com/registration/field.jsp?tournament_id=12507" rel="noopener noreferrer" target="_blank">an in-person NAQT tournament</a></span>
          <p>on October 2!</p>
        </div>
        <div>
          <h3>Important Links</h3>
          <div className={styles.importantLinks}>
            <a href="https://docs.google.com/spreadsheets/d/e/2PACX-1vRL1sF96_RYY942xi6g_4ihFDN5WN4jGVN_pKUAmE5B5kseUHqpbUi-w7THggkayXZWWVne5LJJBeuz/pubhtml" rel="noopener noreferrer" target="blank">Schedule (Matchups and Rooms)</a>
            <br />
            <br />
            <a href="https://docs.google.com/document/d/e/2PACX-1vRyVL1_dDLmuj-YLolJT25ej0XErB7wDrTHeseKkxgDKIddrnmUH5p_OcU4xrucoiIUXJ0tH2lWqWla/pub" rel="noopener noreferrer" target="blank">Schedule (Tentative Round Times)</a>
            <br />
            <br />
            <a href="https://docs.google.com/spreadsheets/d/e/2PACX-1vTdScS312ifC-f4pKTyc4v2qtEXdrUTuxPh635TfccrqQjkn19PQfcCKAQcAQ0KVlRGvP22UfcQeTGC/pubhtml" rel="noopener noreferrer" target="blank">Volunteer Room Matchups</a>
            <br />
            <br />
            <Link href="/stats">Live Stats (Round 7)</Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
