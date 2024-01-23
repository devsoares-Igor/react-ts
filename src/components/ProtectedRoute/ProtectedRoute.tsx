import React, { useEffect, useState } from 'react';
import { Route, RouteProps, Navigate } from 'react-router-dom';
import isAuthenticated from './isAuthenticated';

interface ProtectedRouteProps extends RouteProps {
  element: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ element, ...rest }) => {
  const [loading, setLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuthentication = async () => {
      const isAuthenticatedResult = await isAuthenticated();
      setAuthenticated(isAuthenticatedResult);
      setLoading(false);
    };

    checkAuthentication();
  }, []);

  return loading ? null : authenticated ? <Route {...rest} element={element} /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
