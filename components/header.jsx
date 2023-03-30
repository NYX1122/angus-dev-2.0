import { useState } from 'react';

import { AnimatePresence } from 'framer-motion';

import Menu from './infracomponents/Menu';

import Image from 'next/image';

import styles from './Header.module.css';

import menuLines from '../public/menuLines.svg';

export default function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.companyName}>ANGUS DEVELOPMENT</h1>
        <button
          onClick={() => setMenuOpen(!isMenuOpen)}
          className={styles.button}
        >
          <div>
            <Image src={menuLines} alt='Menu icon' width='12.5%'></Image>
          </div>
        </button>
      </div>
      <AnimatePresence>
        {isMenuOpen && (
          <Menu isMenuOpen={isMenuOpen} setMenuOpen={setMenuOpen}></Menu>
        )}
      </AnimatePresence>
    </>
  );
}
