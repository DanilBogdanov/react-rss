import styles from '@/styles/500.module.css';

export default function ServerErr() {
  return (
    <div className={styles['server-err-page']}>
      <h1 className={styles['server-err-page__title']}>
        500
        <br />
        Something went wrong
      </h1>
    </div>
  );
}
