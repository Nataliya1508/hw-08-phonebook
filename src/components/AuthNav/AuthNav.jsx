import { NavLink } from 'react-router-dom';
import styles from 'components/AuthNav/AuthNav.module.css';

const AuthNav = () => {
  return (
    <div className={styles.authNav}>
      <NavLink to="/register">
        <button type="button" className={styles.Btn}>
          SIGN UP
        </button>
      </NavLink>
      <NavLink to="/login">
        <button type="button" className={styles.Btn}>
          LOG IN
        </button>
      </NavLink>
    </div>
  );
};

export default AuthNav;
