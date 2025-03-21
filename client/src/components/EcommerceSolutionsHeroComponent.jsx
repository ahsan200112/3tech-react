import React from "react";
import { useTranslation } from 'react-i18next';
//import { Link } from "react-router-dom";
import ToImg from '../assets/images/to.png';
import TiImg from '../assets/images/ti.png';
import ShippingImg from '../assets/images/shipping.png';
import PinImg from '../assets/images/pin.png';

function EcommerceSolutionsHeroSection() {
    const { t, i18n } = useTranslation();
    const textAlignmentArrow = i18n.dir() === "ltr" ? "text-end" : "text-start"; // Check language direction
    return (
        <>
            <section className="u-section">
                <div className="container py-5">
                    <div className="row">
                        <div className="col-md-8">
                            <h2 className="z-x">{t('Here’s What We Provide')}</h2>
                        </div>
                        <div className="col-md-4">
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
                        </div>
                    </div>

                    <div className="mt-3">
                        <div className="container">
                            <div className="row g-3">
                                {[
                                    {
                                        img: ToImg,
                                        title: t("Online Store Development"),
                                        text: t("We build modern, feature-rich online stores designed for a seamless shopping experience, helping you sell smarter and scale faster."),
                                    },
                                    {
                                        img: TiImg,
                                        title: t("Payment Integration (3Pay)"),
                                        text: t("Simplify transactions with secure and efficient payment gateway integration tailored for your online store."),
                                    },
                                    {
                                        img: ShippingImg,
                                        title: t("Shipping Services"),
                                        text: t("Streamline your logistics with integrated shipping solutions that save time and enhance customer satisfaction."),
                                    },
                                ].map((card, index) => (
                                    <div key={index} className="col-md-4">
                                        <div
                                            className="card h-100"
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
                    <h2 className="f-g">{t("Why 3Tech is Your Perfect E-Commerce Partner?")}</h2>
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
                                    <h2 className="f-h">{t("Tailored Store Development")}</h2>
                                </div>
                                <div className="col-md-6 mt-3">
                                    <p className="f-l">
                                        {t("We don’t just build stores; we craft experiences uniquely designed to meet your business needs.")}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {[
                    { num: "002", title: t("End-to-End Integration") },
                    { num: "003", title: t("Cutting-Edge Technology") },
                    { num: "004", title: t("Ownership with No Hidden Fees") },
                    { num: "005", title: t("Dedicated Support") },
                ].map((item, index) => (
                    <div key={index} className="container mt-5 custom-padding-h">
                        <div className="row" style={{ borderBottom: "1px solid var(--text-primary)" }}>
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

export default EcommerceSolutionsHeroSection;
