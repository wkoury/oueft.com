import React from 'react';
import styles from '../styles/Home.module.css';

const Question = props => {
      return(
	    <React.Fragment>
		  <div className={styles.faqQuestion}>{props.question}</div>
		  <p style={{fontSize: '0.9rem', width: '50%'}}>{props.answer}</p>
	    </React.Fragment>
      )

}

export default Question;
