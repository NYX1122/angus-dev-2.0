import Image from 'next/image';

import styles from './AboutItem.module.css';

export default function AboutItem({
  image,
  imageLight,
  imageAlt,
  title,
  content,
  lightMode,
}) {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.imgContainer}>
          <Image
            src={lightMode ? imageLight : image}
            alt={imageAlt}
            fill={true}
          ></Image>
        </div>
        <div
          className={
            lightMode
              ? `${styles['descriptionContainer']} ${styles['light']}`
              : styles.descriptionContainer
          }
        >
          <div
            className={
              lightMode
                ? `${styles['titleContainer']} ${styles['light']}`
                : styles.titleContainer
            }
          >
            <h1>{title}</h1>
          </div>
          <div
            className={
              lightMode
                ? `${styles['contentContainer']} ${styles['light']}`
                : styles.contentContainer
            }
          >
            <p>{content}</p>
          </div>
        </div>
      </div>
    </>
  );
}
