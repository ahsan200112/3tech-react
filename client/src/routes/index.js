import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PublicRoutes from './PublicRoutes';
//import DashboardRoutes from './DashboardRoutes';
//import PrivateRoute from './PrivateRoute';

const AppRoutes = () => {

  return (
    <>
      <Routes>
        {/* Public Routes */}
        <Route path="/*" element={<PublicRoutes />} />

        {/* Dashboard Routes */}
        {/*<Route path="/dashboard/*" element={<PrivateRoute> <DashboardRoutes /> </PrivateRoute>} />   */}
      </Routes>
    </>
  );
};

export default AppRoutes;
