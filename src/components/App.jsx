import React from 'react';
import { Route, Routes  } from 'react-router-dom';
import { SharedLayout } from './pages/SharedLayout';
import { RegisterPage } from './pages/RegisterPage';
import { LoginPage } from './pages/LoginPage';
import { ContactsPage } from './pages/ContactsPage';
import { RestrictedRoute } from './RestrictedRoute/RestrictedRoute';
import { PrivateRoute } from './PrivateRoute/PrivateRoute';
import { HomePage } from './pages/HomePage';
import { useDispatch } from 'react-redux';
import { useAuth } from '../redux/hooks/useAuth';
import { useEffect } from 'react';
import { refreshUser } from '../redux/auth/authOperation';

export const App = () => {
  const dispatch = useDispatch();

  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <h1>Refreshing user... Please wait...</h1>
  ) : (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                component={RegisterPage}
                redirectTo="/contacts"
              />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute redirectTo="/contacts" component={LoginPage} />
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute redirectTo="/login" component={ContactsPage} />
            }
          />
          <Route
            path="/logout"
            element={<PrivateRoute redirectTo="/" component={HomePage} />}
          />
        </Route>
      </Routes>
    </>
  );
};
