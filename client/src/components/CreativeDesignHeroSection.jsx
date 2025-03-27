import React , { useState } from "react";
import { useTranslation } from 'react-i18next';
//import { Link } from "react-router-dom";
import Group1Img from '../assets/images/Group (1).png';
import PresentationDesignImg from '../assets/images/presentation-design.png';
import AnimationImg from '../assets/images/animation.png';
import PinImg from '../assets/images/pin.png';

function CreativeDesignHeroSection() {
    const { t, i18n } = useTranslation();
    const textAlignmentArrow = i18n.dir() === "ltr" ? "text-end" : "text-start"; // Check language direction
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleSection = (index) => {
        setActiveIndex(activeIndex === index ? null : index); // Toggle open/close
    };

    return (
        <>
            <section className="u-section">
                <div className="container py-5">
                    <div className="row">
                        <div className="col-md-8">
                            <h2 className="z-x">{t("Here’s What We Provide")}</h2>
                        </div>
                        {/* <div className="col-md-4">
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
                                        img: Group1Img,
                                        title: t("Visual Identity Design"),
                                        text: t("Build a unique, cohesive visual identity that sets your brand apart and leaves a lasting impression."),
                                    },
                                    {
                                        img: PresentationDesignImg,
                                        title: t("Visual Content Design"),
                                        text: t("Develop winning marketing strategies with expert guidance to achieve your business goals."),
                                    },
                                    {
                                        img: AnimationImg,
                                        title: t("Motion Graphics & Video Editing"),
                                        text: t("Bring your ideas to life with dynamic motion graphics and professionally edited videos."),
                                    },
                                ].map((card, index) => (
                                    <div key={index} className="col-md-4">
                                        <div
                                            className="card h-100 color-effect-card"
                                            style={{ padding: "25px" }}
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
                <div className="container mt-5 custom-padding-h">
                    <h2 className="f-g">{t("Why Choose Us for Creative Design?")}</h2>
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
                                    <h2 className="f-h">{t("Tailored Designs")}</h2>
                                </div>
                                <div className="col-md-6 mt-3">
                                    <p className="f-l">
                                        {t("We create custom visuals that reflect your brand’s personality and message.")}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {[
                    { num: "002", title: t("Innovative Solutions"), description: t("We craft cutting-edge software solutions tailored to your business needs, leveraging the latest technologies to drive efficiency and growth. Our forward-thinking approach ensures you stay ahead in the digital landscape.") },
                    { num: "003", title: t("Consistency Across Channels"), description: t("We ensure a seamless user experience across web, mobile, and desktop platforms, maintaining uniform functionality and design. Your brand and operations stay aligned across all digital touchpoints.") },
                    { num: "004", title: t("Fast Turnaround Time"), description : t("Our agile development process ensures rapid delivery of high-quality software without compromising on performance. We prioritize efficiency to help you meet your business goals on time.") },
                ].map((item, index) => (
                    <div key={index} className="container mt-5 custom-padding-h">
                        <div className="row" style={{ borderBottom: "1px solid var(--text-primary)", cursor:"pointer" }}
                            onClick={() => toggleSection(index)}>
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

                <div className="container mt-5 pt-5 custom-padding-h">
                    <h2 className="g-r mt-2">{t("Designing with Purpose")}</h2>
                    <div className="row text-center">
                        {[
                            { step: t("Step 1"), title: t("Initial Consultation"), desc: t("Understand your brand, values, and design requirements.") },
                            { step: t("Step 2"), title: t("Concept Development"), desc: t("Create initial design concepts that align with your vision.") },
                            { step: t("Step 3"), title: t("Design Refinement"), desc: t("Refine the design based on your feedback to ensure perfection.") },
                            { step: t("Step 4"), title: t("Final Delivery"), desc: t("Deliver high-quality, scalable design assets for use across all channels.") },
                            { step: t("Step 5"), title: t("Brand Implementation"), desc: t("Assist in implementing the designs across various platforms.") },
                        ].map((item, index) => (
                            <div key={index} className="col-md-4 mb-4">
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

export default CreativeDesignHeroSection;
