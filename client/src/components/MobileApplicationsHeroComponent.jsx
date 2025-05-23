import React from "react";
import { useTranslation } from 'react-i18next';
//import { Link } from "react-router-dom";
import MobileDevelopmentImg from '../assets/images/mobile-development.png';
import Maintenance1Img from '../assets/images/maintenance (1).png';
//import PinImg from '../assets/images/pin.png';
import useGTMEventTracker from './GoogleTagManager/useGTMEventTracker';  // Import the custom hook

function MobileApplicationsHeroSection() {
    const { t, i18n } = useTranslation();
    const textAlignmentArrow = i18n.dir() === "ltr" ? "text-end" : "text-start"; // Check language direction
    const trackEvent = useGTMEventTracker();  // Initialize the GTM event tracker

    const toggleSection = (index, title) => {
        trackEvent('click on toggle section', 'Mobile Applications Page', 'Toggle Section', title);  // Track event on section toggle
    };

    return (
        <>
            <section className="u-section">
                <div className="container py-5">
                    <div className="row">
                        <div className="col-md-8">
                            <h2 className="z-x">{t("Here’s What We Provide")}</h2>
                        </div>
                    </div>

                    <div className="mt-3">
                        <div className="container">
                            <div className="row g-3">
                                {[
                                    {
                                        img: MobileDevelopmentImg,
                                        title: t("Custom App Development"),
                                        text: t("Create innovative, user-friendly mobile applications designed to meet your business needs and engage your audience."),
                                    },
                                    {
                                        img: Maintenance1Img,
                                        title: t("App Maintenance & Updates"),
                                        text: t("Ensure your app stays functional, secure, and up-to-date with regular maintenance and enhancements."),
                                    },
                                ].map((card, index) => (
                                    <div key={index} className=" col-12 col-md-6" data-aos="flip-left" data-aos-delay="1200">
                                        <div
                                            className="card h-100 color-effect-card"
                                            style={{ padding: "25px" }}
                                            onClick={() => trackEvent('Mobile Application Page', 'Explore Service Click', card.title)}  // Track event when "Explore Service" is clicked
                                        >
                                            <div className="card-body">
                                                <img className="custom-size-img"
                                                    src={card.img}
                                                    alt={card.title}
                                                // style={{ height: "60px", width: "60px" }}
                                                />
                                                <h5 className="card-title ul-b mt-3">{card.title}</h5>
                                                <p className="card-text ul-c">{card.text}</p>
                                                <p className="u-help">{t("Explore Service")}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>


                <div className="container mt-5 mb-5 custom-padding-h" data-aos="fade-down" data-aos-delay="200">
                    <h2 className="mb-5 f-g">{t("Why Choose Us for Mobile App Development?")}</h2>
                    <div>
                        {[
                            { num: "001", title: t("Tailored App Development"), description: t("We create mobile apps designed to meet your business needs, user preferences, and goals.") },
                            { num: "002", title: t("Cross-Platform Compatibility"), description: t("We develop software that works seamlessly across web, mobile, and desktop platforms, ensuring a consistent and optimized experience for all users, regardless of their device or operating system.") },
                            { num: "003", title: t("User-Centric Design"), description: t("Our solutions prioritize usability and intuitive design, creating smooth, engaging, and accessible experiences that enhance user satisfaction and drive higher engagement.") },
                            { num: "004", title: t("Ongoing Updates & Support"), description: t("We provide continuous updates, security patches, and dedicated support to keep your software running smoothly. Our commitment ensures long-term reliability, performance, and scalability.") },
                        ].map((item, index) => (
                            <div key={index} className="card-wrapper">
                                <div className="container my-5 custom-padding-h hover-cards " data-aos="fade-down" data-aos-delay="100"
                                    style={{ cursor: "pointer" }}>
                                    <div className="summary-card border-bottom-1 py3" style={{ height: "70px" }}>
                                        <div className="row"
                                            onClick={() => toggleSection(item.title)}>
                                            <div className="col-4 f-z">
                                                <p className="mb-0">{item.num}</p>
                                            </div>
                                            <div className="col-4 text-center">
                                                <h2 className="f-z mb-0">{item.title}</h2>
                                            </div>
                                            <div className={`col-4 f-z ${textAlignmentArrow}`}>
                                                <i className="bi bi-arrow-right mb-0"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="card-body hover-slide py-3"
                                        style={{
                                            border: "1px solid var(--text-primary)",
                                            borderRadius: "30px",
                                            padding: "15px",
                                        }}
                                    >
                                        <div className="container">
                                            <div className="row">
                                                <div className="col-md-6 mt-3">
                                                    <p className="f-k mb-0">{item.num}</p>
                                                    <h2 className="f-h">{item.title}</h2>
                                                </div>
                                                <div className="col-md-6 mt-3">
                                                    <p className="f-l">
                                                        {item.description}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="container mt-5 pt-5 custom-padding-h">
                    <h2 className="g-r mt-2">{t("Crafting Seamless Mobile Experiences")}</h2>
                    <div className="row text-center">
                        {[
                            { step: t("Step 1"), title: t("Consultation & Planning"), desc: t("We define your app's objectives and features with a clear understanding of your target users.") },
                            { step: t("Step 2"), title: t("UI/UX Design"), desc: t("Create intuitive and aesthetically pleasing designs that enhance the user experience.") },
                            { step: t("Step 3"), title: t("App Development"), desc: t("Build the app, ensuring it’s scalable, secure, and functional.") },
                            { step: t("Step 4"), title: t("Testing & Feedback"), desc: t("Conduct extensive testing across devices and gather user feedback for improvements.") },
                            { step: t("Step 5"), title: t("Launch & Monitoring"), desc: t("We launch the app and monitor its performance closely.") },
                            { step: t("Step 6"), title: t("Ongoing Support & Maintenance"), desc: t("Regular updates and bug fixes to ensure your app remains fresh and functional.") },
                        ].map((item, index) => (
                            <div key={index} className="col-md-4 mb-2" data-aos="fade-up" data-aos-delay="100">
                                <div className="step">
                                    <div className="custom-row">
                                        <button className="text-start btn-sm n-j">{item.step}</button>
                                        {/* <img src={PinImg} alt="Company Logo" className="img-fluid custom-size-img" /> */}
                                    </div>
                                    <h5 className="h-klm">{item.title}</h5>
                                    <p className="h-ul">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}

export default MobileApplicationsHeroSection;
