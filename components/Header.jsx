import { useState } from 'react';

import { AnimatePresence } from 'framer-motion';

import Menu from './infracomponents/Menu';

import Image from 'next/image';

import styles from './Header.module.css';

import menuLines from '../public/menuLines.svg?url';

export default function Header({ lightMode, setLightMode }) {
  const [isMenuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <div
        className={
          lightMode
            ? `${styles['container']} ${styles['light']}`
            : styles.container
        }
      >
        <h1
          className={
            lightMode
              ? `${styles['companyName']} ${styles['light']}`
              : styles.companyName
          }
        >
          ANGUS DEVELOPMENT
        </h1>
        <button
          onClick={() => setMenuOpen(!isMenuOpen)}
          className={styles.button}
        >
          <div>
            <Image
              src={menuLines}
              alt='Menu icon'
              className={
                lightMode
                  ? `${styles['menuLogo']} ${styles['light']}`
                  : styles.menuLogo
              }
            ></Image>
          </div>
        </button>
      </div>
      <AnimatePresence>
        {isMenuOpen && (
          <Menu
            isMenuOpen={isMenuOpen}
            setMenuOpen={setMenuOpen}
            lightMode={lightMode}
            setLightMode={setLightMode}
          ></Menu>
        )}
      </AnimatePresence>
    </>
  );
}
