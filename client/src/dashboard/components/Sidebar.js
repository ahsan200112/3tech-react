import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../../assets/images/3tech logo for dark mode.png';
import { useTranslation } from 'react-i18next';
import { FaHome, FaBox, FaUsers, FaBoxOpen, FaClipboardList, FaStore, FaBullhorn, FaCogs } from 'react-icons/fa';
import usePermission from '../../hooks/usePermission';

const Sidebar = () => {
  const { i18n } = useTranslation();
  const isRtl = i18n.dir() === 'rtl'; // Check the current direction (RTL or LTR)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State to handle sidebar toggle

  // Permissions
  const blogsPermission = usePermission('Blogs');
  const servicesPermission = usePermission('Services');
  const projectsPermission = usePermission('Projects');
  const packagesPermission = usePermission('Packages');
  const contactFormsPermission = usePermission('ContactForm');
  const faqsPermission = usePermission('Faqs');
  const testimonialsPermission = usePermission('Testimonials');
  const usersPermission = usePermission('Users');
  const rolesPermission = usePermission('Roles');
  const seoMetaPermission = usePermission('SeoMeta');

  // Toggle sidebar visibility for mobile
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      {/* Mobile toggle button */}
      <button
        className="btn btn-primary d-lg-none position-fixed top-0 start-0 z-index-1000 m-3"
        onClick={toggleSidebar}
        style={{ zIndex: 1050 }} // Ensures toggle button is on top of other elements
      >
        ☰
      </button>

      {/* Sidebar */}
      <div
        className={`text-white p-3 vh-100 ${isSidebarOpen ? 'd-block' : 'd-none'} d-lg-block`}
        style={{ backgroundColor: "rgb(26,55,121)", width: '240px', transition: 'all 0.3s ease-in-out' }}
      >
        <div className="d-flex align-items-center">
          <Link to="/dashboard">
            <img src={Logo} alt="Logo" className="img-fluid logo-img" />
          </Link>
        </div>
        <nav className="nav flex-column">
          <NavLink to="/dashboard" className="nav-link text-white">
            <FaHome className={isRtl ? 'ms-2' : 'me-2'} /> Home
          </NavLink>
          {blogsPermission.canView && (
            <NavLink to="/dashboard/blogs" className="nav-link text-white">
              <FaBox className={isRtl ? 'ms-2' : 'me-2'} /> Blogs
            </NavLink>
          )}
          {servicesPermission.canView && (
            <NavLink to="/dashboard/services" className="nav-link text-white">
              <FaClipboardList className={isRtl ? 'ms-2' : 'me-2'} /> Services
            </NavLink>
          )}
          {projectsPermission.canView && (
            <NavLink to="/dashboard/projects" className="nav-link text-white">
              <FaStore className={isRtl ? 'ms-2' : 'me-2'} /> Projects
            </NavLink>
          )}
          {packagesPermission.canView && (
            <NavLink to="/dashboard/packages" className="nav-link text-white">
              <FaBoxOpen className={isRtl ? 'ms-2' : 'me-2'} /> Packages
            </NavLink>
          )}
          {contactFormsPermission.canView && (
            <NavLink to="/dashboard/contactforms" className="nav-link text-white">
              <FaUsers className={isRtl ? 'ms-2' : 'me-2'} /> Contact Forms
            </NavLink>
          )}
          {faqsPermission.canView && (
            <NavLink to="/dashboard/faqs" className="nav-link text-white">
              <FaUsers className={isRtl ? 'ms-2' : 'me-2'} /> FAQS
            </NavLink>
          )}
          {testimonialsPermission.canView && (
            <NavLink to="/dashboard/testimonials" className="nav-link text-white">
              <FaUsers className={isRtl ? 'ms-2' : 'me-2'} /> Testimonials
            </NavLink>
          )}
          {usersPermission.canView && (
            <NavLink to="/dashboard/users" className="nav-link text-white">
              <FaUsers className={isRtl ? 'ms-2' : 'me-2'} /> Users
            </NavLink>
          )}
          {rolesPermission.canView && (
            <NavLink to="/dashboard/roles-permissions" className="nav-link text-white">
              <FaBullhorn className={isRtl ? 'ms-2' : 'me-2'} /> Roles and Permission
            </NavLink>
          )}
          {seoMetaPermission.canView && (
            <NavLink to="/dashboard/roles-permissions" className="nav-link text-white">
              <FaBullhorn className={isRtl ? 'ms-2' : 'me-2'} /> Seo Meta Page
            </NavLink>
          )}
            <NavLink to="/dashboard/settings" className="nav-link text-white">
              <FaCogs className={isRtl ? 'ms-2' : 'me-2'} /> Setting
            </NavLink>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
