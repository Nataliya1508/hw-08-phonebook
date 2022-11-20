import styles from 'components/UserMenu/UserMenu.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';
import { logOut } from 'redux/auth/authOperations';

const UserMenu = () => {
  const userName = useSelector(authSelectors.getUsername);
  const dispatch = useDispatch();

  const handleBtnClick = () => {
    dispatch(logOut());
  };

  return (
    <div className={styles.userMenu}>
      <p className={styles.userTitle}>
        Welcome 💙 <span className={styles.userName}>{userName}🐰</span>
      </p>
      <br />
      <button className={styles.outBtn} type="button" onClick={handleBtnClick}>
        LOG OUT
      </button>
    </div>
  );
};

export default UserMenu;
