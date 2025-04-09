import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import AppRoutes from './routes';
import { useTranslation } from 'react-i18next';
import './i18n';
import MetaTags from './components/MetaTagsAll';
import AOS from 'aos';
import 'aos/dist/aos.css';
import GTMPageViewTracker from './components/GoogleTagManager/GTMPageViewTracker';
import GTMPageReloadTracker from './components/GoogleTagManager/GTMPageReloadTracker';
import GTMScrollDepthTracker from './components/GoogleTagManager/GTMScrollDepthTracker';

const App = () => {
    const { i18n } = useTranslation();
    const location = useLocation();  // Get current location (route) from react-router

    useEffect(() => {
        if (typeof window !== 'undefined') {
            // Initialize dataLayer if it doesn't exist
            window.dataLayer = window.dataLayer || [];

            // Enhanced pageview event
            window.dataLayer.push({
                'event': 'virtualPageView',
                'page': {
                    'url': location.pathname + location.search,
                    'title': document.title,
                    'language': i18n.language
                }
            });

           // console.log('Pageview event pushed:', location.pathname);
        }
    }, [location, i18n.language]);

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
            <GTMPageViewTracker />
            <GTMPageReloadTracker />
            <GTMScrollDepthTracker />
            <AppRoutes />
        </>
    );
};
/*axios.defaults.baseURL = "http://localhost:5000"; // Set the base URL globally */

export default App;