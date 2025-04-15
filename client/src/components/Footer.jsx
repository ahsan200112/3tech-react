import React from 'react';
import LogoDarkMode from '../assets/images/3tech logo for dark mode.png';
import LogoLightMode from '../assets/images/3tech logo for light mode.png';
import { useTheme } from "../context/ThemeContext";
import ArrowImg from "../assets/images/arrow.png";
import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom"; // Import Link from React Router
import CertificateLogo from '../assets/images/certificateLogo.png';
import useGTMEventTracker from './GoogleTagManager/useGTMEventTracker';  // Import the custom hook

const Footer = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.dir() === "rtl";
  const { theme } = useTheme(); // Get theme from context
  const trackEvent = useGTMEventTracker();  // Use the custom hook

  return (
    <>
      <section className="review-value py-4" style={{ borderTop: " 1px solid #1B1264", borderBottom: " 1px solid #1B1264" }}>
        <div className="container">
          <div className="d-flex justify-content-between align-items-center">
            <h1 className="mb-0 me-2 text-primary-color custom-padding-h">{t("Let’s Start to Work")}</h1>
            <Link to="/contact" className='rotate-image'>
              <img src={ArrowImg} alt="Icon" className="img-fluid" style={{ width: "60px", height: "60px" }}
                onClick={() => trackEvent('click on footer arrow', 'Arrow Click', 'Click', 'Contact Page Link in footer')}
              />
            </Link>
          </div>
        </div>
      </section>
      <footer className="text-light py-4 review-value" data-aos="fade-down" data-aos-delay="300">
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <div className="d-flex align-items-start">
                <Link to="/">
                  <img src={theme === "light" ? LogoLightMode : LogoDarkMode} alt="Company Logo" className="img-fluid footer-logo-img margin-top-minus custom-transition"
                    onClick={() => trackEvent('click on footer logo', 'Navigation', 'Click', 'Company Logo')}
                  />
                </Link>
              </div>
              <p className="v-face margin-top-minus">
                {t("At 3Tech, we specialize in delivering innovative solutions to empower businesses in the digital age. From website development to branding, we turn your vision into reality.")}
              </p>
              <Link to="/contact" className="text-decoration-none">
                <button className="btn-free responsive-btn mb-3"
                  onClick={() => trackEvent('click on footer button', 'Navigation', 'Click', 'Request Free Audit button')}
                >{t("Request Free Audit")}</button>
              </Link>
            </div>
            <div className="col-md-2 custom-text-center text-center">
              <h5 className="v-house" style={{ fontWeight: "700" }}>{t("Quick Links")}</h5>
              <ul className="list-unstyled custom-text-center padding-right-0 text-center">
                <li className='custom-list-padding'><Link to="/" className="text-start v-inner text-decoration-none"
                  onClick={() => trackEvent('click on footer page link', 'Navigation', 'Click', 'Home Page Link')}
                >{t("Home")}</Link></li>
                <li className='custom-list-padding'><Link to="/about" className="text-start  v-inner text-decoration-none"
                  onClick={() => trackEvent('click on footer page link', 'Navigation', 'Click', 'About Page Link')}
                >{t("About Us")}</Link></li>
                <li className='custom-list-padding'><Link to="/services" className="text-start v-inner text-decoration-none"
                  onClick={() => trackEvent('click on footer page link', 'Navigation', 'Click', 'Services Page Link')}
                >{t("Services")}</Link></li>
                <li className='custom-list-padding'><Link to="/packages" className="text-start v-inner text-decoration-none"
                  onClick={() => trackEvent('click on footer page link', 'Navigation', 'Click', 'Packages Page Link')}
                >{t("Packages")}</Link></li>
                <li className='custom-list-padding'><Link to="/blogs" className="text-start v-inner text-decoration-none"
                  onClick={() => trackEvent('click on footer page link', 'Navigation', 'Click', 'Blogs Page Link')}
                >{t("Blogs")}</Link></li>
                <li className='custom-list-padding'><Link to="/contact" className="text-start v-inner text-decoration-none"
                  onClick={() => trackEvent('click on footer page link', 'Navigation', 'Click', 'ContactUs Page Link')}
                >{t("Contact Us")}</Link></li>
              </ul>
            </div>
            <div className="col-md-2 custom-text-center text-center">
              <h5 className="v-house" style={{ fontWeight: "700" }}>{t("Services")}</h5>
              <ul className="list-unstyled custom-text-center padding-right-0 text-center">
                <li className='custom-list-padding'><Link to="/ecommercesolutions" className="text-start v-inner  text-decoration-none"
                  onClick={() => trackEvent('click on footer page link', 'Navigation', 'Click', 'E-commerce Solutions Page Link')}
                >{t("E-Commerce Solutions")}</Link></li>
                <li className='custom-list-padding'><Link to="/mobileapplications" className="text-start v-inner text-decoration-none"
                  onClick={() => trackEvent('click on footer page link', 'Navigation', 'Click', 'Mobile Applications Page Link')}
                >{t("Mobile Applications")}</Link></li>
                <li className='custom-list-padding'><Link to="/marketingsolutions" className="text-start v-inner text-decoration-none"
                  onClick={() => trackEvent('click on footer page link', 'Navigation', 'Click', 'Marketing Soltions Page Link')}
                >{t("Marketing Solutions")}</Link></li>
                <li className='custom-list-padding'><Link to="/creativedesign" className="text-start v-inner text-decoration-none"
                  onClick={() => trackEvent('click on footer page link', 'Navigation', 'Click', 'Creative Design Page Link')}
                >{t("Creative Design")}</Link></li>
                <li className='custom-list-padding'><Link to="/digitaloptimization" className="text-start v-inner text-decoration-none"
                  onClick={() => trackEvent('click on footer page link', 'Navigation', 'Click', 'Digital Optimization Page Link')}
                >{t("Digital Optimization")}</Link></li>
              </ul>
            </div>
            <div className="col-md-3 custom-text-center">
              <h5 className="v-house" style={{ fontWeight: "700" }}>{t("Have Questions?")}</h5>
              <p className="v-left">{t("Email")}: <a href="mailto:info@3tech.sa"
                className="v-coke text-decoration-none"
                onClick={() => trackEvent('click on footer email address link', 'Contact', 'Click', 'Email Address Link')}
              >info@3tech.sa</a></p>
              <p className="v-left pb-2" style={{ borderBottom: "1px solid" }}>{t("Phone no")}: <a href="https://api.whatsapp.com/send/?phone=966557122917" target='blank'
                className="v-coke text-decoration-none"
                onClick={() => trackEvent('click on footer phone number link', 'Contact', 'Click', 'Phone Number Link')}
              > {t("+966557122917")}</a></p>
              <div className="d-flex mt-3 custom-list-padding custom-text-center custom-content-center">
                <a href="https://www.linkedin.com/company/3tech-platform" target='blank' className={`${isRTL ? "ms-4" : "me-4"} margin`}
                  onClick={() => trackEvent('click on footer social media link', 'Social Media', 'Click', 'LinkedIn Link')}
                ><i className="bi bi-linkedin text-primary-color"></i></a>
                <a href="https://api.whatsapp.com/send/?phone=966557122917" target='blank' className={`${isRTL ? "ms-4" : "me-4"} margin`}
                  onClick={() => trackEvent('click on footer social media link', 'Social Media', 'Click', 'WhatsApp Link')}
                ><i className="bi bi-whatsapp text-primary-color"></i></a>
                <a href="https://www.instagram.com/3tech.sa?igsh=aW14cDY0cmtvZW9p" target='blank' className={`${isRTL ? "ms-4" : "me-4"} margin`}
                  onClick={() => trackEvent('click on footer social media link', 'Social Media', 'Click', 'Instagram Link')}
                ><i className="bi bi-instagram text-primary-color"></i></a>
                <a href="https://eauthenticate.saudibusiness.gov.sa/certificate-details/0000112765" target='blank' className={`${isRTL ? "ms-4" : "me-4"} margin`}
                  onClick={() => trackEvent('click on footer social media link', 'Social Media', 'Click', 'Certificate Details Link')}
                >
                  <img src={CertificateLogo} alt="Icon" className="img-fluid" style={{ width: "26px", height: "26px" }}></img>
                </a>
              </div>
            </div>
          </div>
          <div className="row mt-4 pt-3 custom-text-center" style={{ borderTop: " 1px solid #1B1264" }}>
            <div className="col d-flex justify-content-between text-primary-color custom-direction">
              <p className="mb-0 custom-list-padding">
                <Link to="/privacypolicy" className="text-decoration-none v-term"
                  onClick={() => trackEvent('click on footer privacy policy link', 'Navigation', 'Click', 'Privacy Policy Link')}
                >{t("Privacy Policy")}</Link>
                <span> | </span>
                {/* <a href="/" className="text-decoration-none v-term"> {t("Privacy Policy")}</a> | */}
                <Link to="/termsandconditions" className="text-decoration-none v-term"
                  onClick={() => trackEvent('click on footer terms and conditions link', 'Navigation', 'Click', 'Terms and Conditions Link')}
                >
                  {t("Terms and Conditions")}
                </Link>
                <span> | </span>
                <Link to="/contact" className="text-decoration-none v-term"
                  onClick={() => trackEvent('click on footer complaints and suggestions link', 'Navigation', 'Click', 'Complaints and suggestions Link')}
                >
                  {t("Complaints and suggestions")}
                </Link>
              </p>
              <p className="mb-0 v-copy">{t("Copyright © 2025 3Tech")}</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;