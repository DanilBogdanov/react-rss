import { NavLink } from 'react-router-dom';
import { AppRoutes } from '@/types/routes';
import styles from './navBar.module.css';

const getLinkStyle = ({ isActive }: { isActive: boolean }) =>
  `${styles['link']} ${isActive ? `${styles['link_active']}` : ''}`;

export default function NavBar(): JSX.Element {
  return (
    <nav className={styles['nav']}>
      <NavLink className={getLinkStyle} to={AppRoutes.Main}>
        Main
      </NavLink>
      <NavLink className={getLinkStyle} to={AppRoutes.ReactHookForm}>
        React Hook Form
      </NavLink>
      <NavLink className={getLinkStyle} to={AppRoutes.UncontrolledForm}>
        Uncontrolled Form
      </NavLink>
    </nav>
  );
}
