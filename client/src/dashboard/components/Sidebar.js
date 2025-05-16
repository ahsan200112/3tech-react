import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../../assets/images/3tech logo for dark mode.png';
import { useTranslation } from 'react-i18next';
import { FaHome, FaRegNewspaper, FaUsers, FaGift, FaConciergeBell, FaProjectDiagram, FaEnvelope, FaQuestionCircle, FaQuoteLeft, FaUserShield, FaSearch, FaCogs } from 'react-icons/fa';
import usePermission from '../../hooks/usePermission';

const Sidebar = () => {
  const { t, i18n } = useTranslation();
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
    <div className='vh-100'>
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
        className={`text-white vh-100 p-3 ${isSidebarOpen ? 'd-block' : 'd-none'} d-lg-block`}
        style={{ backgroundColor: "rgb(26,55,121)", width: '245px', transition: 'all 0.3s ease-in-out' }}
      >
        <div className="d-flex align-items-center">
          <Link to="/dashboard">
            <img src={Logo} alt="Logo" className="img-fluid logo-img" />
          </Link>
        </div>
        <nav className="nav flex-column">
          <NavLink to="/dashboard" className="nav-link d-flex align-items-center px-3 py-2 mb-1 rounded text-white">
            <FaHome className={isRtl ? 'ms-2' : 'me-2'} size={18} /> {t("Home")}
          </NavLink>
          {blogsPermission.canView && (
            <NavLink to="/dashboard/blogs" className="nav-link d-flex align-items-center px-3 py-2 mb-1 rounded text-white">
              <FaRegNewspaper className={isRtl ? 'ms-2' : 'me-2'} size={18} /> {t("Blogs")}
            </NavLink>
          )}
          {servicesPermission.canView && (
            <NavLink to="/dashboard/services" className="nav-link d-flex align-items-center px-3 py-2 mb-1 rounded text-white">
              <FaConciergeBell className={isRtl ? 'ms-2' : 'me-2'} size={18} /> {t("Services")}
            </NavLink>
          )}
          {projectsPermission.canView && (
            <NavLink to="/dashboard/projects" className="nav-link d-flex align-items-center px-3 py-2 mb-1 rounded text-white">
              <FaProjectDiagram className={isRtl ? 'ms-2' : 'me-2'} size={18} /> {t("Projects")}
            </NavLink>
          )}
          {packagesPermission.canView && (
            <NavLink to="/dashboard/packages" className="nav-link d-flex align-items-center px-3 py-2 mb-1 rounded text-white">
              <FaGift className={isRtl ? 'ms-2' : 'me-2'} size={18} /> {t("Packages")}
            </NavLink>
          )}
          {contactFormsPermission.canView && (
            <NavLink to="/dashboard/contactforms" className="nav-link d-flex align-items-center px-3 py-2 mb-1 rounded text-white">
              <FaEnvelope className={isRtl ? 'ms-2' : 'me-2'} size={18} /> {t("Contact Forms")}
            </NavLink>
          )}
          {faqsPermission.canView && (
            <NavLink to="/dashboard/faqs" className="nav-link d-flex align-items-center px-3 py-2 mb-1 rounded text-white">
              <FaQuestionCircle className={isRtl ? 'ms-2' : 'me-2'} size={18} /> {t("FAQS")}
            </NavLink>
          )}
          {testimonialsPermission.canView && (
            <NavLink to="/dashboard/testimonials" className="nav-link d-flex align-items-center px-3 py-2 mb-1 rounded text-white">
              <FaQuoteLeft className={isRtl ? 'ms-2' : 'me-2'} size={18} /> {t("Testimonials")}
            </NavLink>
          )}
          {usersPermission.canView && (
            <NavLink to="/dashboard/users" className="nav-link d-flex align-items-center px-3 py-2 mb-1 rounded text-white">
              <FaUsers className={isRtl ? 'ms-2' : 'me-2'} size={18} /> {t("Users")}
            </NavLink>
          )}
          {rolesPermission.canView && (
            <NavLink to="/dashboard/roles-permissions" className="nav-link d-flex align-items-center px-3 py-2 mb-1 rounded text-white">
              <FaUserShield className={isRtl ? 'ms-2' : 'me-2'} size={18} /> {t("Roles and Permission")}
            </NavLink>
          )}
          {seoMetaPermission.canView && (
            <NavLink to="/dashboard/seo-meta" className="nav-link d-flex align-items-center px-3 py-2 mb-1 rounded text-white">
              <FaSearch className={isRtl ? 'ms-2' : 'me-2'} size={18} /> {t("Seo Meta Page")}
            </NavLink>
          )}
          <NavLink to="/dashboard/settings" className="nav-link d-flex align-items-center px-3 py-2 mb-1 rounded text-white">
            <FaCogs className={isRtl ? 'ms-2' : 'me-2'} size={18} /> {t("Setting")}
          </NavLink>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
