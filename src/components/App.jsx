
import { Routes, Route, Navigate } from 'react-router-dom';
// import AppBar from './AppBar/AppBar';
import AppBar from './AppBar';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCurrentUser } from 'redux/auth/authOperations';
import { useEffect, lazy, Suspense } from 'react';
import { authSelectors } from 'redux/auth';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
// import styles from 'components/AppBar/App.module.css';
import styles from 'components/AppBar.module.css';

const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const RegisterPage = lazy(() => import('pages/RegisterPage/RegisterPage'));
const LoginPage = lazy(() => import('pages/LoginPage/LoginPage'));
const ContactsPage = lazy(() => import('pages/ContactsPage/ContactsPage'));

export const App = () => {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingCurrent);

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    <div className={styles.wrapper}>
      <AppBar />
      <Suspense fallback={<p>LOADING...</p>}>
        {!isFetchingCurrentUser && (
          <Routes>
            <Route path="/" element={<HomePage />} />

            <Route
              path="/register"
              exact
              element={
                <PublicRoute>
                  <RegisterPage />
                </PublicRoute>
              }
            />
            <Route
              path="/login"
              exact
              element={
                <PublicRoute>
                  <LoginPage />
                </PublicRoute>
              }
            />
            <Route
              path="/contacts"
              element={
                <PrivateRoute>
                  <ContactsPage />
                </PrivateRoute>
              }
            />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        )}
      </Suspense>
    </div>
  );
};
