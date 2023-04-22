import { useState } from 'react';

import { motion } from 'framer-motion';
import { GoogleSpreadsheet } from 'google-spreadsheet';

import SectionTitle from './infracomponents/SectionTitle';
import Response from './infracomponents/Response';

import styles from './Contact.module.css';

// Config variables
const SPREADSHEET_ID = process.env.NEXT_PUBLIC_SPREADSHEET_ID;
const SHEET_ID = process.env.NEXT_PUBLIC_SHEET_ID;
const GOOGLE_CLIENT_EMAIL = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_EMAIL;
const GOOGLE_SERVICE_PRIVATE_KEY =
  process.env.NEXT_PUBLIC_GOOGLE_SERVICE_PRIVATE_KEY;

export default function Contact({ lightMode }) {
  //Array used to iterate form items in jsx
  const formItemsArray = [
    { id: 'first', text: 'First Name:', placeholder: 'John' },
    { id: 'last', text: 'Last Name:', placeholder: 'Doe' },
    { id: 'phone', text: 'Phone:', placeholder: '000-000-0000' },
    { id: 'email', text: 'Email:', placeholder: 'email@email.com' },
    { id: 'business', text: 'Business:', placeholder: 'Business' },
    { id: 'message', text: 'Message:', placeholder: 'Message' },
  ];

  //State used to contain form input
  const [form, setForm] = useState({
    first: '',
    last: '',
    phone: '',
    email: '',
    business: '',
    message: '',
  });

  const [responseEl, setResponseEl] = useState('');

  const validationRGEX = {
    name: /^([a-zA-Z]{2,20})$/,
    phone: /^([0-9]{3})-([0-9]{3})-([0-9]{4})$/,
    email: /^([a-zA-Z0-9_\.-]+)@([\da-zA-Z\.-]+)\.([a-zA-Z\.]{2,6})$/,
    business: /^([a-z A-Z\d\S]{2,50})$/,
  };

  //loads information from spreadsheet
  const doc = new GoogleSpreadsheet(SPREADSHEET_ID);

  const appendSpreadsheet = async (row) => {
    try {
      await doc.useServiceAccountAuth({
        client_email: GOOGLE_CLIENT_EMAIL,
        private_key: GOOGLE_SERVICE_PRIVATE_KEY.replace(/\\n/g, '\n'),
      });
      // loads document properties and worksheets
      await doc.loadInfo();

      const sheet = doc.sheetsById[SHEET_ID];
      await sheet.addRow(row);
    } catch (e) {
      console.error('Error: ', e);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const firstValid = validationRGEX.name.test(form.first);
    const lastValid = validationRGEX.name.test(form.last);
    const phoneValid = validationRGEX.phone.test(form.phone);
    const emailValid = validationRGEX.email.test(form.email);
    const businessValid = validationRGEX.business.test(form.business);

    if (
      form.first !== '' &&
      form.last !== '' &&
      form.phone !== '' &&
      form.email !== '' &&
      form.business !== '' &&
      firstValid &&
      lastValid &&
      phoneValid &&
      emailValid &&
      businessValid
    ) {
      const newRow = {
        first: form.first,
        last: form.last,
        phone: form.phone,
        email: form.email,
        business: form.business,
        message: form.message,
      };

      appendSpreadsheet(newRow);
      setResponseEl('success');
      setForm({
        first: '',
        last: '',
        phone: '',
        email: '',
        business: '',
        message: '',
      });
    } else if (
      form.first === '' &&
      form.last === '' &&
      form.phone === '' &&
      form.email === '' &&
      form.business === ''
    ) {
      setResponseEl('blank');
    } else if (!firstValid) {
      setResponseEl('firstErr');
    } else if (!lastValid) {
      setResponseEl('lastErr');
    } else if (!phoneValid) {
      setResponseEl('phoneErr');
    } else if (!emailValid) {
      setResponseEl('emailErr');
    } else if (!businessValid) {
      setResponseEl('businessErr');
    }
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <motion.div layout>
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
                value={form[item.id]}
                placeholder={item.placeholder}
                id={item.id}
                name={item.id}
                rows={item.text === 'Message:' ? 5 : 1}
                className={
                  lightMode
                    ? `${styles['formItemFieldContainer']} ${styles['light']}`
                    : styles.formItemFieldContainer
                }
                onChange={handleChange}
              ></textarea>
            </div>
          ))}
          <motion.button whileTap={{ scale: 0.9 }}>Submit</motion.button>
        </form>
      </div>
      {responseEl && (
        <Response
          setResponseEl={setResponseEl}
          responseEl={responseEl}
          lightMode={lightMode}
        ></Response>
      )}
    </motion.div>
  );
}
