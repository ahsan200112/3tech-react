import React, { useState } from "react";
import { useTranslation } from 'react-i18next';
//import { Link } from "react-router-dom";
import Vector5Img from '../assets/images/Vector (5).png';
import TaskImg from '../assets/images/task.png';
import CopyWritingImg from '../assets/images/copy-writing.png';
import PinImg from '../assets/images/pin.png';
import useGTMEventTracker from './GoogleTagManager/useGTMEventTracker';  // Import the custom hook

function MarketingSolutionsHeroSection() {
    const { t, i18n } = useTranslation();
    const textAlignmentArrow = i18n.dir() === "ltr" ? "text-end" : "text-start"; // Check language direction
    const [activeIndex, setActiveIndex] = useState(null);
    const trackEvent = useGTMEventTracker();  // Initialize the GTM event tracker

    const toggleSection = (index, title) => {
        setActiveIndex(activeIndex === index ? null : index); // Toggle open/close
        trackEvent('click on toggle section', 'Marketing Solutions Page', 'Toggle Section', title);  // Track event on section toggle
    };

    return (
        <>
            <section className="u-section">
                <div className="container py-5">
                    <div className="row">
                        <div className="col-md-8">
                            <h2 className="z-x">{t("Here’s What We Provide")}</h2>
                        </div>
                        {/*  <div className="col-md-4">
                            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", textAlign: "center" }}>
                                <p
                                    className="z-c"
                                    style={{
                                        marginInlineEnd: "20px", // Adjusts automatically for RTL
                                        borderInlineEnd: "1px solid", // Works for both LTR & RTL
                                        paddingInlineEnd: "10px", // Maintains spacing on the correct side
                                    }}
                                >
                                    {t("Development")}<br />{t("WordPress")}<br />{t("Cloud Migration")}
                                </p>
                                <p className="z-c">
                                    {t("Front End Development")}<br />{t("JavaScript")}<br />{t("Flutter Framework")}
                                </p>
                            </div>
                        </div> */}
                    </div>

                    <div className="mt-3">
                        <div className="container">
                            <div className="row g-3">
                                {[
                                    {
                                        img: Vector5Img,
                                        title: t("Advertising Campaign Management"),
                                        text: t("Maximize your reach with expertly managed ad campaigns across platforms like Google, Facebook, and Instagram."),
                                    },
                                    {
                                        img: TaskImg,
                                        title: t("Marketing Consultancy & Strategic Planning"),
                                        text: t("Develop winning marketing strategies with expert guidance to achieve your business goals."),
                                    },
                                    {
                                        img: CopyWritingImg,
                                        title: t("Content Writing"),
                                        text: t("Engage your audience with persuasive, high-quality content that reflects your brand’s voice."),
                                    },
                                ].map((card, index) => (
                                    <div key={index} className="col-md-4" data-aos="flip-left" data-aos-delay="1200">
                                        <div
                                            className="card h-100 color-effect-card"
                                            style={{ padding: "25px" }}
                                            onClick={() => trackEvent('Marketing Solutions Page', 'Explore Service Click', card.title)}  // Track event when "Explore Service" is clicked
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


                <div className="container mt-5 custom-padding-h" data-aos="fade-down" data-aos-delay="500">
                    <h2 className="f-g">{t("Why Choose Us for Marketing Solutions?")}</h2>
                    <div
                        className="card-body mt-3"
                        style={{
                            border: "1px solid var(--text-primary)",
                            borderRadius: "30px",
                            padding: "15px",
                        }}
                    >
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6 mt-3">
                                    <p className="f-k mb-0">(001)</p>
                                    <h2 className="f-h">{t("Targeted Campaigns")}</h2>
                                </div>
                                <div className="col-md-6 mt-3">
                                    <p className="f-l">
                                        {t("We create tailored campaigns that reach your specific audience and achieve your goals.")}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {[
                    { num: "002", title: t("Data-Driven Results"), description: t("We leverage advanced analytics and insights to optimize performance, ensuring every decision is backed by data. Our solutions help maximize efficiency, boost ROI, and drive measurable success.") },
                    { num: "003", title: t("Creative Content"), description: t("We craft engaging and impactful content that resonates with your audience. Our innovative approach ensures your brand stands out, delivering compelling digital experiences.") },
                    { num: "004", title: t("Multi-Channel Expertise"), description: t("From web and mobile to social media and beyond, we ensure a seamless and consistent presence across all platforms. Our expertise helps you reach and engage your audience wherever they are.") },
                ].map((item, index) => (
                    <div key={index} className="container mt-5 custom-padding-h" data-aos="fade-down" data-aos-delay="300">
                        <div className="row" style={{ borderBottom: "1px solid var(--text-primary)", cursor: "pointer" }}
                            onClick={() => toggleSection(index, item.title)}>
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
                        {activeIndex === index && (
                            <div className="row mt-3 custom-border">
                                <div className="col-12">
                                    <p className="l-k">{t(item.description)}</p>
                                </div>
                            </div>
                        )}
                    </div>
                ))}

                <div className="container mt-5 pt-5 custom-padding-h" data-aos="fade-up" data-aos-delay="300">
                    <h2 className="g-r mt-2">{t("Our Path to E-Commerce Success")}</h2>
                    <div className="row text-center">
                        {[
                            { step: t("Step 1"), title: t("Goal Setting"), desc: t("Understand your business objectives and define clear marketing goals.") },
                            { step: t("Step 2"), title: t("Research & Targeting"), desc: t("Identify your ideal customer and develop a targeted marketing strategy.") },
                            { step: t("Step 3"), title: t("Compaign Development"), desc: t("Create compelling ads, content, and marketing materials.") },
                            { step: t("Step 4"), title: t("Execution & Monitoring"), desc: t("Launch campaigns and monitor their performance to optimize results.") },
                            { step: t("Step 5"), title: t("Reporting & Analysis"), desc: t("Provide detailed reports to track the success of campaigns.") },
                            { step: t("Step 6"), title: t("Continuous Optimization"), desc: t("Use data insights to refine and improve campaigns over time.") },
                        ].map((item, index) => (
                            <div key={index} className="col-md-4 mb-4" data-aos="fade-up" data-aos-delay="300">
                                <div className="step">
                                    <div className="custom-row">
                                        <button className="text-start btn-sm n-j">{item.step}</button>
                                        <img src={PinImg} alt="Company Logo" className="img-fluid custom-size-img" />
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

export default MarketingSolutionsHeroSection;
