import Image from 'next/image';

import styles from './PricingButton.module.css';

import pricingDetailTitleBackground from '../../public/pricingDetailTitleBackground.svg';
import pricingDetailTitleBackgroundLight from '../../public/pricingDetailTitleBackgroundLight.svg';

export default function PricingButton({ content, lightMode }) {
  return (
    <button className={styles.buttonContainer}>
      <div
        className={
          lightMode
            ? `${styles['innerContainer']} ${styles['light']}`
            : styles.innerContainer
        }
      >
        <h1>{content}</h1>
        <Image
          src={
            lightMode
              ? pricingDetailTitleBackgroundLight
              : pricingDetailTitleBackground
          }
          alt=''
          fill={true}
        ></Image>
      </div>
    </button>
  );
}
