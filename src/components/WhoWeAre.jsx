import React from 'react';
import { useTranslation } from 'react-i18next';
import WhoWeAreImg from '../assets/images/WhoWeAre.png';

const WhoWeAre = () => {
    const { t, i18n } = useTranslation();
    const textAlignment = i18n.dir() === "rtl" ? "text-end" : "text-start"; // Check language direction
    return (
        <section className="u-section">
            <div className="container py-5">
                <div className="row align-items-center">
                    <button className="btn-sm u-vise mb-3" style={{ width: "130px"}}>{t("Who We Are")}</button>
                    <h1 className={`u-visit ${textAlignment}`}>{t("Connecting Your Business With The World!")}</h1>
                    <div className="col-md-6 ">
                        <h1 className={`u-were ${textAlignment}`}>{t("About Us")}</h1>
                        <p className={`u-here ${textAlignment}`}>
                            {t("In a world where creativity meets technology, 3Tech delivers exceptional experiences in building online stores, apps, and digital marketing. We’re here to tell your story and connect you with your audience through unique and impactful approaches. Every project with us becomes a memorable journey to success.")}
                        </p>
                        <button className="btn-our w-100">{t("Discover Our Story")}</button>
                        <div className="row text-white mt-3">
                            <div className="col-md-4" style={{
                                [document.dir === "rtl" ? "borderLeft" : "borderRight"]: "1px solid",
                            }}>
                                <h2 className="u-how">7+</h2>
                                <p className="u-all">{t("Years in Business")}</p>
                            </div>
                            <div className="col-md-4" style={{
                                [document.dir === "rtl" ? "borderLeft" : "borderRight"]: "1px solid",
                            }}>
                                <h2 className="u-value">+150</h2>
                                <p className="u-all">{t("Successful Projects")}</p>
                            </div>
                            <div className="col-md-4">
                                <h2 className="u-home">99%</h2>
                                <p className="u-all">{t("Happy Clients")}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 u-worldtext-end d-flex align-items-center gap-2">
                       <img src={WhoWeAreImg} alt="Who We Are" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhoWeAre;