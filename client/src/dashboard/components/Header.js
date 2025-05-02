import React from 'react';
import { useNavigate } from 'react-router-dom';
import LanguageToggleDashboard from './LanguageToggleDashboard';
import UserImage from '../../assets/images/girl2.png';

const Header = () => {
  const navigate = useNavigate(); // Hook to navigate

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/dashboard-login');
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm px-4 py-3">
      <div className="container-fluid">
        <div className="collapse navbar-collapse justify-content-end">
          <LanguageToggleDashboard />
          <div className="d-flex align-items-center gap-3">
            <span className="text-muted">Sherlock</span>
            <img
              src={UserImage}
              alt="User"
              className="rounded-circle"
              style={{ width: '35px', height: '35px' }}
            />
             <button
              className="btn btn-danger btn-sm"
              onClick={handleLogout} // Handle the logout
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
