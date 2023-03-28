import Image from 'next/image';

import styles from './Hero.module.css';

import topLeftCornerHero from '../public/topLeftCornerHero.svg';
import topRightCornerHero from '../public/topRightCornerHero.svg';
import bottomLeftCornerHero from '../public/bottomLeftCornerHero.svg';
import bottomRightCornerHero from '../public/bottomRightCornerHero.svg';
import logo from '../public/logo.svg';

export default function Hero() {
  const graphicDataArray = [
    { id: 'topLeftCorner', image: topLeftCornerHero },
    { id: 'topRightCorner', image: topRightCornerHero },
    { id: 'bottomLeftCorner', image: bottomLeftCornerHero },
    { id: 'bottomRightCorner', image: bottomRightCornerHero },
  ];
  return (
    <>
      <div className={styles.container}>
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
        <Image src={logo} alt='Company logo'></Image>
        <div className={styles.sloganContainer}>
          <div className={styles.lineContainer}>
            <h2>Web Development</h2>
          </div>
          <div className={styles.lineContainer}>
            <div className={styles.bottomInnerContainer}>
              <h2 className={styles.bottomText}>{`<Simplified/>`}</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
