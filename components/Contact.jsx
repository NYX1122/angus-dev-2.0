import { motion } from 'framer-motion';

import SectionTitle from './infracomponents/SectionTitle';

import styles from './Contact.module.css';

export default function Contact({ lightMode }) {
  const formItemsArray = [
    { id: 'first', text: 'First Name:', placeholder: 'John' },
    { id: 'last', text: 'Last Name:', placeholder: 'Doe' },
    { id: 'phone', text: 'Phone:', placeholder: '000-000-0000' },
    { id: 'email', text: 'Email:', placeholder: 'email@email.com' },
    { id: 'business', text: 'Business:', placeholder: 'Business' },
    { id: 'message', text: 'Message:', placeholder: 'Message' },
  ];

  const handleSubmit = async (event) => {
    // Stop the form from submitting and refreshing the page.
    event.preventDefault();

    // Get data from the form.
    const data = {
      first: event.target.first.value,
      last: event.target.last.value,
      phone: event.target.phone.value,
      email: event.target.email.value,
      business: event.target.business.value,
      message: event.target.message.value,
    };

    // Send the data to the server in JSON format.
    const JSONdata = JSON.stringify(data);

    // API endpoint where we send form data.
    const endpoint = '/api/form';

    // Form the request for sending data to the server.
    const options = {
      // The method is POST because we are sending data.
      method: 'POST',
      // Tell the server we're sending JSON.
      headers: {
        'Content-Type': 'application/json',
      },
      // Body of the request is the JSON data we created above.
      body: JSONdata,
    };

    // Send the form data to our forms API on Vercel and get a response.
    const response = await fetch(endpoint, options);

    // Get the response data from server as JSON.
    // If server returns the name submitted, that means the form works.
    const result = await response.json();
    alert(`data: ${result.data}`);
  };

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
      <form
        onSubmit={handleSubmit}
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
            <label htmlFor={item.id}>{item.text}</label>
            <textarea
              placeholder={item.placeholder}
              id={item.id}
              name={item.id}
              rows={item.text === 'Message:' ? 5 : 1}
              className={
                lightMode
                  ? `${styles['formItemFieldContainer']} ${styles['light']}`
                  : styles.formItemFieldContainer
              }
            ></textarea>
          </div>
        ))}
        <motion.button whileTap={{ scale: 0.9 }}>Submit</motion.button>
      </form>
    </div>
  );
}
