import { motion } from 'framer-motion';

import styles from './Response.module.css';

export default function Response({ setResponseEl, responseEl, lightMode }) {
  return (
    <div
      className={
        lightMode
          ? `${styles['outerContainer']} ${styles['light']}`
          : styles.outerContainer
      }
    >
      <div className={styles.container}>
        <h1>
          {responseEl === 'success'
            ? 'Your contact information has been submitted successfully. Please expect a call from us within the next 24 hours.'
            : responseEl === 'blank'
            ? 'Please fill out the form before submitting your contact information.'
            : responseEl === 'firstErr'
            ? 'Please enter a valid first name before submitting your contact information.'
            : responseEl === 'lastErr'
            ? 'Please enter a valid last name before submitting your contact information.'
            : responseEl === 'phoneErr'
            ? 'It seems that you have entered an invalid phone number. Please enter a valid phone number in the following format "000-000-0000" before submitting your contact information.'
            : responseEl === 'emailErr'
            ? 'It seems that the email address that you have entered is invalid. Please enter a valid email address before submitting your contact information.'
            : responseEl === 'businessErr'
            ? 'It seems that you have entered an invalid business name. Please enter a valid business name before submitting your contact information.'
            : 'It seems that an error has occurred that has prevented your contact information from reaching us. Please try again later.'}
        </h1>
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => setResponseEl('')}
        >
          OK
        </motion.button>
      </div>
    </div>
  );
}
