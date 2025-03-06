import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

const FrequentlyAskedQuestions = () => {
    const { t, i18n } = useTranslation();
    const textAlignment = i18n.dir() === "rtl" ? "text-end" : "text-start";
    const [openIndex, setOpenIndex] = useState(0);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const faqData = [
        {
            question: "What Is Included In The Website Design And Development Package?",
            answer: "Our website package includes custom UI/UX design, responsive web development, up to 5 pages, and basic SEO optimization. Additional features can be added based on your needs."
        },
        {
            question: "Do I Own The Website After It’s Created?",
            answer: "Yes, once the project is complete, you fully own your website, including all its assets and code."
        },
        {
            question: "How Long Does It Take To Deliver A Project?",
            answer: "Delivery timelines vary based on project complexity. Typically, a project takes 2–6 weeks to complete."
        },
        {
            question: "Can I Customize The Packages?",
            answer: "Yes, our packages are fully customizable to fit your specific business needs."
        }
    ];

    return (
        <section id="faq" className="py-5 text-white" style={{ backgroundColor: "#181818" }}>
            <div className="container">
                <span className="badge text-primary border border-primary px-3 py-1 mb-2">(FAQs)</span>
                <h2 className="fw-bold">Frequently Asked Questions (FAQs)</h2>
                <p className="mb-4">
                    Got a question? We've probably heard it before—and we've got the answers to prove it! Dive into our FAQs to
                    solve your mysteries, big or small.
                </p>
                <div className="accordion border-0" id="faqAccordion">
                    {faqData.map((faq, index) => (
                        <div key={index} className="mb-2">
                            <div
                                className="d-flex justify-content-between align-items-center py-3 px-3 border border-secondary rounded"
                                onClick={() => toggleFAQ(index)}
                                style={{ cursor: "pointer" }}
                            >
                                <span className="fw-bold">{faq.question}</span>
                                {openIndex === index ? <FaAngleUp size={20} /> : <FaAngleDown size={20} />}
                            </div>
                            {openIndex === index && (
                                <div className="px-3 py-2 border border-secondary rounded mt-2" style={{ color: "#CFCECE" }}>
                                    {faq.answer}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FrequentlyAskedQuestions;
