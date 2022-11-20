
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/authOperations';
import styles from 'pages/LoginPage/LoginPage.module.css';


const LoginPage = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(logIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <h1 className={styles.formTitle}>Login form</h1>

      <form
        className={styles.loginForm}
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <label style={styles.LogLabel}>
          <span className={styles.labelName}>Your mail</span>
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </label>

        <label style={styles.LogLabel}>
          <span className={styles.labelName}>Password</span>
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </label>

        <button type="submit" className={styles.formBtn}>
          log in
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
