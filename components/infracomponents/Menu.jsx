import { motion } from 'framer-motion';

import Image from 'next/image';

import styles from './Menu.module.css';

import menuLogo from '../../public/menuLogo.svg';
import toggleCircle from '../../public/toggleCircle.svg';
import toggleBar from '../../public/toggleBar.svg';

export default function Menu({
  isMenuOpen,
  setMenuOpen,
  lightMode,
  setLightMode,
}) {
  const linkArray = [
    { id: 'about', name: 'About' },
    { id: 'pricing', name: 'Pricing' },
    { id: 'contact', name: 'Contact' },
  ];
  return (
    <div className={styles.outerContainer}>
      <motion.div
        key='1'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className={styles.overlay}
        onClick={() => setMenuOpen(!isMenuOpen)}
      ></motion.div>
      <motion.div
        key='2'
        className={
          lightMode
            ? `${styles['container']} ${styles['light']}`
            : styles.container
        }
        initial={{ x: 275 }}
        animate={{ x: 0 }}
        exit={{ x: 275 }}
      >
        <div
          className={
            lightMode
              ? `${styles['linksContainer']} ${styles['light']}`
              : styles.linksContainer
          }
        >
          <>
            <Image
              src={menuLogo}
              alt='Menu logo'
              className={
                lightMode
                  ? `${styles['menuLogo']} ${styles['light']}`
                  : styles.menuLogo
              }
            ></Image>
            {linkArray.map((item) => (
              <a
                key={item.id}
                href={`#${item.name}`}
                onClick={() => setMenuOpen(!isMenuOpen)}
              >
                {item.name}
              </a>
            ))}
          </>
        </div>
        <div className={styles.lightToggleOuterContainer}>
          <h3
            className={
              lightMode
                ? `${styles['lightBarText']} ${styles['light']}`
                : styles.lightBarText
            }
          >
            Light Mode:
          </h3>
          <div
            className={styles.lightToggleInnerContainer}
            onClick={() => setLightMode(!lightMode)}
          >
            <Image
              src={toggleBar}
              alt='Toggle Bar'
              className={
                lightMode
                  ? `${styles['toggleBar']} ${styles['light']}`
                  : styles.toggleBar
              }
            ></Image>
            <div
              className={styles.toggleCircleOuterContainer}
              data-lightmode={lightMode}
            >
              <motion.div
                layout
                transition={{ duration: 0.2 }}
                className={styles.toggleCircleInnerContainer}
              >
                <Image
                  src={toggleCircle}
                  alt='Toggle Circle'
                  className={
                    lightMode
                      ? `${styles['toggleCircle']} ${styles['light']}`
                      : styles.toggleCircle
                  }
                ></Image>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
