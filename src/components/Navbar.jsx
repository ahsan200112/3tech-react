import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import { useTranslation } from 'react-i18next';
import RectangleImg from '../assets/images/Rectangle.png';
import LanguageToggle from './LanguageToggle';
import ThemeSwitcher from './ThemeSwitcher';

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.dir() === "rtl";
  const [isNavOpen, setIsNavOpen] = useState(false); // Toggle state

  return (
    <>
      {/* Top Contact Section */}
      <section style={{ backgroundColor: "var(--bg-primary)" }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col d-flex custom-content-start mt-3 mb-3 custom-navbar-center">
              <a className="navbar-brand v-vise" href="/"><i className="bi bi-telephone"></i> +966557122917</a>
              <a className="navbar-brand v-vise ms-3" href="/"><i className="bi bi-envelope"></i> info@3tech.sa</a>
            </div>
            <div className="col d-flex custom-content-end mt-3 mb-3 custom-navbar-center">
              <a href="/" className={`${isRTL ? "ms-3" : "me-3"} d-flex align-items-center`}><i className="bi bi-linkedin text-primary-color"></i></a>
              <a href="/" className={`${isRTL ? "ms-3" : "me-3"} d-flex align-items-center`}><i className="bi bi-facebook text-primary-color"></i></a>
              <a href="/" className={`${isRTL ? "ms-3" : "me-3"} d-flex align-items-center`}><i className="bi bi-whatsapp text-primary-color"></i></a>
              <a href="/" className={`${isRTL ? "ms-3" : "me-3"} d-flex align-items-center`}><i className="bi bi-instagram text-primary-color"></i></a>
              <ThemeSwitcher />
            </div>
          </div>
        </div>
      </section>

      {/* Main Navbar */}
      <section className="navbar-bg-color">
        <nav className="navbar navbar-expand-lg" style={{ padding: "15px 30px", borderRadius: "30px" }}>
          <div className="container d-flex align-items-center justify-content-between">

            {/* Left: Logo */}
            <div className="d-flex align-items-center">
              <img src={RectangleImg} alt="Logo" className="img-fluid logo-img" />
            </div>

            {/* Center: Language Toggle (for Mobile View) */}
            <div className="d-flex align-items-center d-lg-none">
              <LanguageToggle />
            </div>

            {/* Right: Navbar Toggler */}
            <button
              className="navbar-toggler ms-3"
              type="button"
              onClick={() => setIsNavOpen(!isNavOpen)}
            >
              <i className="bi bi-list"></i>
            </button>

            {/* Navbar Links (Collapsible on Mobile) */}
            <div className={`navbar-collapse ${isNavOpen ? "show text-center" : "collapse"}`}>
              <ul className="navbar-nav mx-auto">
                <li className="nav-item"><Link className="nav-link v-vise" to="/">{t("Home")}</Link></li>
                <li className="nav-item"><Link className="nav-link v-vise" to="/about">{t("About Us")}</Link></li>
                <li className="nav-item"><Link className="nav-link v-vise" to="/services">{t("Services")}</Link></li>
                <li className="nav-item"><Link className="nav-link v-vise" to="/projects">{t("Projects")}</Link></li>
                <li className="nav-item"><Link className="nav-link v-vise" to="/packages">{t("Packages")}</Link></li>
                <li className="nav-item"><Link className="nav-link v-vise" to="/blogs">{t("Blogs")}</Link></li>
                <li className="nav-item"><Link className="nav-link v-vise" to="/contact">{t("Contact Us")}</Link></li>
              </ul>

              {/* Mobile View: Button (Hidden by Default) */}
              <div className="d-lg-none text-center mt-3">
                <button className="btn-well">
                  {t("Get a Free Consultation")}
                </button>
              </div>

              {/* Desktop View: Language Toggle + Button */}
              <div className="d-none d-lg-flex align-items-center">
                <LanguageToggle />  {/* Language Button Pehle Hoga */}
                <button className="btn-well ms-3">
                  {t("Get a Free Consultation")}
                </button>
              </div>
            </div>
          </div>
        </nav>
      </section>
    </>
  );
};

export default Navbar;
