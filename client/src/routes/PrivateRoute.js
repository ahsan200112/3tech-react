import React, { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { isTokenExpired } from '../utils/jwtUtils';

const PrivateRoute = ({ children }) => {
   const token = localStorage.getItem('token'); // Get token from localStorage

  // Token check logic
  useEffect(() => {
    if (!token || isTokenExpired(token)) {
      localStorage.removeItem('token'); // Remove token from localStorage
    }
  }, [token]);

  if (!token || isTokenExpired(token)) {
    return <Navigate to="/dashboard-login" />;
  }

  return children;
};

export default PrivateRoute;
