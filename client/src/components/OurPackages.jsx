import React from 'react';
import { useTranslation } from 'react-i18next';
import YTImg from "../assets/images/yt.png";

const OurPackages = () => {
    const { t } = useTranslation();
   // const textAlignment = i18n.dir() === "rtl" ? "text-end" : "text-start"; // Check language direction
    return (
        <section className="packages u-section">
            <div className="container py-5">
                <div className="py-5">
                    <button className="btn-sm i-idea mb-2" style={{ width: "140px"}}>{t("Our Packages")}</button>
                    <div className="d-flex align-items-center custom-content-center">
                        <h2 className="i-visit mb-2">{t("Flexible Packages For Every Need")}</h2>
                      {/*  <button className="btn-all custom-responsive-btn">{t("View All Packages")}</button> */}
                    </div>
                    <p className="i-were">
                        {t("Explore our custom packages offering top-notch solutions at great prices.")}
                    </p>
                </div>
                <div className="row g-4">
                    <div className="col-md-4">
                        <div className="card shadow border-0">
                            <div className="card-body">
                                <h5 className="i-has">{t("Business Branding Package")}</h5>
                                <h3 className="i-value">{t("600 SAR")}</h3>
                                <p className="card-text i-when">
                                    {t("Build a strong, cohesive brand identity with a package designed to make your business unforgettable.")}
                                </p>
                                <ul className="list-unstyled">
                                    <li className="custom-list-item d-flex align-items-center text-start mt-3">
                                        <img src={YTImg} alt="Icon" className="me-2 ms-2" style={{ width: "20px", height: "20px" }} />
                                        <span>{t("SEO Basics")}</span>
                                    </li>
                                    <li className="custom-list-item d-flex align-items-center text-start mt-3">
                                        <img src={YTImg} alt="Icon" className="me-2 ms-2" style={{ width: "20px", height: "20px" }} />
                                        <span>{t("Social Media Management")}</span>
                                    </li>
                                    <li className="custom-list-item d-flex align-items-center text-start mt-3">
                                        <img src={YTImg} alt="Icon" className="me-2 ms-2" style={{ width: "20px", height: "20px" }} />
                                        <span>{t("Monthly Performance Reports")}</span>
                                    </li>
                                    <li className="custom-list-item d-flex align-items-center text-start mt-3">
                                        <img src={YTImg} alt="Icon" className="me-2 ms-2" style={{ width: "20px", height: "20px" }} />
                                        <span>{t("Email Marketing")}</span>
                                    </li>
                                </ul>
                                <p className="i-world">{t("Support : Email Support")}</p>
                                <button className="btn-get responsive-btn">{t("Get a Free Consultation")}</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card shadow border-0">
                            <div className="card-body">
                                <h5 className="i-has">{t("Business Branding Package")}</h5>
                                <h3 className="i-value">{t("600 SAR")}</h3>
                                <p className="card-text i-when">
                                    {t("Build a strong, cohesive brand identity with a package designed to make your business unforgettable.")}
                                </p>
                                <ul className="list-unstyled">
                                    <li className="custom-list-item d-flex align-items-center text-start mt-3">
                                        <img src={YTImg} alt="Icon" className="me-2 ms-2 d-inline" style={{ width: "20px", height: "20px" }} />
                                        <span>{t("SEO Basics")}</span>
                                    </li>
                                    <li className="custom-list-item d-flex align-items-center text-start mt-3">
                                        <img src={YTImg} alt="Icon" className="me-2 ms-2" style={{ width: "20px", height: "20px" }} />
                                        <span>{t("Social Media Management")}</span>
                                    </li>
                                    <li className="custom-list-item d-flex align-items-center text-start mt-3">
                                        <img src={YTImg} alt="Icon" className="me-2 ms-2" style={{ width: "20px", height: "20px" }} />
                                        <span>{t("Monthly Performance Reports")}</span>
                                    </li>
                                    <li className="custom-list-item d-flex align-items-center text-start mt-3">
                                        <img src={YTImg} alt="Icon" className="me-2 ms-2" style={{ width: "20px", height: "20px" }} />
                                        <span>{t("Email Marketing")}</span>
                                    </li>
                                </ul>
                                <p className="i-world">{t("Support : Email Support")}</p>
                                <button className="btn-get responsive-btn">{t("Get a Free Consultation")}</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card shadow border-0">
                            <div className="card-body">
                                <h5 className="i-has">{t("Business Branding Package")}</h5>
                                <h3 className="i-value">{t("600 SAR")}</h3>
                                <p className="card-text i-when">
                                    {t("Build a strong, cohesive brand identity with a package designed to make your business unforgettable.")}
                                </p>
                                <ul className="list-unstyled">
                                    <li className="custom-list-item d-flex align-items-center text-start mt-3">
                                        <img src={YTImg} alt="Icon" className="me-2 ms-2" style={{ width: "20px", height: "20px" }} />
                                        <span>{t("SEO Basics")}</span>
                                    </li>
                                    <li className="custom-list-item d-flex align-items-center text-start mt-3">
                                        <img src={YTImg} alt="Icon" className="me-2 ms-2" style={{ width: "20px", height: "20px" }} />
                                        <span>{t("Social Media Management")}</span>
                                    </li>
                                    <li className="custom-list-item d-flex align-items-center text-start mt-3">
                                        <img src={YTImg} alt="Icon" className="me-2 ms-2" style={{ width: "20px", height: "20px" }} />
                                        <span>{t("Monthly Performance Reports")}</span>
                                    </li>
                                    <li className="custom-list-item d-flex align-items-center text-start mt-3">
                                        <img src={YTImg} alt="Icon" className="me-2 ms-2" style={{ width: "20px", height: "20px" }} />
                                        <span>{t("Email Marketing")}</span>
                                    </li>
                                </ul>
                                <p className="i-world">{t("Support : Email Support")}</p>
                                <button className="btn-get responsive-btn">{t("Get a Free Consultation")}</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurPackages;
