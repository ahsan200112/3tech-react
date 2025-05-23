import React from "react";
import { useTranslation } from 'react-i18next';
//import { Link } from "react-router-dom";
import Group1Img from '../assets/images/Group (1).png';
import PresentationDesignImg from '../assets/images/presentation-design.png';
import AnimationImg from '../assets/images/animation.png';
//import PinImg from '../assets/images/pin.png';
import useGTMEventTracker from './GoogleTagManager/useGTMEventTracker';  // Import the custom hook

function CreativeDesignHeroSection() {
    const { t, i18n } = useTranslation();
    const textAlignmentArrow = i18n.dir() === "ltr" ? "text-end" : "text-start"; // Check language direction
    const trackEvent = useGTMEventTracker();  // Initialize the GTM event tracker

    const toggleSection = (title) => {
        trackEvent('click on toggle', 'Creative Design Page', 'Toggle Section', title);  // Track event on section toggle
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
                                    <div key={index} className="col-md-4" data-aos="flip-left" data-aos-delay="1200">
                                        <div
                                            className="card h-100 color-effect-card"
                                            style={{ padding: "25px" }}
                                            onClick={() => trackEvent('Creative Design Page', 'Explore Service Click', card.title)}  // Track event when "Explore Service" is clicked
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
                    <h2 className="mb-5 f-g">{t("Why Choose Us for Creative Design?")}</h2>

                    <div>
                        {[
                            { num: "001", title: t("Tailored Designs"), description: t("We create custom visuals that reflect your brand’s personality and message.") },
                            { num: "002", title: t("Innovative Solutions"), description: t("We craft cutting-edge software solutions tailored to your business needs, leveraging the latest technologies to drive efficiency and growth. Our forward-thinking approach ensures you stay ahead in the digital landscape.") },
                            { num: "003", title: t("Consistency Across Channels"), description: t("We ensure a seamless user experience across web, mobile, and desktop platforms, maintaining uniform functionality and design. Your brand and operations stay aligned across all digital touchpoints.") },
                            { num: "004", title: t("Fast Turnaround Time"), description: t("Our agile development process ensures rapid delivery of high-quality software without compromising on performance. We prioritize efficiency to help you meet your business goals on time.") },
                        ].map((item, index) => (
                            <div key={index} className="card-wrapper">
                                <div className="container my-5 custom-padding-h hover-cards " data-aos="fade-down" data-aos-delay="100"
                                    style={{ cursor: "pointer" }}>
                                    <div className="summary-card border-bottom-1 py3" style={{height:"70px"}}>
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
                    <h2 className="g-r mt-2">{t("Designing with Purpose")}</h2>
                    <div className="row text-center">
                        {[
                            { step: t("Step 1"), title: t("Initial Consultation"), desc: t("Understand your brand, values, and design requirements.") },
                            { step: t("Step 2"), title: t("Concept Development"), desc: t("Create initial design concepts that align with your vision.") },
                            { step: t("Step 3"), title: t("Design Refinement"), desc: t("Refine the design based on your feedback to ensure perfection.") },
                            { step: t("Step 4"), title: t("Final Delivery"), desc: t("Deliver high-quality, scalable design assets for use across all channels.") },
                            { step: t("Step 5"), title: t("Brand Implementation"), desc: t("Assist in implementing the designs across various platforms.") },
                        ].map((item, index) => (
                            <div key={index} className="col-md-4 mb-2" data-aos="fade-up" data-aos-delay="100">
                                <div className="step">
                                    <div className="custom-row">
                                        <button className="text-start btn-sm n-j">{item.step}</button>
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
