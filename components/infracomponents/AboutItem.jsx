import Image from 'next/image';

import styles from './AboutItem.module.css';

export default function AboutItem({ image, imageAlt, title, content }) {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.imgContainer}>
          <Image src={image} alt={imageAlt} fill={true}></Image>
        </div>
        <div className={styles.descriptionContainer}>
          <div className={styles.titleContainer}>
            <h1>{title}</h1>
          </div>
          <div className={styles.contentContainer}>
            <p>{content}</p>
          </div>
        </div>
      </div>
    </>
  );
}
