import styles from './AboutTitle.module.css';

export default function AboutTitle({ content, lightMode }) {
  return (
    <>
      <div
        className={
          lightMode
            ? `${styles['container']} ${styles['light']}`
            : styles.container
        }
      >
        <h1>{content}</h1>
      </div>
    </>
  );
}
