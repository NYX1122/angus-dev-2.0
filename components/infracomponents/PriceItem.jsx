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
          <div
            className={
              (id = 'customWebDesign'
                ? styles.customWebDesign
                : (id = 'professionalCoding'
                    ? styles.professionalCoding
                    : (id = 'webHosting'
                        ? styles.webHosting
                        : (id = 'siteMaintenance'
                            ? styles.siteMaintenance
                            : (id = 'unlimmitedChanges'
                                ? styles.unlimitedChanges
                                : (id = 'seoStrategies'
                                    ? styles.seoStrategies
                                    : (id = 'ecommerceStores'
                                        ? styles.ecommerceStores
                                        : styles.websiteAnalytics)))))))
            }
          >
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
