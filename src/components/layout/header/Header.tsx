import styles from './header.module.css';
import NavBar from '../navBar/NavBar';

export default function Header(): JSX.Element {
  return (
    <header className={styles.header}>
      <h1>React Forms</h1>
      <NavBar />
    </header>
  );
}
