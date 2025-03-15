import React from 'react';
import { useTranslation } from 'react-i18next';
import WinImg from '../assets/images/win.png';
import Calender1Img from '../assets/images/calendar 1.png';
import Search1Img from '../assets/images/search 1.png';
import Container1Img from '../assets/images/Container (1).png';
import Container2Img from '../assets/images/Container (2).png';
import Container3Img from '../assets/images/Container (3).png';
import HtmlImg from '../assets/images/html.png';
import ErImg from '../assets/images/er.png';
import BnImg from '../assets/images/bn.png';

const BlogsSection = () => {
    const { t, i18n } = useTranslation();
    const RTL = i18n.dir() === "rtl"; // Check language direction
    return (
        <section className="v-section">
            <div className="container py-5">
                <button className="btn-sm u-vise">{t("Insights, Tips, and Trends")}</button>
                <div className="mt-3">
                    <h2 className="v-u">{t("Explore The Latest In Digital Solutions")}</h2>
                    <p className="v-p" style={{ maxWidth: "670px", wordBreak: "break-word" }}>{t("Stay updated with expert insights, actionable tips, and industry trends that help you grow your business in the ever-evolving digital world.")}</p>
                </div>
                <div className="row">
                    <div className="col-lg-8 mb-4">
                        <div className="card custom-card">
                            <img src={WinImg} alt="Digital Trends" className="card-img img-fluid responsive-image" />
                            <div className="card-body">
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="d-flex align-items-center">
                                        <img src={Calender1Img} alt="Calendar Icon" style={{
                                            height: "20px", width: "20px", marginRight: RTL ? "0px" : "7px",
                                            marginLeft: RTL ? "7px" : "0px"
                                        }} />
                                        <small className="v-i mb-0">July 28, 2023</small>
                                    </div>
                                    <i className="bi bi-arrow-up-right text-primary-color"></i>
                                </div>

                                <h5 className="v-o mt-3">{t("Best SEO Techniques For Ecommerce")}</h5>
                                <p className="card-text v-p">
                                    {t("Give lady of they such they sure it. Me contained explained my education. Vulgar as hearts by garret. Perceived determine departure explained no forfeited he something")}
                                </p>
                                <p className="v-a">{t("By Avrix")}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="mb-4 custom-padding-h">
                            <div style={{ display: "flex", alignItems: "center" }}>
                                <img src={Search1Img} alt="Post" style={{ width: "15px", height: "15px" }} />
                                <input type="text" className="form-control bg-transparent border-0 custom-placeholder" placeholder="Search"
                                    style={{
                                        flex: "1",
                                        color: "var(--text-secondary)",
                                    }} />
                            </div>
                        </div>
                        <h5 className="v-s">{t("Category List")}</h5>
                        <ul className="category-list ps-0 pe-0">
                            <li className='custom-padding-h'><a href="ecommercesolutions" className="text-decoration-none v-d">{t("E-Commerce Solutions (3)")}</a></li>
                            <li className='custom-padding-h'><a href="mobileapplications" className="text-decoration-none v-d">{t("Mobile Applications (4)")}</a></li>
                            <li className='custom-padding-h'><a href="marketingsolutions" className="text-decoration-none v-d">{t("Marketing Solutions (4)")}</a></li>
                            <li className='custom-padding-h'><a href="creativedesign" className="text-decoration-none v-d">{t("Creative Design (4)")}</a></li>
                            <li className='custom-padding-h'><a href="digitaloptimization" className="text-decoration-none v-d">{t("Digital Optimization (4)")}</a></li>
                        </ul>
                        <h5 className="mt-4 v-f">{t("Recent Post")}</h5>
                        <div className="d-flex align-items-center recent-post mb-3 mt-3 custom-padding-h">
                            <img className="custom-margin-img" src={Container1Img} alt="Post" style={{ width: "70", height: "71" }} />
                            <div className="ms-3 me-3">
                                <small className="v-g">March 21, 2024</small>
                                <p className="mb-0 v-p">{t("Connecting with Key")} <br /> {t("Online Voices")}</p>
                            </div>
                        </div>

                        <div className="d-flex align-items-center recent-post mb-3 custom-padding-h">
                            <img className="custom-margin-img" src={Container2Img} alt="Post" style={{ width: "70", height: "71" }} />
                            <div className="ms-3 me-3">
                                <small className="v-g">March 21, 2024</small>
                                <p className="mb-0 v-p" style={{maxWidth: "120px", wordBreak: "break-word"}}>{t("Creating for an On-the-Go Audience")}</p>
                            </div>
                        </div>

                        <div className="d-flex align-items-center recent-post custom-padding-h">
                            <img className="custom-margin-img" src={Container3Img} alt="Post" style={{ width: "70", height: "71" }} />
                            <div className="ms-3 me-3">
                                <small className="v-g">March 21, 2024</small>
                                <p className="mb-0 v-p" style={{maxWidth: "190px", wordBreak: "break-word"}}>{t("Your Path to Audience Engagement")}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container pb-5">
                <div className="row">
                    <div className="col-lg-8 mb-4">
                        <div className="card custom-card">
                            <img src={HtmlImg} alt="Digital Trends" className="card-img img-fluid responsive-img" />
                            <div className="card-body">
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="d-flex align-items-center">
                                        <img src={Calender1Img} alt="Calendar Icon" style={{ height: "20px", width: "20px", marginRight: "5px" }} />
                                        <small className="v-i mb-0">July 28, 2023</small>
                                    </div>
                                    <i className="bi bi-arrow-up-right text-primary-color"></i>
                                </div>
                                <h5 className="v-o mt-3">{t("Best SEO Techniques For Ecommerce")}</h5>
                                <p className="card-text v-p">
                                    {t("Give lady of they such they sure it. Me contained explained my education. Vulgar as hearts by garret. Perceived determine departure explained no forfeited he something")}
                                </p>
                                <p className="v-a">{t("By Avrix")}</p>
                            </div>
                        </div>
                    </div>
                    <div className="container my-5">
                        <div className="row">
                            <div className="col-lg-8 mb-4">
                                <div className="card custom-card">
                                    <img src={ErImg} alt="Digital Trends" className="card-img img-fluid" />
                                    <div className="card-body">
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="d-flex align-items-center">
                                                <img src={Calender1Img} alt="Calendar Icon" style={{ height: "20px", width: "20px", marginRight: "5px" }} />
                                                <small className="v-i mb-0">July 28, 2023</small>
                                            </div>
                                            <i className="bi bi-arrow-up-right text-primary-color"></i>
                                        </div>

                                        <h5 className="v-o mt-3">{t("Best SEO Techniques For Ecommerce")}</h5>
                                        <p className="card-text v-p">
                                            {t("Give lady of they such they sure it. Me contained explained my education. Vulgar as hearts by garret. Perceived determine departure explained no forfeited he something")}
                                        </p>
                                        <p className="v-a">{t("By Avrix")}</p>

                                    </div>
                                </div>
                            </div>
                            <div className="container my-5">
                                <div className="row">
                                    <div className="col-lg-8 mb-4">
                                        <div className="card custom-card">
                                            <img src={BnImg} alt="Digital Trends" className="card-img img-fluid" />
                                            <div className="card-body">
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <div className="d-flex align-items-center">
                                                        <img src={Calender1Img} alt="Calendar Icon" style={{ height: "20px", width: "20px", marginRight: "5px" }} />
                                                        <small className="v-i mb-0">July 28, 2023</small>
                                                    </div>
                                                    <i className="bi bi-arrow-up-right text-primary-color"></i>
                                                </div>
                                                <h5 className="v-o mt-3">{t("Best SEO Techniques For Ecommerce")}</h5>
                                                <p className="card-text v-p">
                                                    {t("Give lady of they such they sure it. Me contained explained my education. Vulgar as hearts by garret. Perceived determine departure explained no forfeited he something")}
                                                </p>
                                                <p className="v-a">{t("By Avrix")}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BlogsSection;

