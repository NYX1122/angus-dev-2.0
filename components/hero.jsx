import Image from 'next/image';

import styles from './Hero.module.css';

import logo from '../public/logo.svg';

export default function Header() {
  return (
    <div className={styles.container}>
      <Image src={logo} alt='Company logo' width='62.5%'></Image>
      <div className={styles.sloganContainer}>
        <div className={styles.lineContainer}>
          <h2>Web Development</h2>
        </div>
        <div className={styles.lineContainer}>
          <div className={styles.bottomInnerContainer}>
            <h2>{`<Simplified/>`}</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
