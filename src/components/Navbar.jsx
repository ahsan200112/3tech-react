import React from 'react';
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

  return (
    <>
      <section style={{ backgroundColor: "var(--bg-primary)" }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col d-flex justify-content-start mt-3 mb-3">
              <a className="navbar-brand v-vise" href="/">
                <i className="bi bi-telephone"></i> +966557122917
              </a>
              <a className="navbar-brand v-vise ms-3" href="/">
                <i className="bi bi-envelope"></i> info@3tech.sa
              </a>
            </div>
            <div className="col d-flex justify-content-end mt-3 mb-3">
              <a href="/" className={`${isRTL ? "ms-3" : "me-3"} d-flex align-items-center`}><i className="bi bi-linkedin text-primary-color"></i></a>
              <a href="/" className={`${isRTL ? "ms-3" : "me-3"} d-flex align-items-center`}><i className="bi bi-facebook text-primary-color"></i></a>
              <a href="/" className={`${isRTL ? "ms-3" : "me-3"} d-flex align-items-center`}><i className="bi bi-whatsapp text-primary-color"></i></a>
              <a href="/" className={`${isRTL ? "ms-3" : "me-3"} d-flex align-items-center`}><i className="bi bi-instagram text-primary-color"></i></a>
              <ThemeSwitcher />
            </div>
          </div>
        </div>
      </section>

      <section className="navbar-bg-color">
        <nav className="navbar navbar-expand-lg" style={{ padding: "15px 30px", borderRadius: "30px" }}>
          <div className="container d-flex align-items-center justify-content-between">

            {/* Left: Logo */}
            <div className="d-flex align-items-center">
              <img src={RectangleImg} alt="Logo" className="img-fluid logo-img" />
            </div>

            {/* Center: Navigation Links */}
            <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item"><Link className="nav-link v-vise" to="/">{t("Home")}</Link></li>
                <li className="nav-item"><Link className="nav-link v-vise" to="/about">{t("About Us")}</Link></li>
                <li className="nav-item"><Link className="nav-link v-vise" to="/services">{t("Services")}</Link></li>
                <li className="nav-item"><Link className="nav-link v-vise" to="/projects">{t("Projects")}</Link></li>
                <li className="nav-item"><Link className="nav-link v-vise" to="/packages">{t("Packages")}</Link></li>
                <li className="nav-item"><Link className="nav-link v-vise" to="/blogs">{t("Blogs")}</Link></li>
                <li className="nav-item"><Link className="nav-link v-vise" to="/contact">{t("Contact Us")}</Link></li>
              </ul>
            </div>

            {/* Right: Language Toggle & Button */}
            <div className="d-flex align-items-center">
              <LanguageToggle />
              <button className="btn-well ms-3">
                {t("Get a Free Consultation")}
              </button>
            </div>
          </div>
        </nav>
      </section>
    </>
  );
};

export default Navbar;
