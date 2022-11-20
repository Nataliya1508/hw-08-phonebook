import Navigation from 'components/Navigations/Navigations';
import style from 'components/AppBar.module.css';
import { useSelector } from 'react-redux';
import AuthNav from './AuthNav';
import UserMenu from './UserMenu';
import { authSelectors } from 'redux/auth';

const AppBar = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <header className={style.header}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};

export default AppBar;
