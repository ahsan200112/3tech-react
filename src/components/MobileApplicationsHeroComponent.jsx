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
                                        img: MobileDevelopmentImg,
                                        title: "Custom App Development",
                                        text: " Create innovative, user-friendly mobile applications designed to meet your business needs and engage your audience.",
                                    },
                                    {
                                        img: Maintenance1Img,
                                        title: "App Maintenance & Updates",
                                        text: "Ensure your app stays functional, secure, and up-to-date with regular maintenance and enhancements.",
                                    },
                                ].map((card, index) => (
                                    <div key={index} className=" col-12 col-md-6">
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
                    <h2 className="f-g">Why Choose Us for Mobile App Development?</h2>
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
                                    <h2 className="f-h">Tailored App Development</h2>
                                </div>
                                <div className="col-md-6 mt-3">
                                    <p className="f-l">
                                    We create mobile apps designed to meet your business needs, user preferences, and goals.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {[
                    { num: "002", title: "Cross-Platform Compatibility" },
                    { num: "003", title: "User-Centric Design" },
                    { num: "004", title: "Ongoing Updates & Support" },
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
                    <h2 className="text-start g-r mt-2">Crafting Seamless Mobile Experiences</h2>
                    <div className="row text-center">
                        {[
                            { step: "Step 1", title: "Consultation & Planning", desc:"We define your app's objectives and features with a clear understanding of your target users." },
                            { step: "Step 2", title: "UI/UX Design", desc: "Create intuitive and aesthetically pleasing designs that enhance the user experience." },
                            { step: "Step 3", title: "App Development", desc: "Build the app, ensuring it’s scalable, secure, and functional." },
                            { step: "Step 4", title: "Testing & Feedback", desc: "Conduct extensive testing across devices and gather user feedback for improvements." },
                            { step: "Step 5", title: "Launch & Monitoring", desc: "We launch the app and monitor its performance closely." },
                            { step: "Step 6", title: "Ongoing Support & Maintenance", desc: "Regular updates and bug fixes to ensure your app remains fresh and functional." },
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
