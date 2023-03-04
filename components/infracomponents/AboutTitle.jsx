import styles from './AboutTitle.module.css';

export default function AboutTitle({ content }) {
  return (
    <>
      <div className={styles.container}>
        <h1>{content}</h1>
      </div>
    </>
  );
}
