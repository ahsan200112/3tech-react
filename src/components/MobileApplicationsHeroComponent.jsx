import React from "react";
import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";
import MobileDevelopmentImg from '../assets/images/mobile-development.png';
import Maintenance1Img from '../assets/images/maintenance (1).png';
import PinImg from '../assets/images/pin.png';

function MobileApplicationsHeroSection() {
    const { t, i18n } = useTranslation();
    const textAlignmentArrow = i18n.dir() === "ltr" ? "text-end" : "text-start"; // Check language direction
    return (
        <>
            <section className="u-section">
                <div className="container py-5">
                    <div className="row">
                        <div className="col-md-8">
                            <h2 className="z-x">{t("Here’s What We Provide")}</h2>
                        </div>
                        <div className="col-md-4">
                            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", textAlign: "center" }}>
                                <p
                                    className="z-c"
                                    style={{
                                        marginInlineEnd: "20px", // Adjusts automatically for RTL
                                        borderInlineEnd: "1px solid", // Works for both LTR & RTL
                                        color: "#CFCECE",
                                        paddingInlineEnd: "10px", // Maintains spacing on the correct side
                                    }}
                                >
                                    {t("Development")}<br />{t("WordPress")}<br />{t("Cloud Migration")}
                                </p>
                                <p className="z-c">
                                    {t("Front End Development")}<br />{t("JavaScript")}<br />{t("Flutter Framework")}
                                </p>
                            </div>
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
                                    <div key={index} className=" col-12 col-md-6">
                                        <div
                                            className="card bg-dark text-white h-100"
                                            style={{ padding: "25px" }}
                                        >
                                            <div className="card-body">
                                                <img
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


                <div className="container mt-5">
                    <h2 className="f-g">{t("Why Choose Us for Mobile App Development?")}</h2>
                    <div
                        className="card-body mt-3"
                        style={{
                            border: "1px solid white",
                            borderRadius: "30px",
                            padding: "15px",
                        }}
                    >
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6 mt-3">
                                    <p className="f-k mb-0">(001)</p>
                                    <h2 className="f-h">{t("Tailored App Development")}</h2>
                                </div>
                                <div className="col-md-6 mt-3">
                                    <p className="f-l">
                                        {t("We create mobile apps designed to meet your business needs, user preferences, and goals.")}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {[
                    { num: "002", title: t("Cross-Platform Compatibility") },
                    { num: "003", title: t("User-Centric Design") },
                    { num: "004", title: t("Ongoing Updates & Support") },
                ].map((item, index) => (
                    <div key={index} className="container mt-5">
                        <div className="row" style={{ borderBottom: "1px solid #FFFFFF" }}>
                            <div className="col-4 f-z">
                                <p>{item.num}</p>
                            </div>
                            <div className="col-4 text-center">
                                <h2 className="f-z mb-5">{item.title}</h2>
                            </div>
                            <div className={`col-4 f-z ${textAlignmentArrow}`}>
                                <i className="bi bi-arrow-right"></i>
                            </div>
                        </div>
                    </div>
                ))}

                <div className="container mt-5 pt-5">
                    <h2 className="text-start g-r mt-2">{t("Crafting Seamless Mobile Experiences")}</h2>
                    <div className="row text-center">
                        {[
                            { step: t("Step 1"), title: t("Consultation & Planning"), desc: t("We define your app's objectives and features with a clear understanding of your target users.")},
                            { step: t("Step 2"), title: t("UI/UX Design"), desc: t("Create intuitive and aesthetically pleasing designs that enhance the user experience.") },
                            { step: t("Step 3"), title: t("App Development"), desc: t("Build the app, ensuring it’s scalable, secure, and functional.") },
                            { step: t("Step 4"), title: t("Testing & Feedback"), desc: t("Conduct extensive testing across devices and gather user feedback for improvements.") },
                            { step: t("Step 5"), title: t("Launch & Monitoring"), desc: t("We launch the app and monitor its performance closely.") },
                            { step: t("Step 6"), title: t("Ongoing Support & Maintenance"), desc: t("Regular updates and bug fixes to ensure your app remains fresh and functional.") },
                        ].map((item, index) => (
                            <div key={index} className="col-md-4 mb-4">
                                <div className="step">
                                    <div className="custom-row">
                                        <button className="text-start btn btn-sm n-j text-white" style={{ border: "1px solid #989898", borderRadius: "15px" }}>{item.step}</button>
                                        <img src={PinImg} alt="Company Logo" className="img-fluid" />
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
