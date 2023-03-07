import SectionTitle from './infracomponents/SectionTitle';

import Image from 'next/image';

import styles from './Pricing.module.css';

import priceContainerGraphic from '../public/priceContainerGraphic.svg';
import paragraphContainerGraphic from '../public/paragraphContainerGraphic.svg';

export default function Pricing() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.prefaceContainer}>
          <div className={styles.sectionTitleContainer}>
            <SectionTitle content='Pricing'></SectionTitle>
          </div>
          <div className={styles.subscriptionContainer}>
            <div className={styles.priceContainer}>
              <Image
                src={priceContainerGraphic}
                alt='Shiny background placed behind the price.'
                fill={true}
              ></Image>
              <h2>$200 Per Month</h2>
            </div>
            <h1>It's that easy.</h1>
            <div className={styles.prefaceParagraphContainer}>
              <div className={styles.prefaceParagraphGraphicContainer}>
                <Image
                  src={paragraphContainerGraphic}
                  alt='Shiny background behind paragraph explaining subscription tier.'
                  fill={true}
                ></Image>
              </div>
              <p>
                This is our only subscription tier, and it includes everything
                that a website needs to be competitive. See below for all
                included services.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.detailsContainer}></div>
      </div>
    </>
  );
}
