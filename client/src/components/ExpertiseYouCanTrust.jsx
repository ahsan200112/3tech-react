import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Frame41Img from "../assets/images/Frame 41.png";
import { useTheme } from "../context/ThemeContext";

const ExpertiseYouCanTrust = () => {
    const { t, i18n } = useTranslation();
    const isRTL = i18n.dir() === "rtl";
    const { theme } = useTheme(); // Get theme from context
    // const textAlignment = i18n.dir() === "rtl" ? "text-end" : "text-start"; // Check language direction
    return (
        <div className="v-section">
            <section className='py-5'>
                <div className="container">
                    <button className="btn-sm u-easy" style={{ width: "210px" }}>{t("Expertise you can Trust")}</button>
                    <h4 className="mt-3 o-b">{t("Turning Ideas into Impactful Digital Journeys")}</h4>
                    {/* <p className="o-c">{t("Transform your business with a seamless digital journey.")}</p> */}
                    <img src={Frame41Img} alt="Company Logo" className="img-fluid" style={{ maxWidth: "100%", height: "auto" }} />
                </div>
                <div className="container py-5">
                    <div className="row">
                        <div className="col-md-8">
                            <div className="mb-5">
                                <p className="l-k mb-4">
                                    {t("3Tech was born from a desire to bridge creativity and technology. We’ve built a team of experts who don’t just develop apps or design stores—they craft experiences that inspire, connect, and drive results. Every line of code, every design choice, and every campaign is created with your success in mind.")}
                                </p>
                                <div className='d-flex contact-btn-full'>
                                    <Link className="contact-btn text-decoration-none" to="/contact">{t("Contact Us")}</Link>
                                </div>
                            </div>
                            <div className="row text-white mt-3 flex-nowrap text-center mb-3">
                                <div className="col-4 px-2"
                                    style={{
                                        [isRTL ? "borderLeft" : "borderRight"]: `1px solid ${theme === "light" ? "#000" : "#fff"}`
                                    }}>
                                    <h2 className="u-how">10+</h2>
                                    <p className="u-all">{t("Years in Business")}</p>
                                </div>
                                <div className="col-4 px-2"
                                    style={{
                                        [isRTL ? "borderLeft" : "borderRight"]: `1px solid ${theme === "light" ? "#000" : "#fff"}`
                                    }}>
                                    <h2 className="u-how">200+</h2>
                                    <p className="u-all">{t("Successful Projects")}</p>
                                </div>
                                <div className="col-4 px-2">
                                    <h2 className="u-how">99%</h2>
                                    <p className="u-all">{t("Happy Clients")}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="d-flex flex-column">
                                <div>
                                    <div className="mission-vision">
                                        <div className="d-flex justify-content-between align-items-center">
                                            <h5 className="v-c">{t("01. Our Mission")}</h5>
                                            <i className="bi bi-arrow-up-right"></i>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-3">
                                    <div className="mission-vision">
                                        <div className="d-flex justify-content-between">
                                            <h5 className="v-x">{t("02. Our Vision")}</h5>
                                            <i className="bi bi-x"></i>
                                        </div>
                                        <p className="v-n">{t("Shaping the Future, One Idea at a Time")}</p>
                                        <p className="v-q">{t("We envision a world where businesses of every size thrive in the digital era. Our mission is to empower brands with the tools, strategies, and creativity they need to leave a mark on their industry.")}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ExpertiseYouCanTrust;

