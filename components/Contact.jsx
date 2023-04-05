import SectionTitle from './infracomponents/SectionTitle';

import styles from './Contact.module.css';

export default function Contact({ lightMode }) {
  const formItemsArray = [
    { id: 'firstName', text: 'First Name:' },
    { id: 'lastName', text: 'Last Name:' },
    { id: 'phone', text: 'Phone:' },
    { id: 'email', text: 'Email:' },
    { id: 'business', text: 'Business:' },
    { id: 'message', text: 'Message:' },
  ];
  return (
    <div
      className={
        lightMode
          ? `${styles['outerContainer']} ${styles['light']}`
          : styles.outerContainer
      }
      id='Contact'
    >
      <SectionTitle content='Contact Us' lightMode={lightMode} />
      <div
        className={
          lightMode
            ? `${styles['formContainer']} ${styles['light']}`
            : styles.formContainer
        }
      >
        {formItemsArray.map((item) => (
          <div
            key={item.id}
            className={
              lightMode
                ? `${styles['formItemOuterContainer']} ${styles['light']}`
                : styles.formItemOuterContainer
            }
          >
            <h3>{item.text}</h3>
            <textarea
              rows={item.text === 'Message:' ? 5 : 1}
              className={
                lightMode
                  ? `${styles['formItemFieldContainer']} ${styles['light']}`
                  : styles.formItemFieldContainer
              }
            ></textarea>
          </div>
        ))}
        <button>Submit</button>
      </div>
    </div>
  );
}
