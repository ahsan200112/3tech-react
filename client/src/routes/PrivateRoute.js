import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem('token'); // Or use context/auth logic
  return isAuthenticated ? children : <Navigate to="/dashboard-login" />;
};

export default PrivateRoute;
