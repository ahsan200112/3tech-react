import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import WhoWeAreImg from '../assets/images/WhoWeAre.png';
import { useTheme } from "../context/ThemeContext";
import useGTMEventTracker from './GoogleTagManager/useGTMEventTracker';  // Import the custom hook

const WhoWeAre = () => {
    const { t, i18n } = useTranslation();
    const isRTL = i18n.dir() === "rtl";
    const { theme } = useTheme(); // Get theme from context
    const trackEvent = useGTMEventTracker();  // Use the custom hook

    return (
        <section className="u-section">
            <div className="container py-5" data-aos="fade-down" data-aos-delay="800">
                <div className="row align-items-center">
                    <button className="btn-sm u-vise mb-3 custom-margin-10" style={{ width: "130px" }}>{t("Who We Are")}</button>
                    <h1 className="u-visit custom-margin-10">{t("Connecting Your Business With The World!")}</h1>
                    <div className="col-md-6 ">
                        <h1 className="u-were">{t("About Us")}</h1>
                        <p className="u-here">
                            {t("In a world where creativity meets technology, 3Tech delivers exceptional experiences in building online stores, apps, and digital marketing. We’re here to tell your story and connect you with your audience through unique and impactful approaches. Every project with us becomes a memorable journey to success.")}
                        </p>
                        <Link to="/about" className="btn-our d-block w-100 text-decoration-none"
                            onClick={() => trackEvent('click on button', 'Navigation', 'Click', 'Discover Our Story Button')}
                        >
                            {t("Discover Our Story")}
                        </Link>
                        <div className="row text-white mt-3 flex-nowrap text-center mb-3">
                            <div className="col-4 px-2" style={{
                                [isRTL ? "borderLeft" : "borderRight"]: `1px solid ${theme === "light" ? "#000" : "#fff"}`
                            }}>
                                <h2 className="u-how">7+</h2>
                                <p className="u-all">{t("Years in Business")}</p>
                            </div>
                            <div className="col-4 px-2" style={{
                                [isRTL ? "borderLeft" : "borderRight"]: `1px solid ${theme === "light" ? "#000" : "#fff"}`
                            }}>
                                <h2 className="u-value">+150</h2>
                                <p className="u-all">{t("Successful Projects")}</p>
                            </div>
                            <div className="col-4 px-2 mb-2">
                                <h2 className="u-home">99%</h2>
                                <p className="u-all">{t("Happy Clients")}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 u-worldtext-end d-flex align-items-center gap-2">
                        <img src={WhoWeAreImg} alt="Who We Are" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhoWeAre;