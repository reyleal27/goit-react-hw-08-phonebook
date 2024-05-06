import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../redux/hooks/useAuth';

/**
 * - If the route is private and the user is logged in, render the component
 * - Otherwise render <Navigate> to redirectTo
 */

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
    const { isLoggedIn } = useAuth();
    const shouldRedirectTo = !isLoggedIn;
    return shouldRedirectTo ? <Navigate to={redirectTo} /> : <Component />
};