import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';
import style from 'components/Navigations/Navigations.module.css';

const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <nav className={style.nav}>
      <NavLink
        className={({ isActive }) => (isActive ? style.active : style.link)}
        to="/"
      >
        Home
      </NavLink>

      {isLoggedIn && (
        <NavLink
          className={({ isActive }) => (isActive ? style.active : style.link)}
          to="/contacts"
        >
          Phonebook
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;
