import Image from 'next/image';

import styles from './PriceItem.module.css';

export default function PriceItem({
  title,
  graphic,
  graphicAlt,
  bulletPoints,
  backgroundGraphic,
}) {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.titleGraphic}>
          <Image
            src={backgroundGraphic}
            alt='Shiny background for buttons.'
            fill={true}
          ></Image>
        </div>
        <div className={styles.titleContainer}>
          <h1>{title}</h1>
        </div>
        <ul className={styles.bulletsContainer}>
          <div className={styles.graphic}>
            <Image src={graphic} alt={graphicAlt} fill={true}></Image>
          </div>
          {bulletPoints.map((item) => (
            <li key={item.id}>{item.content}</li>
          ))}
        </ul>
      </div>
    </>
  );
}
