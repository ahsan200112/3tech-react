import React from 'react';
import { useTranslation } from 'react-i18next';
import YTImg from "../assets/images/yt.png";

const OurPackages = () => {
    const { t, i18n } = useTranslation();
    const textAlignment = i18n.dir() === "rtl" ? "text-end" : "text-start"; // Check language direction
    return (
        <section className="packages py-5" style={{ backgroundColor: "#181818" }}>
            <div className="container py-5">
                <div className="mb-5">
                    <button className="btn btn-sm  i-idea" style={{ color: "#3B9BE9", width: "110px", border: "1px solid var(--Colors-Border-Border03, #1B1264)" }}>Our Packages</button>
                    <div className="d-flex justify-content-between align-items-center">
                        <h2 className="i-visit mb-0">Flexible Packages For Every Need</h2>
                        <button className="btn-all">View All Packages</button>
                    </div>
                    <p className="i-were">
                        Explore our custom packages offering top-notch solutions at great prices.
                    </p>
                </div>
                <div className="row g-4">
                    <div className="col-md-4">
                        <div className="card text-light shadow border-0" style={{ backgroundColor: "#181818" }}>
                            <div className="card-body">
                                <h5 className="card-title i-has">Business Branding Package</h5>
                                <h3 className="i-value">600 SAR</h3>
                                <p className="card-text i-when">
                                    Build a strong, cohesive brand identity with a package designed to make your business unforgettable.
                                </p>
                                <ul className="list-unstyled">
                                    <li className="custom-list-item d-flex align-items-center text-start mt-3">
                                        <img src={YTImg} alt="Icon" className="me-2" style={{ width: "20px", height: "20px" }} />
                                        <span>SEO Basics</span>
                                    </li>
                                    <li className="custom-list-item d-flex align-items-center text-start mt-3">
                                        <img src={YTImg} alt="Icon" className="me-2" style={{ width: "20px", height: "20px" }} />
                                        <span>Social Media Management</span>
                                    </li>
                                    <li className="custom-list-item d-flex align-items-center text-start mt-3">
                                        <img src={YTImg} alt="Icon" className="me-2" style={{ width: "20px", height: "20px" }} />
                                        <span>Monthly Performance Reports</span>
                                    </li>
                                    <li class="custom-list-item d-flex align-items-center text-start mt-3">
                                        <img src={YTImg} alt="Icon" className="me-2" style={{ width: "20px", height: "20px" }} />
                                        <span>Email Marketing</span>
                                    </li>
                                </ul>
                                <p className="i-world">Support:Email Support</p>
                                <button className="btn-get">Get a Free Consultation</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card text-light shadow border-0" style={{ background: "linear-gradient(106.11deg, rgba(193, 64, 193, 0.1) 7.4%, rgba(127, 148, 230, 0.1) 100%)" }}>
                            <div className="card-body">
                                <h5 className="card-title i-has">Business Branding Package</h5>
                                <h3 className="i-value">600 SAR</h3>
                                <p className="card-text i-when">
                                    Build a strong, cohesive brand identity with a package designed to make your business unforgettable.
                                </p>
                                <ul className="list-unstyled">
                                    <li clasNames="custom-list-item d-flex align-items-center text-start mt-3">
                                        <img src={YTImg} alt="Icon" className="me-2" style={{ width: "20px", height: "20px" }} />
                                        <span>SEO Basics</span>
                                    </li>
                                    <li className="custom-list-item d-flex align-items-center text-start mt-3">
                                        <img src={YTImg} alt="Icon" className="me-2" style={{ width: "20px", height: "20px" }} />
                                        <span>Social Media Management</span>
                                    </li>
                                    <li className="custom-list-item d-flex align-items-center text-start mt-3">
                                        <img src={YTImg} alt="Icon" className="me-2" style={{ width: "20px", height: "20px" }} />
                                        <span>Monthly Performance Reports</span>
                                    </li>
                                    <li className="custom-list-item d-flex align-items-center text-start mt-3">
                                        <img src={YTImg} alt="Icon" className="me-2" style={{ width: "20px", height: "20px" }} />
                                        <span>Email Marketing</span>
                                    </li>
                                </ul>
                                <p className="i-world">Support:Email Support</p>
                                <button className="btn-get">Get a Free Consultation</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card text-light shadow border-0" style={{ backgroundColor: "#181818" }}>
                            <div className="card-body">
                                <h5 className="card-title i-has">Business Branding Package</h5>
                                <h3 className="i-value">600 SAR</h3>
                                <p className="card-text i-when">
                                    Build a strong, cohesive brand identity with a package designed to make your business unforgettable.
                                </p>
                                <ul className="list-unstyled">
                                    <li className="custom-list-item d-flex align-items-center text-start mt-3">
                                        <img src={YTImg} alt="Icon" className="me-2" style={{ width: "20px", height: "20px" }} />
                                        <span>SEO Basics</span>
                                    </li>
                                    <li className="custom-list-item d-flex align-items-center text-start mt-3">
                                        <img src={YTImg} alt="Icon" className="me-2" style={{ width: "20px", height: "20px" }} />
                                        <span>Social Media Management</span>
                                    </li>
                                    <li className="custom-list-item d-flex align-items-center text-start mt-3">
                                        <img src={YTImg} alt="Icon" className="me-2" style={{ width: "20px", height: "20px" }} />
                                        <span>Monthly Performance Reports</span>
                                    </li>
                                    <li className="custom-list-item d-flex align-items-center text-start mt-3">
                                        <img src={YTImg} alt="Icon" className="me-2" style={{ width: "20px", height: "20px" }} />
                                        <span>Email Marketing</span>
                                    </li>
                                </ul>
                                <p className="i-world">Support:Email Support</p>
                                <button className="btn-get">Get a Free Consultation</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurPackages;
