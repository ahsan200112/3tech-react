import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import { useTranslation } from 'react-i18next';
import LanguageToggle from './LanguageToggle';
import ThemeSwitcher from './ThemeSwitcher';
import { useTheme } from "../context/ThemeContext";
import LogoDarkMode from '../assets/images/3tech logo for dark mode.png';
import LogoLightMode from '../assets/images/3tech logo for light mode.png';
import useGTMEventTracker from './GoogleTagManager/useGTMEventTracker';  // Import the custom hook

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.dir() === "rtl";
  const [isNavOpen, setIsNavOpen] = useState(false); // Toggle state
  const { theme } = useTheme(); // Get theme from context
  const trackEvent = useGTMEventTracker();  // Use the custom hook

  return (
    <>
      {/* Top Contact Section */}
      <section className='u-section color-effect-navbar'>
        <div className="container">
          <div className="row align-items-center py-3">
            <div className="col d-flex custom-content-start mt-3 mb-3 custom-navbar-center">
              <a className={`${isRTL ? "ms-3" : "me-3"} navbar-brand v-vise`} href="https://api.whatsapp.com/send/?phone=966557122917" target='blank'
                onClick={() => trackEvent('click on navbar phone number link', 'Contact', 'Click', 'Phone Number Link')}
              ><i className={`${isRTL ? "ms-2" : "me-2"} bi bi-telephone`}></i> {t("+966557122917")}</a>
              <a className={`${isRTL ? "ms-3" : "me-3"} navbar-brand v-vise`} href="mailto:info@3tech.sa"
                onClick={() => trackEvent('click on navbar email address link', 'Contact', 'Click', 'Email Address Link')}
              ><i className={`${isRTL ? "ms-2" : "me-2"} bi bi-envelope`}></i> info@3tech.sa</a>
            </div>
            <div className="col d-flex custom-content-end mt-3 mb-3 custom-navbar-center">
              <a href="https://www.linkedin.com/company/3tech-platform" target='blank' className={`${isRTL ? "ms-3" : "me-3"} d-flex align-items-center`}
                onClick={() => trackEvent('click on navbar socail media link', 'Social Media', 'Click', 'LinkedIn Link')}
              ><i className="bi bi-linkedin text-primary-color icon-size"></i></a>
              <a href="https://api.whatsapp.com/send/?phone=966557122917" target='blank' className={`${isRTL ? "ms-3" : "me-3"} d-flex align-items-center`}
                onClick={() => trackEvent('click on social media link', 'Social Media', 'Click', 'WhatsApp Link')}
              ><i className="bi bi-whatsapp text-primary-color icon-size"></i></a>
              <a href="https://www.instagram.com/3tech.sa?igsh=aW14cDY0cmtvZW9p" target='blank' className={`${isRTL ? "ms-3" : "me-3"} d-flex align-items-center`}
                onClick={() => trackEvent('click on social media link', 'Social Media', 'Click', 'Instagram Link')}
              ><i className="bi bi-instagram text-primary-color icon-size"></i></a>
              <ThemeSwitcher />
            </div>
          </div>
        </div>
      </section>

      {/* Main Navbar */}
      {/* navbar-padding class hai jo side pe padding de rahi hai */}
      <section className="u-section color-effect-navbarLink pb-4 navbar-padding sticky-top">
        <nav className="navbar-bg-color navbar navbar-expand-lg navbar-border">
          <div className="container d-flex align-items-center justify-content-between">

            {/* Left: Logo */}
            <div className="d-flex align-items-center">
              <a href="/">
                <img src={theme === "light" ? LogoLightMode : LogoDarkMode} alt="Logo" className="img-fluid logo-img"
                  onClick={() => trackEvent('click on navbar Company logo', 'Navigation', 'Click', 'Company Logo')}
                />
              </a>
            </div>
            {/* Center: Language Toggle (for Mobile View) */}
            <div className={`text-center d-lg-none language-toggle-container ${isRTL ? 'rtl' : 'ltr'}`}>
              <LanguageToggle className=".nav-language-color v-vise" />
            </div>

            {/* Right: Navbar Toggler */}
            <button
              className="navbar-toggler"
              type="button"
              onClick={() => {
                setIsNavOpen(!isNavOpen);
                trackEvent('click on toggle menu button in mobile', 'Navigation', 'Toggle', 'Navbar Toggler');
              }}
            >
              <i className="bi bi-list"
                style={{ color: theme === "light" ? "#000" : "#fff" }}>
              </i>
            </button>

            {/* Navbar Links (Collapsible on Mobile) */}
            <div className={`navbar-collapse ${isNavOpen ? "show text-center" : "collapse"}`}>
              <ul className="navbar-nav mx-auto" style={{ paddingRight: "0" }}>
                <li className="nav-item"><a className="nav-link n-vise" href="/" onClick={() => {
                  setIsNavOpen(false);
                  trackEvent('click on navbar page link', 'Navigation', 'Click', 'Home Page Link');
                }} >
                  {t("Home")}</a></li>
                <li className="nav-item"><a className="nav-link n-vise" href="/about" onClick={() => {
                  setIsNavOpen(false);
                  trackEvent('click on navbar page link', 'Navigation', 'Click', 'About Page Link');
                }}>{t("About Us")}</a></li>
                <li className="nav-item"><a className="nav-link n-vise" href="/services" onClick={() => {
                  setIsNavOpen(false);
                  trackEvent('click on navbar page link', 'Navigation', 'Click', 'Services Page Link');
                }}>{t("Services")}</a></li>
                <li className="nav-item"><a className="nav-link n-vise" href="/projects" onClick={() => {
                  setIsNavOpen(false);
                  trackEvent('click on navbar page link', 'Navigation', 'Click', 'Project Page Link');
                }}>{t("Projects")}</a></li>
                <li className="nav-item"><a className="nav-link n-vise" href="/packages" onClick={() => {
                  setIsNavOpen(false);
                  trackEvent('click on navbar page link', 'Navigation', 'Click', 'Packages Page Link');
                }}>{t("Packages")}</a></li>
               {/* <li className="nav-item"><a className="nav-link v-vise" href="/blogs" onClick={() => {
                  setIsNavOpen(false);
                  trackEvent('click on navbar page link', 'Navigation', 'Click', 'Blogs Page Link');
                }}>{t("Blogs")}</a></li> */}
                <li className="nav-item"><a className="nav-link n-vise" href="/contact" onClick={() => {
                  setIsNavOpen(false);
                  trackEvent('click on navbar page link', 'Navigation', 'Click', 'Contact Page Link');
                }}>{t("Contact Us")}</a></li>
              </ul>

              {/* Mobile View: Button (Hidden by Default) */}
              <div className="d-lg-none text-center mt-3">
                <Link to="/contact" className="text-decoration-none">
                  <button className="button-48 btn-well" onClick={() => {
                    setIsNavOpen(false);
                    trackEvent('click on navbar button', 'Navigation', 'Click', 'Get a Free Consultation Button');
                  }}>
                    <span className="text">{t("Request Free Audit")}</span>
                  </button>
                </Link>
              </div>

              {/* Desktop View: Language Toggle + Button */}
              <div className="d-none d-lg-flex align-items-center">
                <LanguageToggle className=".nav-language-color v-vise" />  {/* Language Button Pehle Hoga */}
                <Link to="/contact" className="text-decoration-none">
                  <button className="button-48 btn-well ms-3"
                    onClick={() => trackEvent('click on navbar button', 'Navigation', 'Click', 'Get a Free Consultation Button')}
                  >
                    <span className="text">{t("Request Free Audit")}</span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </section>
    </>
  );
};

export default Navbar;
