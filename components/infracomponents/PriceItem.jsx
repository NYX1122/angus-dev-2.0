import PricingButton from './pricingButton';

import Image from 'next/image';

import styles from './PriceItem.module.css';

export default function PriceItem({
  id,
  title,
  graphic,
  graphicAlt,
  bulletPoints,
  backgroundGraphic,
}) {
  return (
    <div className={styles.outerContainer}>
      <PricingButton content={title}></PricingButton>
      <div className={styles.container}>
        {/* <div className={styles.titleGraphic}>
          <Image
            src={backgroundGraphic}
            alt='Shiny background for buttons.'
            fill={true}
          ></Image>
        </div>
        <div className={styles.titleContainer}>
          <h1>{title}</h1>
        </div> */}

        <div className={styles.bulletsContainer}>
          <div className={styles[id]}>
            <Image src={graphic} alt={graphicAlt} fill={true}></Image>
          </div>
          {bulletPoints.map((item) => (
            <p key={item.id}>{item.content}</p>
          ))}
        </div>
      </div>
    </div>
  );
}
