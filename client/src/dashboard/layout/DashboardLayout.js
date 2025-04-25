import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';

const DashboardLayout = () => {
  return (
    <div className="d-flex flex-column flex-lg-row">
      <Sidebar />
      <div className="flex-grow-1 d-flex flex-column" style={{ minHeight: '100vh' }}>
        <Header />
        <main className="flex-grow-1 bg-light p-4 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
