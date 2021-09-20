import Head from 'next/head';
import Question from '../components/Question';
import Footer from '../components/Footer';
import styles from '../styles/Home.module.css';

export default function Faq() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Frequently Asked Questions</title>
      </Head>
      <Question
        question='Is this tournament going to be in-person?'
        answer='Yes.'
      />

      <Question
        question='Where is the tournament going to take place?'
        answer="Somewhere on the University of Oklahoma's campus."
      />

      <Question
        question='What is the fee structure for this year?'
        answer='Fees are as follows: $80 for a first team, $65 for all following teams, and a $10 discount per buzzer, as well as a $10 per team distance discount. The distance discount will only apply if you live more than 100 miles from the University of Oklahoma.'
      />

      <Question
        question='What will the field size be?'
        answer='The field size is capped at 18 teams and will not increase. Teams still interested in playing should register for the waitlist.'
      />
      <Footer />
    </div>
  );
}
