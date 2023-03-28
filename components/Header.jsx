import Image from 'next/image';

import styles from './Header.module.css';

import menuLines from '../public/menuLines.svg';

export default function Header() {
  return (
    <div className={styles.container}>
      <h1 className={styles.companyName}>ANGUS DEVELOPMENT</h1>
      <Image src={menuLines} alt='Menu icon' width='12.5%'></Image>
    </div>
  );
}
