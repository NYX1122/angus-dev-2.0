import styles from './SectionTitle.module.css';

export default function SectionTitle({ content, lightMode }) {
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
