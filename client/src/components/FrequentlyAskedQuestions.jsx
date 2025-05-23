/*import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import useGTMEventTracker from './GoogleTagManager/useGTMEventTracker';  // Import the custom hook
import api from "../api/api";
import { getFAQ } from "../api/apiEndpoints";

const FrequentlyAskedQuestions = () => {
    const { t, i18n } = useTranslation();
    const lang = i18n.language;
    // const textAlignment = i18n.dir() === "rtl" ? "text-end" : "text-start";
    const [faqData, setFaqData] = useState([]);
    const [openIndex, setOpenIndex] = useState(0);
    const trackEvent = useGTMEventTracker();  // Use the custom hook

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);

        // Track the FAQ section click event
        trackEvent('click on Faq question', 'FAQ Interaction', 'Click', `FAQ ${index + 1} ${openIndex === index ? 'Closed' : 'Opened'}`);
    };

    const fetchFaq = async () => {
        try {
            const res = await api.get(getFAQ);
            setFaqData(res.data); // Save the FAQ data returned from the backend
        } catch (error) {
            console.error("Error fetching FAQ data:", error);
        }
    };

    useEffect(() => {
        fetchFaq(); // Fetch FAQs when the component mounts
    }, []);

    return (
        <section id="faq" className="py-5 u-section">
            <div className="container" data-aos="fade-up" data-aos-delay="200">
                <h3 className="u-easy mb-2" style={{ width: "155px" }}>{t("(FAQs)")}</h3>
                <h2 className="v-value">{t("Frequently Asked Questions (FAQs)")}</h2>
                <p className="mb-4 v-auto">
                    {t("Got a question? We've probably heard it before—and we've got the answers to prove it! Dive into our FAQs to solve your mysteries, big or small.")}
                </p>
                <div className="accordion border-0" id="faqAccordion">
                    {faqData.map((faq, index) => (
                        <div key={index} className="mb-2" data-aos="flip-right" data-aos-delay="100">
                            <div
                                className="d-flex justify-content-between align-items-center py-3 px-3 border border-secondary rounded"
                                onClick={() => toggleFAQ(index)}
                                style={{ cursor: "pointer" }}
                            >
                                <span className="v-clean">{faq.question[lang]}</span>
                                {openIndex === index ? <FaAngleUp size={20} style={{ color: "var(--text-primary)" }} /> : <FaAngleDown size={20} style={{ color: "var(--text-primary)" }} />}
                            </div>
                            {openIndex === index && (
                                <div className="px-3 py-2 border border-secondary rounded mt-2" style={{ color: "var(--text-secondary)" }}>
                                    {faq.answer[lang]}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FrequentlyAskedQuestions; */

import React, { useState, useRef } from "react";
import { useTranslation } from "react-i18next";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import useGTMEventTracker from './GoogleTagManager/useGTMEventTracker';  // Import the custom hook
import { CSSTransition } from 'react-transition-group';

const FrequentlyAskedQuestions = () => {
    const { t } = useTranslation();
    // const textAlignment = i18n.dir() === "rtl" ? "text-end" : "text-start";
    const [openIndex, setOpenIndex] = useState(0);
    const trackEvent = useGTMEventTracker();  // Use the custom hook
    const nodeRefs = useRef([]);

    const getNodeRef = (index) => {
        if (!nodeRefs.current[index]) {
            nodeRefs.current[index] = React.createRef();
        }
        return nodeRefs.current[index];
    };

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);

        // Track the FAQ section click event
        trackEvent('click on Faq question', 'FAQ Interaction', 'Click', `FAQ ${index + 1} ${openIndex === index ? 'Closed' : 'Opened'}`);
    };

    const faqData = [
        {
            question: t("What Is Included In The Website Design And Development Package?"),
            answer: t("Our website package includes custom UI/UX design, responsive web development, up to 5 pages, and basic SEO optimization. Additional features can be added based on your needs.")
        },
        {
            question: t("Do I Own The Website After It’s Created?"),
            answer: t("Yes, once the project is complete, you own your website on 3tech")
        },
        {
            question: t("How Long Does It Take To Deliver A Project?"),
            answer: t("Delivery timelines vary based on project complexity. Typically, a project takes 2–6 weeks to complete.")
        },
        {
            question: t("Can I Customize The Packages?"),
            answer: t("Yes, our packages are fully customizable to fit your specific business needs.")
        }
    ];

    return (
        <section id="faq" className="py-5 u-section">
            <div className="container" data-aos="fade-up" data-aos-delay="200">
                <h3 className="u-easy mb-2" style={{ width: "155px" }}>{t("(FAQs)")}</h3>
                <h2 className="v-value">{t("Frequently Asked Questions (FAQs)")}</h2>
                <p className="mb-4 v-auto">
                    {t("Got a question? We've probably heard it before—and we've got the answers to prove it! Dive into our FAQs to solve your mysteries, big or small.")}
                </p>
                <div className="accordion border-0" id="faqAccordion">
                    {faqData.map((faq, index) => (
                        <div key={index} className="mb-2" data-aos="flip-right" data-aos-delay="100">
                            <div
                                className="d-flex flex-column py-3 px-3 border border-secondary rounded"
                                onClick={() => toggleFAQ(index)}
                                style={{ cursor: "pointer" }}
                            >
                                <div className="d-flex justify-content-between align-items-center">
                                <span className="v-clean">{faq.question}</span>
                                {openIndex === index ? <FaAngleUp size={20} color="var(--text-primary)" /> : <FaAngleDown size={20} color="var(--text-primary)" />}
                            </div>
                            {/*
                            {openIndex === index && (
                                <div className="px-3 py-2 border border-secondary rounded mt-2" style={{ color: "var(--text-secondary)" }}>
                                    {faq.answer}
                                </div>
                            )} */}
                            <CSSTransition
                                in={openIndex === index}
                                timeout={800}
                                classNames="fade-slide"
                                unmountOnExit
                                nodeRef={getNodeRef(index)}
                            >
                                <div ref={getNodeRef(index)} className="mt-2" style={{ color: "var(--text-secondary)" }}>
                                    {faq.answer}
                                </div>
                            </CSSTransition>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FrequentlyAskedQuestions;


