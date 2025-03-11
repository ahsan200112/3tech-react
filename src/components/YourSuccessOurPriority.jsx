import React from 'react';
import { useTranslation } from 'react-i18next';
import YTImg from "../assets/images/yt.png";
import BlueImg from "../assets/images/blue.png";

const YourSuccessOurPriority = () => {
    const { t } = useTranslation();
   // const textAlignment = i18n.dir() === "rtl" ? "text-end" : "text-start"; // Check language direction
    return (
        <section className="v-section">
            <div className="container py-5">
                <div className="row">
                    <div className="col-md-6 d-flex flex-column">
                        <button className="btn btn-sm u-easy" style={{ width: "180px", height: "30px", color: "#3B9BE9" }}>{t("Your Success, Our Priority")}</button>
                        <h2 className="u-vell">{t("Why Partner With 3Tech?")}</h2>
                        <p className="v-wel">
                            {t("3Tech doesn't just deliver solutions; we create stories. With us, you own your project without recurring fees and gain access to a complete suite of services to transform your ideas into reality.")}
                        </p>
                        <ul className="list-unstyled">
                            <li className="custom-list-item d-flex align-items-center text-start mt-3">
                                <img src={YTImg} alt="Icon" className="me-2" style={{ width: "20px", height: "20px" }} />
                                <span>{t("Custom-Tailored Solutions")}</span>
                            </li>
                            <li className="custom-list-item d-flex align-items-center text-start mt-3">
                                <img src={YTImg} alt="Icon" className="me-2" style={{ width: "20px", height: "20px" }} />
                                <span>{t("Custom-Tailored Solutions")}</span>
                            </li>
                            <li className="custom-list-item d-flex align-items-center text-start mt-3">
                                <img src={YTImg} alt="Icon" className="me-2" style={{ width: "20px", height: "20px" }} />
                                <span>{t("Custom-Tailored Solutions")}</span>
                            </li>
                            <li className="custom-list-item d-flex align-items-center text-start mt-3">
                                <img src={YTImg} alt="Icon" className="me-2" style={{ width: "20px", height: "20px" }} />
                                <span>{t("Custom-Tailored Solutions")}</span>
                            </li>
                            <li className="custom-list-item d-flex align-items-center text-start mt-3">
                                <img src={YTImg} alt="Icon" className="me-2" style={{ width: "20px", height: "20px" }} />
                                <span>{t("Custom-Tailored Solutions")}</span>
                            </li>
                        </ul>
                        <button className="btn-contact">{t("Contact Us")}</button>
                    </div>
                    <div className="col-md-6">
                        <div className="d-flex justify-content-between align-items-center">
                            <h5 className="v-well" style={{color: "#FFFFFF", margin: "0"}}>{t("Our Customers' Reviews")}</h5>
                            <p className="v-fill text-end">
                                <i className="bi bi-star-fill text-white"></i> 4.8
                            </p>
                        </div>
                        <div className="card text-white bg-dark">
                            <img src={BlueImg} className="card-img img-fluid w-100" alt="Customer Reviews" />
                        </div>
                        <div className="d-flex align-items-start">
                            <span className="highlighted-number me-3">120+</span>

                            <div className="regular-text mt-2">
                                <span>{t("Customers in over 5 countries")}</span><br />
                                <span>{t("growing their businesses with 3Tech")}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default YourSuccessOurPriority;