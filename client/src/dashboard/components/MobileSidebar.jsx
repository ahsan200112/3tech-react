// MobileSidebar.jsx
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FaHome, FaRegNewspaper, FaUsers, FaGift, FaConciergeBell, FaProjectDiagram, FaEnvelope, FaQuestionCircle, FaQuoteLeft, FaUserShield, FaSearch, FaCogs } from 'react-icons/fa';
import usePermission from '../../hooks/usePermission';
import Logo from '../../assets/images/3tech logo for dark mode.png';

const MobileSidebar = ({ isOpen, onClose }) => {
    const { t, i18n } = useTranslation();
    const isRtl = i18n.dir() === 'rtl'; // Check the current direction (RTL or LTR)

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

    return (
        <div className={`mobile-sidebar-overlay ${isOpen ? 'open' : ''}`}>
            <div className="mobile-sidebar text-white p-3">
                <button className="btn btn-light mb-3" onClick={onClose}>
                    ☰
                </button>
                <div className="d-flex align-items-center">
                    <Link to="/dashboard">
                        <img src={Logo} alt="Logo" className="img-fluid logo-img" />
                    </Link>
                </div>
                <nav className="nav flex-column">
                    <NavLink to="/dashboard" className="nav-link text-white" onClick={onClose}>
                        <FaHome className={isRtl ? 'ms-2' : 'me-2'} size={18} /> {t("Home")}
                    </NavLink>

                    {blogsPermission && (
                        <NavLink to="/dashboard/blogs" className="nav-link text-white" onClick={onClose}>
                            <FaRegNewspaper className={isRtl ? 'ms-2' : 'me-2'} size={18} /> {t("Blogs")}
                        </NavLink>
                    )}

                    {servicesPermission && (
                        <NavLink to="/dashboard/services" className="nav-link text-white" onClick={onClose}>
                            <FaConciergeBell className={isRtl ? 'ms-2' : 'me-2'} size={18} /> {t("Services")}
                        </NavLink>
                    )}

                    {projectsPermission && (
                        <NavLink to="/dashboard/projects" className="nav-link text-white" onClick={onClose}>
                            <FaProjectDiagram className={isRtl ? 'ms-2' : 'me-2'} size={18} /> {t("Projects")}
                        </NavLink>
                    )}

                    {packagesPermission && (
                        <NavLink to="/dashboard/packages" className="nav-link text-white" onClick={onClose}>
                            <FaGift className={isRtl ? 'ms-2' : 'me-2'} size={18} /> {t("Packages")}
                        </NavLink>
                    )}

                    {contactFormsPermission && (
                        <NavLink to="/dashboard/contactforms" className="nav-link text-white" onClick={onClose}>
                            <FaEnvelope className={isRtl ? 'ms-2' : 'me-2'} size={18} /> {t("Contact Forms")}
                        </NavLink>
                    )}

                    {faqsPermission && (
                        <NavLink to="/dashboard/faqs" className="nav-link text-white" onClick={onClose}>
                            <FaQuestionCircle className={isRtl ? 'ms-2' : 'me-2'} size={18} /> {t("FAQs")}
                        </NavLink>
                    )}

                    {testimonialsPermission && (
                        <NavLink to="/dashboard/testimonials" className="nav-link text-white" onClick={onClose}>
                            <FaQuoteLeft className={isRtl ? 'ms-2' : 'me-2'} size={18} /> {t("Testimonials")}
                        </NavLink>
                    )}

                    {usersPermission && (
                        <NavLink to="/dashboard/users" className="nav-link text-white" onClick={onClose}>
                            <FaUsers className={isRtl ? 'ms-2' : 'me-2'} size={18} /> {t("Users")}
                        </NavLink>
                    )}

                    {rolesPermission && (
                        <NavLink to="/dashboard/roles-permissions" className="nav-link text-white" onClick={onClose}>
                            <FaUserShield className={isRtl ? 'ms-2' : 'me-2'} size={18} /> {t("Roles and Permission")}
                        </NavLink>
                    )}

                    {seoMetaPermission && (
                        <NavLink to="/dashboard/seo-meta" className="nav-link text-white" onClick={onClose}>
                            <FaSearch className={isRtl ? 'ms-2' : 'me-2'} size={18} /> {t("SEO Meta")}
                        </NavLink>
                    )}

                    <NavLink to="/dashboard/settings" className="nav-link text-white" onClick={onClose}>
                        <FaCogs className={isRtl ? 'ms-2' : 'me-2'} size={18} /> {t("Settings")}
                    </NavLink>
                </nav>
            </div>
        </div>
    );
};

export default MobileSidebar;
