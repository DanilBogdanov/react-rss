import styles from '@/styles/404.module.css';

export default function NotFound() {
  return (
    <div className={styles['not-found-page']}>
      <h1 className={styles['not-found-page__title']}>Page Not Found</h1>
    </div>
  );
}
