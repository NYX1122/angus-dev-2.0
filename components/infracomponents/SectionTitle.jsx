import styles from './SectionTitle.module.css';

export default function About({ content }) {
  return (
    <>
      <div className={styles.container}>
        <h1>{content}</h1>
      </div>
    </>
  );
}
