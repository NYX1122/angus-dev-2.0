import Image from 'next/image';

import styles from './Menu.module.css';

import menuLogo from '../../public/MenuLogo.svg';

export default function Menu() {
  const linkArray = [
    { id: 'about', name: 'About' },
    { id: 'pricing', name: 'Pricing' },
    { id: 'contact', name: 'Contact' },
  ];
  return (
    <div className={styles.container}>
      <Image src={menuLogo} alt='Menu logo' width='90'></Image>
      <div className={styles.linksContainer}>
        {linkArray.map((item) => (
          <a key={item.id}>{item.name}</a>
        ))}
      </div>
      <div className={styles.lightToggleContainer}></div>
    </div>
  );
}
