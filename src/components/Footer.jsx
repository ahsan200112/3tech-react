import React from 'react';
import RectangleImg from '../assets/images/Rectangle.png';
import ArrowImg from "../assets/images/arrow.png";
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <>
    <section className="review-value py-5" style={{backgroundColor: "#181818"}}>
    <div className="container">
      <div className="d-flex justify-content-between align-items-center">
        <h1 className="mb-0 me-2 text-light v-use">{t("Let’s Start to Work")}</h1>
        <img src={ArrowImg} alt="Icon" className="img-fluid" style={{width: "60px", height: "60px"}}/>
      </div>
    </div>
  </section>
    <footer className="text-light py-5" style={{ backgroundColor: "#181818" }}>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="d-flex align-items-start">
              <img src={RectangleImg} alt="Company Logo" className="img-fluid" style={{ width: "193px", height: "104px" }} />
            </div>
            <p className="v-face mt-3">
              {t("At 3Tech, we specialize in delivering innovative solutions to empower businesses in the digital age. From website development to branding, we turn your vision into reality.")}
            </p>
            <button className="btn-free">{t("Request Free Audit")}</button>
          </div>
          <div className="col-md-2">
            <h5 className="v-house margin-right-40">{t("Quick Links")}</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="text-start v-inner text-decoration-none">{t("Home")}</a></li>
              <li><a href="/about" className="text-start  v-inner text-decoration-none">{t("About Us")}</a></li>
              <li><a href="/services" className="text-start v-inner text-decoration-none">{t("Services")}</a></li>
             {/* <li><a href="/portfolio" className="text-start v-inner text-decoration-none">{t("Portfolio")}</a></li> */}
              <li><a href="/packages" className="text-start v-inner text-decoration-none">{t("Packages")}</a></li>
              <li><a href="/blogs" className="text-start v-inner text-decoration-none">{t("Blogs")}</a></li>
              <li><a href="/contact" className="text-start v-inner text-decoration-none">{t("Contact Us")}</a></li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5 className="v-house margin-right-40">{t("Services")}</h5>
            <ul className="list-unstyled">
              <li><a href="/ecommerce solution" className="text-start v-inner  text-decoration-none">{t("E-Commerce Solutions")}</a></li>
              <li><a href="/mobile application" className="text-start v-inner text-decoration-none">{t("Mobile Applications")}</a></li>
              <li><a href="/marketing solutions" className="text-start v-inner text-decoration-none">{t("Marketing Solutions")}</a></li>
              <li><a href="/creative design" className="text-start v-inner text-decoration-none">{t("Creative Design")}</a></li>
              <li><a href="/digital optimization" className="text-start v-inner text-decoration-none">{t("Digital Optimization")}</a></li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5 className="v-house">{t("Have Questions?")}</h5>
            <p className="v-left ">{t("Email")}: <a href="mailto:info@3tech.sa"
              className="v-coke text-decoration-none">info@3tech.sa</a></p>
            <p className="v-left pb-2" style={{ borderBottom: "1px solid " }}>{t("Phone no")}: <a href="tel:966557122917+"
              className="v-coke text-decoration-none">966557122917+</a></p>
            <div className="d-flex mt-3">
              <a href="#" className="text-light me-4"><i className="bi bi-linkedin"></i></a>
              <a href="#" className="text-light me-4"><i className="bi bi-facebook"></i></a>
              <a href="#" className="text-light me-4"><i className="bi bi-whatsapp"></i></a>
              <a href="#" className="text-light me-4"><i className="bi bi-instagram"></i></a>
            </div>
          </div>
        </div>
        <div className="row mt-4 pt-3" style={{ borderTop: " 1px solid #1B1264" }}>
          <div className="col d-flex justify-content-between">
            <p className="mb-0">{t("Copyright © 2024 3Tech")}</p>
            <p className="mb-0">
              <a href="#" className="text-light text-decoration-none">{t("Term of use")}</a> |
              <a href="#" className="text-light text-decoration-none"> {t("Privacy Policy")}</a> |
              <a href="#" className="text-light text-decoration-none"> {t("Cookie Policy")}</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
    </>
  );
};

export default Footer;