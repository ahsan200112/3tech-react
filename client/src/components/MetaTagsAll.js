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

    // Public folder ka favicon URL
    const imageUrl = `${window.location.origin}/3techLogo.png`;
    const siteUrl = window.location.origin; // Website ka base URL

    return (
        <Helmet>
            {/* Standard Meta Tags */}
            <title>{title}</title>
            <meta name="description" content={description} />

            {/* Open Graph Meta Tags (For Facebook, LinkedIn, WhatsApp) */}
            <meta property="og:type" content="website" />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={imageUrl} />
            <meta property="og:url" content={siteUrl} />
            <meta property="og:site_name" content={title} />

            {/* Twitter Card Meta Tags (For Twitter) */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={imageUrl} />
        </Helmet>
    );
};

export default MetaTags;
