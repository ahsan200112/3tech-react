import React from 'react';
import LanguageToggleDashboard from './LanguageToggleDashboard';
import UserImage from '../../assets/images/girl2.png';

const Header = () => {
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
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
