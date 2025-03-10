import React from "react";
import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";
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
                            <h2 className="z-x">Here’s What We Provide</h2>
                        </div>
                        <div className="col-md-4">
                            <div style={{ display: "flex", flexWrap: "wrap" }}>
                                <p
                                    className="z-c"
                                    style={{
                                        marginRight: "20px",
                                        borderRight: "1px solid",
                                        color: "#CFCECE",
                                        paddingRight: "10px",
                                    }}
                                >
                                    Development<br />WordPress<br />Cloud Migration
                                </p>
                                <p className="z-c">
                                    Front End Development<br />JavaScript<br />Flutter Framework
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
                                        title: "Online Store Development",
                                        text: "We build modern, feature-rich online stores designed for a seamless shopping experience, helping you sell smarter and scale faster.",
                                    },
                                    {
                                        img: TiImg,
                                        title: "Payment Integration (3Pay)",
                                        text: "Simplify transactions with secure and efficient payment gateway integration tailored for your online store.",
                                    },
                                    {
                                        img: ShippingImg,
                                        title: "Shipping Services",
                                        text: "Streamline your logistics with integrated shipping solutions that save time and enhance customer satisfaction.",
                                    },
                                ].map((card, index) => (
                                    <div key={index} className="col-md-4">
                                        <div
                                            className="card bg-dark text-white h-100"
                                            style={{ padding: "25px"}}
                                        >
                                            <div className="card-body">
                                                <img
                                                    src={card.img}
                                                    alt={card.title}
                                                   // style={{ height: "60px", width: "60px" }}
                                                />
                                                <h5 className="card-title ul-b mt-3">{card.title}</h5>
                                                <p className="card-text ul-c">{card.text}</p>
                                                <p className="u-help">Explore Service</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>


                <div className="container mt-5">
                    <h2 className="f-g">Why 3Tech is Your Perfect E-Commerce Partner ?</h2>
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
                                    <h2 className="f-h">Tailored Store Development</h2>
                                </div>
                                <div className="col-md-6 mt-3">
                                    <p className="f-l">
                                    We don’t just build stores; we craft experiences uniquely designed to meet your business needs.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {[
                    { num: "002", title: "End-to-End Integration" },
                    { num: "003", title: "Cutting-Edge Technology" },
                    { num: "004", title: "Ownership with No Hidden Fees" },
                    { num: "005", title: "Dedicated Support" },
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
                    <h2 className="text-start g-r mt-2">Our Path to E-Commerce Success</h2>
                    <div className="row text-center">
                        {[
                            { step: "Step 1", title: "Consultation & Strategy", desc: "We start by understanding your business goals, target audience, and product offerings to create a tailored e-commerce strategy." },
                            { step: "Step 2", title: "Design & Prototype", desc: "Our team designs a visually appealing and user-friendly interface that reflects your brand and ensures smooth navigation." },
                            { step: "Step 3", title: "Development & Integration", desc: "We build your store using the latest technology and integrate essential features like payment gateways, shipping modules, and inventory management." },
                            { step: "Step 4", title: "Testing & Optimization", desc: "Every aspect of your store is rigorously tested to ensure flawless performance and a seamless shopping experience." },
                            { step: "Step 5", title: "Launch & Training", desc: "Once ready, we launch your store and provide training so you can manage it confidently." },
                            { step: "Step 6", title: "Ongoing Support", desc: "Our team remains available for maintenance, updates, and any additional features you may need." }, 
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

export default EcommerceSolutionsHeroSection;
