/*import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import YTImg from "../assets/images/yt.png";
import useGTMEventTracker from './GoogleTagManager/useGTMEventTracker';  // Import the custom hook
import api from '../api/api';
import { getPackagesPricing } from '../api/apiEndpoints';

const OurPackages = () => {
    const { t } = useTranslation();
    const trackEvent = useGTMEventTracker();  // Use the custom hook
    const [packages, setPackages] = useState([]); // State to store package data
    const [loading, setLoading] = useState(true); // State to track loading status
    const [error, setError] = useState(null); // State to track any errors during the API call
   // const [isYearly, setIsYearly] = useState(false);

    // Function to track button click event
    const handleConsultationClick = (packageName) => {
        trackEvent(`click on ${packageName} package button`, 'Package', 'Click', `Get Free Consultation: ${packageName}`);
    };

    useEffect(() => {
        // Fetch data from your API
        const fetchPackages = async () => {
            try {
                const response = await api.get(getPackagesPricing); // Replace with your actual API endpoint
                setPackages(response.data);
                setLoading(false);
            } catch (err) {
                setError('Failed to load packages');
                setLoading(false);
            }
        };

        fetchPackages();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <section className="packages u-section">
            <div className="container py-5" data-aos="fade-down" data-aos-delay="200">
                <div className="py-5">
                    <h3 className="i-idea mb-2" style={{ width: "140px" }}>{t("Our Packages")}</h3>
                    <div className="d-flex align-items-center custom-content-center">
                        <h2 className="i-visit mb-2">{t("Flexible Packages For Every Need")}</h2>
                    </div>
                    <p className="i-were">
                        {t("Explore our custom packages offering top-notch solutions at great prices.")}
                    </p>
                </div>
              /*  <div className="toggle-section">
                    <button
                        className={`toggle-button ${!isYearly ? 'active' : ''}`}
                        onClick={() => setIsYearly(false)}
                    >
                        {t("Pay Monthly")}
                    </button>
                    <button
                        className={`toggle-button ${isYearly ? 'active' : ''}`}
                        onClick={() => setIsYearly(true)}
                    >
                        {t("Pay Yearly")} <span className="save-badge">{t("Save Money")}</span>
                    </button>
                </div> */
/* <div className="row g-4">
     {packages.map((pkg) => (
         <div className="col-md-4" key={pkg.id}>
             <div className="card shadow border-0">
                 <div className="card-body">
                     <h5 className="i-has">{pkg.title}</h5>
                       <h3 className="i-value">{pkg.monthlyPrice} SAR</h3> 
                    /* <h3 className="i-value">
                         <span>
                             {isYearly ? `SAR ${pkg.yearlyPrice}` : `SAR ${pkg.monthlyPrice}`}
                         </span>{' '}
                         {isYearly ? '/ Month' : '/ Month'}
                     </h3> */
/*   <p className="card-text i-when">{pkg.description}</p>
   <ul className="list-unstyled">
       {pkg.features.map((feature, index) => (
           feature.available ? (
               <li className="custom-list-item d-flex align-items-center text-start mt-3" key={index}>
                   <img src={YTImg} alt="Icon" className="me-2 ms-2" style={{ width: "20px", height: "20px" }} />
                   <span>{feature.text}</span>
               </li>
           ) : (
               <li className="custom-list-item d-flex align-items-center text-start mt-3" key={index}>
                   <i className="fas fa-times me-2 ms-2" style={{ color: "red", fontSize: "25px" }}></i>
                   <span>{feature.text}</span>
               </li>
           )
       ))}
   </ul>
   <p className="i-world">{t("Support : Email Support")}</p>
   <button className="btn-get responsive-btn"
       onClick={() => handleConsultationClick(pkg.title)} // Track the event when button is clicked
   >{t("Get a Free Consultation")}</button>
</div>
</div>
</div>
))}
</div>
</div>
</section>
);
};

export default OurPackages; */

import React from 'react';
import { useTranslation } from 'react-i18next';
import YTImg from "../assets/images/yt.png";
import useGTMEventTracker from './GoogleTagManager/useGTMEventTracker';  // Import the custom hook
import { useNavigate } from 'react-router-dom';

const OurPackages = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    // const textAlignment = i18n.dir() === "rtl" ? "text-end" : "text-start"; // Check language direction
    const trackEvent = useGTMEventTracker();  // Use the custom hook

    // Function to track button click event
    const handleConsultationClick = (packageName) => {
        trackEvent(`click on ${packageName} pakage button`, 'Package', 'Click', `Get Free Consultation: ${packageName}`);
        navigate('/packagesform', { state: { packageName } });
    };

    return (
        <section className="packages u-section">
            <div className="container py-5" data-aos="fade-down" data-aos-delay="200">
                <div className="py-5">
                    <h3 className="i-idea mb-2" style={{ width: "130px" }}>{t("Our Packages")}</h3>
                    <div className="d-flex align-items-center custom-content-center">
                        <h2 className="i-visit mb-2">{t("Flexible Packages For Every Need")}</h2>
                    </div>
                    <p className="i-were">
                        {t("Explore our custom packages offering top-notch solutions at great prices.")}
                    </p>
                </div>
                <div className="row g-4 align-items-stretch">
                    <div className="col-md-4">
                        <div className="card shadow border-0 h-100">
                            <div className="card-body d-flex flex-column">
                                <h5 className="i-has">{t("Al Ezz")}</h5>
                                <h3 className="i-value">{t("499 SAR including tax")}</h3>
                                {/* <p className="card-text i-when">
                                    {t("Build a strong, cohesive brand identity with a package designed to make your business unforgettable.")}
                                </p> */}
                                <ul className="list-unstyled">
                                    <li className="custom-list-item d-flex align-items-center text-start mt-3">
                                        <img src={YTImg} alt="Icon" className="me-2 ms-2" style={{ width: "20px", height: "20px" }} />
                                        <span>{t("Website Optimization")}</span>
                                    </li>
                                    <li className="custom-list-item d-flex align-items-center text-start mt-3">
                                        <img src={YTImg} alt="Icon" className="me-2 ms-2" style={{ width: "20px", height: "20px" }} />
                                        <span>{t("6x Graphic designs")}</span>
                                    </li>
                                    <li className="custom-list-item d-flex align-items-center text-start mt-3">
                                        <img src={YTImg} alt="Icon" className="me-2 ms-2" style={{ width: "20px", height: "20px" }} />
                                        <span>{t("6x professional written content ( captions )")}</span>
                                    </li>
                                    <li className="custom-list-item d-flex align-items-center text-start mt-3">
                                        <img src={YTImg} alt="Icon" className="me-2 ms-2" style={{ width: "20px", height: "20px" }} />
                                        <span>{t("1x video editing  ( Montage )")}</span>
                                    </li>
                                </ul>
                                {/* <p className="i-world">{t("Support : Email Support")}</p> */}
                                <button className="btn-get responsive-btn mt-auto"
                                    onClick={() => handleConsultationClick("Al Ezz")} // Track the event when button is clicked
                                >{t("Get a Free Consultation")}</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card shadow border-0 h-100">
                            <div className="card-body d-flex flex-column">
                                <h5 className="i-has">{t("Tamkeen")}</h5>
                                <h3 className="i-value">{t("1499 SAR including tax")}</h3>
                                {/*  <p className="card-text i-when">
                                    {t("Build a strong, cohesive brand identity with a package designed to make your business unforgettable.")}
                                </p> */}
                                <ul className="list-unstyled">
                                    <li className="custom-list-item d-flex align-items-center text-start mt-3">
                                        <img src={YTImg} alt="Icon" className="me-2 ms-2 d-inline" style={{ width: "20px", height: "20px" }} />
                                        <span>{t("Paid Campaigns on two platforms")}</span>
                                    </li>
                                    <li className="custom-list-item d-flex align-items-center text-start mt-3">
                                        <img src={YTImg} alt="Icon" className="me-2 ms-2" style={{ width: "20px", height: "20px" }} />
                                        <span>{t("10x Graphic designs")}</span>
                                    </li>
                                    <li className="custom-list-item d-flex align-items-center text-start mt-3">
                                        <img src={YTImg} alt="Icon" className="me-2 ms-2" style={{ width: "20px", height: "20px" }} />
                                        <span>{t("10x professional written content ( captions )")}</span>
                                    </li>
                                    <li className="custom-list-item d-flex align-items-center text-start mt-3">
                                        <img src={YTImg} alt="Icon" className="me-2 ms-2" style={{ width: "20px", height: "20px" }} />
                                        <span>{t("2x video editing  ( Montage )")}</span>
                                    </li>
                                    <li className="custom-list-item d-flex align-items-center text-start mt-3">
                                        <img src={YTImg} alt="Icon" className="me-2 ms-2" style={{ width: "20px", height: "20px" }} />
                                        <span>{t("Social Media Management")}</span>
                                    </li>
                                </ul>
                                {/*<p className="i-world">{t("Support : Email Support")}</p> */}
                                <button className="btn-get responsive-btn mt-auto"
                                    onClick={() => handleConsultationClick("Tamkeen")} // Track the event when button is clicked
                                >{t("Get a Free Consultation")}</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card shadow border-0 h-100">
                            <div className="card-body d-flex flex-column">
                                <h5 className="i-has">{t("Launch")}</h5>
                                <h3 className="i-value">{t("2699 SAR including tax")}</h3>
                                {/* <p className="card-text i-when">
                                    {t("Build a strong, cohesive brand identity with a package designed to make your business unforgettable.")}
                                </p> */}
                                <ul className="list-unstyled">
                                    <li className="custom-list-item d-flex align-items-center text-start mt-3">
                                        <img src={YTImg} alt="Icon" className="me-2 ms-2" style={{ width: "20px", height: "20px" }} />
                                        <span>{t("Landing page")}</span>
                                    </li>
                                    <li className="custom-list-item d-flex align-items-center text-start mt-3">
                                        <img src={YTImg} alt="Icon" className="me-2 ms-2" style={{ width: "20px", height: "20px" }} />
                                        <span>{t("Free Domain & Hosting one year")}</span>
                                    </li>
                                    <li className="custom-list-item d-flex align-items-center text-start mt-3">
                                        <img src={YTImg} alt="Icon" className="me-2 ms-2" style={{ width: "20px", height: "20px" }} />
                                        <span>{t("15x Graphic designs")}</span>
                                    </li>
                                    <li className="custom-list-item d-flex align-items-center text-start mt-3">
                                        <img src={YTImg} alt="Icon" className="me-2 ms-2" style={{ width: "20px", height: "20px" }} />
                                        <span>{t("15x professional written content ( captions )")}</span>
                                    </li>
                                    <li className="custom-list-item d-flex align-items-center text-start mt-3">
                                        <img src={YTImg} alt="Icon" className="me-2 ms-2" style={{ width: "20px", height: "20px" }} />
                                        <span>{t("5x video editing  ( Montage )")}</span>
                                    </li>
                                    <li className="custom-list-item d-flex align-items-center text-start mt-3">
                                        <img src={YTImg} alt="Icon" className="me-2 ms-2" style={{ width: "20px", height: "20px" }} />
                                        <span>{t("Social Media Management")}</span>
                                    </li>
                                    <li className="custom-list-item d-flex align-items-center text-start mt-3">
                                        <img src={YTImg} alt="Icon" className="me-2 ms-2" style={{ width: "20px", height: "20px" }} />
                                        <span>{t("Paid Campaigns on two platforms")}</span>
                                    </li>
                                </ul>
                                {/*<p className="i-world">{t("Support : Email Support")}</p>*/}
                                <button className="btn-get responsive-btn mt-auto"
                                    onClick={() => handleConsultationClick("Launch")} // Track the event when button is clicked
                                >{t("Get a Free Consultation")}</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurPackages; 
