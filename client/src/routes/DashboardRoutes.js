import React from 'react';
import { Routes, Route } from 'react-router-dom';
import DashboardLayout from '../dashboard/layout/DashboardLayout';
import DashboardHome from '../dashboard/pages/DashboardHome';
import Blogs from '../dashboard/pages/Blogs';
import Orders from '../dashboard/pages/Orders';

const DashboardRoutes = () => {
  return (
    <Routes>
      <Route path="" element={<DashboardLayout />}>
        <Route index element={<DashboardHome />} />
        <Route path="blogs" element={<Blogs />} />
        <Route path="orders" element={<Orders />} />
        {/* Add more pages as needed */}
      </Route>
    </Routes>
  );
};

export default DashboardRoutes;
