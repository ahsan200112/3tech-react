import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";

const MetaTags = () => {
    const { i18n } = useTranslation();

    // Dynamic Title & Description Based on Language
    const title = i18n.language === "ar" ? "3tech | اطلق متجرك مع منصة ثري تك " : "3tech | اطلق متجرك مع منصة ثري تك ";
    const description =
        i18n.language === "ar"
            ? "!اهلا بك في عالم التجارة الالكترونية مع منصة ثري تك، اطلق متجرك الالكتروني"
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
