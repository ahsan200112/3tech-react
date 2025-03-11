import React from 'react';
import { useTranslation } from 'react-i18next';
import PinImg from "../assets/images/pin.png";

const OurWorkingProcess = () => {
    const { t } = useTranslation();
    // const textAlignment = i18n.dir() === "rtl" ? "text-end" : "text-start"; // Check language direction
    return (
        <section style={{ backgroundColor: "var(--Colors-Text-Base-Black, #212121)" }}>
            <div className="container py-5">
                <button className="btn btn-sm o-e" style={{ color: "#3B9BE9", border: "1px solid var(--Colors-Border-Border03, #1B1264)" }}>{t("Our Working Process")}</button>
                <h2 className="g-r mt-2">{t("Our Process: Turning Ideas Into Digital Reality")}</h2>

                <div className="row text-center">
                    <div className="col-md-3 mb-4">
                        <div className="step ">
                            <div className="custom-row">
                                <button className="btn btn-sm n-j text-white" style={{ border: "1px solid #989898", borderRadius: "15px" }}>{t("Step 1")}</button>
                                <img src={PinImg} alt="Company Logo" className="img-fluid" />
                            </div>
                            <h5 className="h-w">{t("Discovery & Strategy")}</h5>
                            <p className="h-u">{t("We start by understanding your goals and audience, creating a tailored strategy for success.")}</p>
                        </div>
                    </div>
                    <div className="col-md-3 mb-4">
                        <div className="step ">
                            <div className="custom-row">
                                <button className="btn btn-sm n-j text-white" style={{ border: "1px solid #989898", borderRadius: "15px" }}>{t("Step 2")}</button>
                                <img src={PinImg} alt="Company Logo" className="img-fluid" />
                            </div>
                            <h5 className="h-w">{t("Creative Brief")}</h5>
                            <p className="h-u">{t("We align with you on the vision, design preferences, and core objectives, ensuring we're on the same page.")}</p>
                        </div>
                    </div>
                    <div className="col-md-3 mb-4">
                        <div className="step">
                            <div className="custom-row">
                                <button className="btn btn-sm n-j text-white" style={{ border: "1px solid #989898", borderRadius: "15px" }}>{t("Step 3")}</button>
                                <img src={PinImg} alt="Company Logo" className="img-fluid" />
                            </div>
                            <h5 className="h-w">{t("Conceptual Design")}</h5>
                            <p className="h-u">{t("Our design team creates wireframes and prototypes, bringing your ideas to life visually.")}</p>
                        </div>
                    </div>
                    <div className="col-md-3 mb-4">
                        <div className="step">
                            <div className="custom-row">
                                <button className="btn btn-sm n-j text-white" style={{ border: "1px solid #989898", borderRadius: "15px" }}>{t("Step 4")}</button>
                                <img src={PinImg} alt="Company Logo" className="img-fluid" />
                            </div>
                            <h5 className="h-w">{t("Design Refinement")}</h5>
                            <p className="h-u">{t("We gather feedback and refine the design to ensure it aligns with your brand and user expectations.")}</p>
                        </div>
                    </div>
                </div>
                <div className="row text-center">
                    <div className="col-md-3 mb-4">
                        <div className="step">
                            <div className="custom-row">
                                <button className="step-start btn btn-sm n-j text-white" style={{ border: "1px solid #989898", borderRadius: "15px" }}>{t("Step 5")}</button>
                                <img src={PinImg} alt="Company Logo" className="img-fluid" />
                            </div>
                            <h5 className="h-w">{t("Development & Build")}</h5>
                            <p className="h-u">{t("We turn the design into a fully functional website or app with cutting-edge technology.")}</p>
                        </div>
                    </div>
                    <div className="col-md-3 mb-4">
                        <div className="step">
                            <div className="custom-row">
                                <button class="step-number btn btn-sm n-j text-white" style={{ border: "1px solid #989898", borderRadius: "15px" }}>{t("Step 6")}</button>
                                <img src={PinImg} alt="Company Logo" className="img-fluid" />
                            </div>
                            <h5 className="h-w">{t("Testing & Optimization")}</h5>
                            <p className="h-u">{t("We rigorously test for bugs, optimize performance, and ensure a seamless user experience.")}</p>
                        </div>
                    </div>
                    <div className="col-md-3 mb-4">
                        <div className="step">
                            <div className="custom-row">
                                <button className="step-number btn btn-sm n-j text-white" style={{ border: "1px solid #989898", borderRadius: "15px" }}>{t("Step 7")}</button>
                                <img src={PinImg} alt="Company Logo" className="img-fluid" />
                            </div>
                            <h5 className="h-w">{t("Launch & Monitor")}</h5>
                            <p className="h-u">{t("Once everything's ready, we launch and continuously monitor performance for adjustments.")}</p>
                        </div>
                    </div>
                    <div className="col-md-3 mb-4">
                        <div className="step">
                            <div className="custom-row">
                                <button className="btn btn-sm n-j text-white" style={{ border: "1px solid #989898", borderRadius: "15px" }}>{t("Step 8")}</button>
                                <img src={PinImg} alt="Company Logo" className="img-fluid" />
                            </div>
                            <h5 className="h-w">{t("Ongoing Support & Growth")}</h5>
                            <p className="h-u">{t("We offer continued support and help your project grow with scalable solutions and updates.")}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurWorkingProcess;


