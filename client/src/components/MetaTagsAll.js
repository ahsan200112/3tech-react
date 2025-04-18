import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";

const MetaTags = () => {
    const { i18n } = useTranslation();

    // Dynamic Title & Description Based on Language
    const title = i18n.language === "ar" ? "ثري تك" : "3tech";
    const description =
        i18n.language === "ar"
            ? "اطلق متجرك الالكتروني مع منصة ثري تك"
            : "Launch your online store with 3tech platform";

    useEffect(() => {
        document.title = title; // Title update
        const metaDesc = document.querySelector("meta[name='description']");
        if (metaDesc) {
            metaDesc.setAttribute("content", description); // Description update
        }
    }, [title, description]); // Jab bhi title ya description change ho, update karega

    return (
        <Helmet>
            <title>{title}</title>
            <meta name="description" content={description} />
        </Helmet>
    );
};

export default MetaTags;
