import SectionTitle from './infracomponents/SectionTitle';

import styles from './Contact.module.css';

export default function Contact() {
  const formItemsArray = [
    { id: 'firstName', text: 'First Name:' },
    { id: 'lastName', text: 'Last Name:' },
    { id: 'phone', text: 'Phone:' },
    { id: 'email', text: 'Email:' },
    { id: 'business', text: 'Business:' },
    { id: 'message', text: 'Message:' },
  ];
  return (
    <div className={styles.outerContainer}>
      <SectionTitle content='Contact Us' />
      <div className={styles.formContainer}>
        {formItemsArray.map((item) => (
          <div key={item.id} className={styles.formItemOuterContainer}>
            <h3>{item.text}</h3>
            <textarea
              rows={item.text === 'Message:' ? 5 : 1}
              className={styles.formItemFieldContainer}
            ></textarea>
          </div>
        ))}
        <button>Submit</button>
      </div>
    </div>
  );
}
