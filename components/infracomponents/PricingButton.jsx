import Image from 'next/image';

import styles from './PricingButton.module.css';

import pricingDetailTitleBackground from '../../public/pricingDetailTitleBackground.svg';

export default function PricingButton({ content }) {
  return (
    <button className={styles.buttonContainer}>
      <div className={styles.innerContainer}>
        <h1>{content}</h1>
        <Image src={pricingDetailTitleBackground} alt='' fill={true}></Image>
      </div>
    </button>
  );
}
