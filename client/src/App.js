import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import AppRoutes from './routes';
import { useTranslation } from 'react-i18next';
import './i18n';
import MetaTags from './components/MetaTagsAll';
import AOS from 'aos';
import 'aos/dist/aos.css';

const App = () => {
    const { i18n } = useTranslation();
    const location = useLocation();  // Get current location (route) from react-router

    useEffect(() => {
        // Google Tag Manager - track page view on route change
        if (window.dataLayer) {
            window.dataLayer.push({
                event: 'pageview',
                page: location.pathname + location.search,
            });
        }
    }, [location]);  // Trigger whenever the location (route) changes

    useEffect(() => {
        document.documentElement.lang = i18n.language;  // Language set karein
        document.documentElement.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';  // Direction update karein
    }, [i18n.language]);  // Jab language change ho to update karein

    useEffect(() => {
        // 👇 AOS initialization
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

    return (
        <>
            <MetaTags />
            <AppRoutes />
        </>
    );
};
/*axios.defaults.baseURL = "http://localhost:5000"; // Set the base URL globally */

export default App;