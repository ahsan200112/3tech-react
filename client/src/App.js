import React, { useEffect } from 'react';
import AppRoutes from './routes';
import { useTranslation } from 'react-i18next';
import './i18n';
import { Helmet } from "react-helmet-async";
//import axios from "axios";

const App = () => {
    const { i18n } = useTranslation();

    useEffect(() => {
        document.documentElement.lang = i18n.language;  // Language set karein
        document.documentElement.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';  // Direction update karein
    }, [i18n.language]);  // Jab language change ho to update karein

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
        <>
            <Helmet>
                <title>{title}</title>
                <meta name="description" content={description} />
            </Helmet>

            <AppRoutes />
        </>
    );
};
/*axios.defaults.baseURL = "http://localhost:5000"; // Set the base URL globally */

export default App;