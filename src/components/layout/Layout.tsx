import Header from './header/Header';
import styles from './layout.module.css';

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps): JSX.Element {
  return (
    <div className={styles.layout}>
      <Header />
      <main>{children}</main>
    </div>
  );
}
