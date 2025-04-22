import React from 'react';
//import { useTranslation } from 'react-i18next';
import UserImage from '../../assets/images/girl2.png';

const Header = () => {
 // const { t, i18n } = useTranslation();
  //const isRtl = i18n.dir() === 'rtl'; // Check the current direction (RTL or LTR)

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm px-4 py-3">
      <div className="container-fluid justify-content-between">
        <div className="d-flex align-items-center gap-3">
          <input
            type="text"
            className="form-control form-control-sm"
            placeholder="Search..."
            style={{ width: '400px' }}
          />
          <button className="btn btn-outline-secondary btn-sm">Visit Site</button>
        </div>
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
    </nav>
  );
};

export default Header;
