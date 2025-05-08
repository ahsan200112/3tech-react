import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import useGTMEventTracker from './GoogleTagManager/useGTMEventTracker';  // Import the custom hook
import api from "../api/api";
import { getFAQ } from "../api/apiEndpoints";

const MarketingSolutionsFaqs = () => {
    const { t, i18n } = useTranslation();
    const lang = i18n.language;
    // const textAlignment = i18n.dir() === "rtl" ? "text-end" : "text-start";
    const [faqData, setFaqData] = useState([]);
    const [openIndex, setOpenIndex] = useState(0);
    const trackEvent = useGTMEventTracker();  // Use the custom hook

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);

        // Track the FAQ section click event
        trackEvent('click on Marketing Solutions Faq question', 'FAQ Interaction', 'Click', `FAQ ${index + 1} ${openIndex === index ? 'Closed' : 'Opened'}`);
    };

    const fetchFaq = async () => {
        try {
            const res = await api.get(getFAQ);
            const allFaqs = res.data;

            // Filter only "creative design" category
            const filteredFaqs = allFaqs.filter(faq => faq.category === "marketing solutions");

            setFaqData(filteredFaqs);
        } catch (error) {
            console.error("Error fetching FAQ data:", error);
        }
    };

    useEffect(() => {
        fetchFaq(); // Fetch FAQs when the component mounts
    }, []);

    return (
        <section id="faq" className="py-5 u-section">
            <div className="container" data-aos="fade-up" data-aos-delay="500">
                <h3 className="u-easy mb-2" style={{ width: "155px" }}>{t("(FAQs)")}</h3>
                <h2 className="v-value">{t("Frequently Asked Questions (FAQs)")}</h2>
                <p className="mb-4 v-auto">
                    {t("Got a question? We've probably heard it before—and we've got the answers to prove it! Dive into our FAQs to solve your mysteries, big or small.")}
                </p>
                <div className="accordion border-0" id="faqAccordion">
                    {faqData.map((faq, index) => (
                        <div key={index} className="mb-2" data-aos="flip-right" data-aos-delay="300">
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

export default MarketingSolutionsFaqs; 