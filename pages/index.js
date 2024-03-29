import { useState } from 'react';

import { LayoutGroup } from 'framer-motion';

import Head from 'next/head';
import Header from '../components/header';
import Hero from '../components/hero';
import About from '../components/About';
import Pricing from '../components/Pricing';
import Contact from '../components/Contact';

import styles from '@/styles/Home.module.css';

export default function Home() {
  const [lightMode, setLightMode] = useState(false);
  return (
    <>
      <Head>
        <title>
          Angus Development | Expertly Made Websites for Small Businesses
        </title>
        <meta
          name='description'
          content='Angus Development is a small business that serves other small businesses by designing, developing, and deploying beautiful websites for affordable prices.'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='google' content='nositelinkssearchbox' key='sitelinks' />
        <meta name='google' content='notranslate' key='notranslate' />
        <meta name='robots' content='all' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main
        className={
          lightMode
            ? `${styles['mainContainer']} ${styles['light']}`
            : styles.mainContainer
        }
      >
        <LayoutGroup>
          <Header lightMode={lightMode} setLightMode={setLightMode}></Header>
          <Hero lightMode={lightMode}></Hero>
          <About lightMode={lightMode}></About>
          <Pricing lightMode={lightMode}></Pricing>
          <Contact lightMode={lightMode}></Contact>
          <br></br>
        </LayoutGroup>
      </main>
    </>
  );
}
