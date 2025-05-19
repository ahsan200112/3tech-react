import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import MobileSidebar from '../components/MobileSidebar';

const DashboardLayout = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  const handleMobileSidebarToggle = () => setMobileSidebarOpen(!mobileSidebarOpen);

  const handleSidebarToggle = () => {
    setIsSidebarCollapsed(prev => !prev);
  };

  return (
    <div className="d-flex flex-column flex-lg-row min-vh-100">
      <Sidebar collapsed={isSidebarCollapsed} />
      <MobileSidebar
        isOpen={mobileSidebarOpen}
        onClose={handleMobileSidebarToggle}
      />
      <div className="flex-grow-1 d-flex flex-column" style={{ minHeight: '100vh' }}>
        <Header onToggleSidebar={handleSidebarToggle} onMobileSidebarToggle={handleMobileSidebarToggle} />
        <main className="flex-grow-1 bg-light p-4 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
