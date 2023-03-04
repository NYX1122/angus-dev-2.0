import SectionTitle from './infracomponents/SectionTitle';
import AboutTitle from './infracomponents/aboutTitle';

import Image from 'next/image';

import styles from './About.module.css';

import developerGraphic from '../public/developerGraphic.svg';

export default function About() {
  return (
    <>
      <div className={styles.prefaceContainer}>
        <SectionTitle content='About Us'></SectionTitle>
        <Image
          src={developerGraphic}
          alt='Graphic depicting a web developer'
        ></Image>
        <div className={styles.descriptionContainer}>
          <p>
            We are a small business empowering other small businesses with high
            quality websites and beautiful designs. It is our goal to give your
            customers access to fast, responsive, and user friendly websites
            that are easy to find with a quick google search. Scroll down to
            learn more about us, what we do, and the services we offer. Together
            we can give your business the competitive online visibility that it
            needs to succeed.
          </p>
        </div>
      </div>
      <div className={styles.doContainer}>
        <AboutTitle content='What We Do'></AboutTitle>
      </div>
    </>
  );
}
