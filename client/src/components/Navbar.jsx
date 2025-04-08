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

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.dir() === "rtl";
  const [isNavOpen, setIsNavOpen] = useState(false); // Toggle state
  const { theme } = useTheme(); // Get theme from context

  return (
    <>
      {/* Top Contact Section */}
      <section className='u-section color-effect-navbar'>
        <div className="container">
          <div className="row align-items-center py-3">
            <div className="col d-flex custom-content-start mt-3 mb-3 custom-navbar-center">
              <a className={`${isRTL ? "ms-3" : "me-3"} navbar-brand v-vise`} href="tel:+966557122917" ><i className={`${isRTL ? "ms-2" : "me-2"} bi bi-telephone`}></i> {t("+966557122917")}</a>
              <a className={`${isRTL ? "ms-3" : "me-3"} navbar-brand v-vise`} href="mailto:info@3tech.sa"><i className={`${isRTL ? "ms-2" : "me-2"} bi bi-envelope`}></i> info@3tech.sa</a>
            </div>
            <div className="col d-flex custom-content-end mt-3 mb-3 custom-navbar-center">
              <a href="https://www.linkedin.com/company/3tech-platform" target='blank' className={`${isRTL ? "ms-3" : "me-3"} d-flex align-items-center`}><i className="bi bi-linkedin text-primary-color"></i></a>
              <a href="https://api.whatsapp.com/send/?phone=966557122917" target='blank' className={`${isRTL ? "ms-3" : "me-3"} d-flex align-items-center`}><i className="bi bi-whatsapp text-primary-color"></i></a>
              <a href="https://www.instagram.com/3tech.sa?igsh=aW14cDY0cmtvZW9p" target='blank' className={`${isRTL ? "ms-3" : "me-3"} d-flex align-items-center`}><i className="bi bi-instagram text-primary-color"></i></a>
              <ThemeSwitcher />
            </div>
          </div>
        </div>
      </section>

      {/* Main Navbar */}
      <section className="u-section navbar-padding color-effect-navbarLink pb-3">
        <nav className="navbar-bg-color navbar navbar-expand-lg navbar-border">
          <div className="container d-flex align-items-center justify-content-between">

            {/* Left: Logo */}
            <div className="d-flex align-items-center">
              <Link to="/">
                <img src={theme === "light" ? LogoLightMode : LogoDarkMode} alt="Logo" className="img-fluid logo-img" />
              </Link>
            </div>

            {/* Center: Language Toggle (for Mobile View) */}
            {/*   <div className="d-flex align-items-center d-lg-none">
              <LanguageToggle />
            </div> */}

            {/* Right: Navbar Toggler */}
            <button
              className="navbar-toggler ms-3"
              type="button"
              onClick={() => setIsNavOpen(!isNavOpen)}
            >
              <i className="bi bi-list"
                style={{ color: theme === "light" ? "#000" : "#fff" }}>
              </i>
            </button>

            {/* Navbar Links (Collapsible on Mobile) */}
            <div className={`navbar-collapse ${isNavOpen ? "show text-center" : "collapse"}`}>
              <ul className="navbar-nav mx-auto" style={{ paddingRight: "0" }}>
                <li className="nav-item"><Link className="nav-link v-vise" to="/" onClick={() => setIsNavOpen(false)}>{t("Home")}</Link></li>
                <li className="nav-item"><Link className="nav-link v-vise" to="/about" onClick={() => setIsNavOpen(false)}>{t("About Us")}</Link></li>
                <li className="nav-item"><Link className="nav-link v-vise" to="/services" onClick={() => setIsNavOpen(false)}>{t("Services")}</Link></li>
                <li className="nav-item"><Link className="nav-link v-vise" to="/projects" onClick={() => setIsNavOpen(false)}>{t("Projects")}</Link></li>
                <li className="nav-item"><Link className="nav-link v-vise" to="/packages" onClick={() => setIsNavOpen(false)}>{t("Packages")}</Link></li>
                <li className="nav-item"><Link className="nav-link v-vise" to="/blogs" onClick={() => setIsNavOpen(false)}>{t("Blogs")}</Link></li>
                <li className="nav-item"><Link className="nav-link v-vise" to="/contact" onClick={() => setIsNavOpen(false)}>{t("Contact Us")}</Link></li>
              </ul>

              {/* Center: Language Toggle (for Mobile View) */}
              <div className="d-flex align-items-center justify-content-center d-lg-none">
                <LanguageToggle />
              </div>

              {/* Mobile View: Button (Hidden by Default) */}
              <div className="d-lg-none text-center mt-3">
                <Link to="/contact" className="text-decoration-none">
                  <button className="btn-well" onClick={() => setIsNavOpen(false)}>
                    {t("Get a Free Consultation")}
                  </button>
                </Link>
              </div>

              {/* Desktop View: Language Toggle + Button */}
              <div className="d-none d-lg-flex align-items-center">
                <LanguageToggle />  {/* Language Button Pehle Hoga */}
                <Link to="/contact" className="text-decoration-none">
                  <button className="btn-well ms-3">
                    {t("Get a Free Consultation")}
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
