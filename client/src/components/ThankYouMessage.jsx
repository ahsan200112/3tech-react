import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CheckIcon from '../assets/images/CheckIconImg.png';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import useGTMEventTracker from './GoogleTagManager/useGTMEventTracker';

const ThankYouMessage = () => {
    const { t } = useTranslation();
    const trackEvent = useGTMEventTracker();

    return (
        <section className='v-section px-5' style={{ color: "var(--text-primary)" }}>
            <div className='container'>
                <div className="d-flex flex-column justify-content-center align-items-center min-vh-100 text-center mx-md-5 px-md-5 py-2">
                    <div className="mb-4">
                        <img src={CheckIcon} alt="CheckIcon" />
                        {/* <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2.5}
                        stroke="blue"
                        className="bi bi-check2-all"
                        width="60"
                        height="60"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4.5 12.75l6 6 9-13.5"
                        />
                    </svg>  */}
                    </div>
                    <h1 className="c-h mb-3">
                        {t("Thank You! We've Received Your Message")}
                    </h1>
                    <p className="c-p mb-3">
                        {t("Thank you for reaching out to 3Tech! Your message has been received and our team is already reviewing it. We typically respond within 5–15 minutes during working hours. We’ll be in touch shortly")}
                    </p>
                    <div className="text-center">
                        <Link to="/" className="text-decoration-none">
                            <button className="btn-well"
                                onClick={() => { trackEvent('click on button','Navigation', 'Click', 'Back to Home') }}
                            >
                                {t("Back to Home")}
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ThankYouMessage;
