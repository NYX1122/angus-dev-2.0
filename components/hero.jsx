import Image from 'next/image';

import styles from './Hero.module.css';

import topLeftCornerHero from '../public/topLeftCornerHero.svg?url';
import topLeftCornerHeroLight from '../public/topLeftCornerHeroLight.svg?url';
import topRightCornerHero from '../public/topRightCornerHero.svg?url';
import topRightCornerHeroLight from '../public/topRightCornerHeroLight.svg?url';
import bottomLeftCornerHero from '../public/bottomLeftCornerHero.svg?url';
import bottomLeftCornerHeroLight from '../public/bottomLeftCornerHeroLight.svg?url';
import bottomRightCornerHero from '../public/bottomRightCornerHero.svg?url';
import bottomRightCornerHeroLight from '../public/bottomRightCornerHeroLight.svg?url';
import logo from '../public/logo.svg?url';
import logoLight from '../public/logoLight.svg?url';

export default function Hero({ lightMode }) {
  const graphicDataArray = [
    {
      id: 'topLeftCorner',
      image: lightMode ? topLeftCornerHeroLight : topLeftCornerHero,
    },
    {
      id: 'topRightCorner',
      image: lightMode ? topRightCornerHeroLight : topRightCornerHero,
    },
    {
      id: 'bottomLeftCorner',
      image: lightMode ? bottomLeftCornerHeroLight : bottomLeftCornerHero,
    },
    {
      id: 'bottomRightCorner',
      image: lightMode ? bottomRightCornerHeroLight : bottomRightCornerHero,
    },
  ];
  return (
    <div
      className={
        lightMode
          ? `${styles['container']} ${styles['light']}`
          : styles.container
      }
    >
      {graphicDataArray.map((item) => (
        <Image
          src={item.image}
          alt='Code graphic'
          key={item.id}
          className={
            item.id === 'topLeftCorner'
              ? styles.topLeftCornerHero
              : item.id === 'topRightCorner'
              ? styles.topRightCornerHero
              : item.id === 'bottomLeftCorner'
              ? styles.bottomLeftCornerHero
              : styles.bottomRightCornerHero
          }
        ></Image>
      ))}
      <Image
        src={lightMode ? logoLight : logo}
        alt='Company logo'
        className={styles.logo}
      ></Image>
      <div className={styles.sloganContainer}>
        <div
          className={
            lightMode
              ? `${styles['lineContainer']} ${styles['light']}`
              : styles.lineContainer
          }
        >
          <h2>Web Development</h2>
        </div>
        <div
          className={
            lightMode
              ? `${styles['lineContainer']} ${styles['light']}`
              : styles.lineContainer
          }
        >
          <div
            className={
              lightMode
                ? `${styles['bottomInnerContainer']} ${styles['light']}`
                : styles.bottomInnerContainer
            }
          >
            <h3
              className={
                lightMode
                  ? `${styles['bottomText']} ${styles['light']}`
                  : styles.bottomText
              }
            >{`<Simplified/>`}</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
