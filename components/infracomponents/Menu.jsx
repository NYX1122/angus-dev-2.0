import { motion } from 'framer-motion';

import Image from 'next/image';

import styles from './Menu.module.css';

import menuLogo from '../../public/menuLogo.svg';
import toggleCircle from '../../public/toggleCircle.svg';
import toggleBar from '../../public/toggleBar.svg';

export default function Menu({ isMenuOpen, setMenuOpen }) {
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
        className={styles.container}
        initial={{ x: 200 }}
        animate={{ x: 0 }}
        exit={{ x: 200 }}
      >
        <div className={styles.linksContainer}>
          <>
            <Image src={menuLogo} alt='Menu logo' width='93'></Image>
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
          <h3>Light Mode:</h3>
          <div className={styles.lightToggleInnerContainer}>
            <Image
              src={toggleBar}
              alt='Toggle Bar'
              className={styles.toggleBar}
            ></Image>
            <Image
              src={toggleCircle}
              alt='Toggle Circle'
              width='12'
              className={styles.toggleCircle}
            ></Image>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
