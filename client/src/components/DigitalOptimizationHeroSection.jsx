import React from "react";
import { useTranslation } from 'react-i18next';
//import { Link } from "react-router-dom";
import SEOImg from '../assets/images/seo.png';
import SocialMediaImg from '../assets/images/social-media.png';
import ShippingImg from '../assets/images/shipping.png';
//import PinImg from '../assets/images/pin.png';
import useGTMEventTracker from './GoogleTagManager/useGTMEventTracker';  // Import the custom hook

function DigitalOptimizationHeroSection() {
    const { t, i18n } = useTranslation();
    const textAlignmentArrow = i18n.dir() === "ltr" ? "text-end" : "text-start"; // Check language direction
    const trackEvent = useGTMEventTracker();  // Initialize the GTM event tracker

    const toggleSection = (title) => {
        trackEvent('click on toggle', 'Digital Optimization Page', 'Toggle Section', title);  // Track event on section toggle
    };

    return (
        <>
            <section className="u-section">
                <div className="container py-5">
                    <div className="row">
                        <div className="col-md-8">
                            <h2 className="z-x">{t('Here’s What We Provide')}</h2>
                        </div>
                    </div>

                    <div className="mt-3">
                        <div className="container">
                            <div className="row g-3">
                                {[
                                    {
                                        img: SEOImg,
                                        title: t('SEO Services'),
                                        text: t('Boost your search engine ranking and drive organic traffic with tailored SEO strategies.')
                                    },
                                    {
                                        img: SocialMediaImg,
                                        title: t('Social Media Account Management'),
                                        text: t('Strengthen your online presence with consistent social media content and engagement strategies.')
                                    },
                                    {
                                        img: ShippingImg,
                                        title: t('Shipping Services'),
                                        text: t('Streamline your logistics with integrated shipping solutions that save time and enhance customer satisfaction.')
                                    },
                                ].map((card, index) => (
                                    <div key={index} className="col-md-4" data-aos="flip-left" data-aos-delay="1200">
                                        <div
                                            className="card h-100 color-effect-card"
                                            style={{ padding: "25px" }}
                                            onClick={() => trackEvent('Digital Optimization Page', 'Explore Service Click', card.title)}  // Track event when "Explore Service" is clicked
                                        >
                                            <div className="card-body">
                                                <img
                                                    className="custom-size-img"
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
                    <h2 className="mb-5 f-g">{t("Why Choose Us for Digital Optimization?")}</h2>
                    <div>
                        {[
                            { num: "001", title: t('SEO Expertise'), description: t("We use proven strategies to boost your search engine rankings and drive organic traffic to your website.") },
                            { num: "002", title: t('Data-Driven Insights'), description: t("We harness the power of data analytics to deliver actionable insights that drive smarter business decisions. Our solutions help you optimize performance, improve efficiency, and stay ahead of the competition.") },
                            { num: "003", title: t('User Experience Focused'), description: t("Our software is designed with users in mind, ensuring intuitive interfaces, seamless interactions, and high engagement. We prioritize usability to enhance customer satisfaction and business success.") },
                            { num: "004", title: t('Cross-Platform Optimization'), description: t("We develop software that works flawlessly across web, mobile, and desktop, ensuring a seamless experience for users on any device. Our solutions maximize accessibility and performance across all platforms.") },
                            { num: "005", title: t('Continuous Growth'), description: t("Our scalable solutions evolve with your business, ensuring long-term success and adaptability. We focus on innovation and ongoing improvements to keep your software competitive and future-ready.") },
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
                    <h2 className="g-r mt-2">{t("Our Path to E-Commerce Success")}</h2>
                    <div className="row text-center">
                        {[
                            { step: t("Step 1"), title: t("Consultation & Strategy"), desc: t("We start by understanding your business goals, target audience, and product offerings to create a tailored e-commerce strategy.") },
                            { step: t("Step 2"), title: t("Design & Prototype"), desc: t("Our team designs a visually appealing and user-friendly interface that reflects your brand and ensures smooth navigation.") },
                            { step: t("Step 3"), title: t("Development & Integration"), desc: t("We build your store using the latest technology and integrate essential features like payment gateways, shipping modules, and inventory management.") },
                            { step: t("Step 4"), title: t("Testing & Optimization"), desc: t("Every aspect of your store is rigorously tested to ensure flawless performance and a seamless shopping experience.") },
                            { step: t("Step 5"), title: t("Launch & Training"), desc: t("Once ready, we launch your store and provide training so you can manage it confidently.") },
                            { step: t("Step 6"), title: t("Ongoing Support"), desc: t("Our team remains available for maintenance, updates, and any additional features you may need.") },
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

export default DigitalOptimizationHeroSection;
