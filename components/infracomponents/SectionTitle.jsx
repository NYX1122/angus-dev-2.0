import styles from './SectionTitle.module.css';

export default function SectionTitle({ content }) {
  return (
    <>
      <div className={styles.container}>
        <h1>{content}</h1>
      </div>
    </>
  );
}
