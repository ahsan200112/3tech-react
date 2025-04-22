import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../../assets/images/3tech logo for dark mode.png';
import { useTranslation } from 'react-i18next';
import { FaHome, FaBox, FaShoppingCart, FaUsers, FaCog, FaStore, FaBullhorn } from 'react-icons/fa';

const Sidebar = () => {
  const { i18n } = useTranslation();
  const isRtl = i18n.dir() === 'rtl'; // Check the current direction (RTL or LTR)

  return (
    <div className="text-white p-3 vh-100" style={{ backgroundColor: "rgb(26,55,121)", width: '250px' }}>
      <div className="d-flex align-items-center">
        <Link to="/dashboard">
          <img src={Logo} alt="Logo" className="img-fluid logo-img" />
        </Link>
      </div>
      <nav className="nav flex-column">
        <NavLink to="/dashboard" className="nav-link text-white">
          <FaHome className={isRtl ? 'ms-2' : 'me-2'} /> Home
        </NavLink>
        <NavLink to="/dashboard/blogs" className="nav-link text-white">
          <FaBox className={isRtl ? 'ms-2' : 'me-2'} /> Blogs
        </NavLink>
        <NavLink to="/dashboard/orders" className="nav-link text-white">
          <FaShoppingCart className={isRtl ? 'ms-2' : 'me-2'} /> Orders
        </NavLink>
        <NavLink to="/dashboard/customers" className="nav-link text-white">
          <FaUsers className={isRtl ? 'ms-2' : 'me-2'} /> Customers
        </NavLink>
        <NavLink to="/dashboard/settings" className="nav-link text-white">
          <FaCog className={isRtl ? 'ms-2' : 'me-2'} /> Settings
        </NavLink>
        <NavLink to="/dashboard/store" className="nav-link text-white">
          <FaStore className="me-2" /> Store Configuration
        </NavLink>
        <NavLink to="/dashboard/marketing" className="nav-link text-white">
          <FaBullhorn className={isRtl ? 'ms-2' : 'me-2'} /> Marketing
        </NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;
