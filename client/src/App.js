import React, { useEffect } from 'react';
import AppRoutes from './routes';
import { useTranslation } from 'react-i18next';
import './i18n';
import MetaTags from './components/MetaTagsAll';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
    const { i18n } = useTranslation();

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

    console.log(window.dataLayer);

    return (
        <>
            <ToastContainer position="top-right" autoClose={3000} />
            <MetaTags />
            <AppRoutes />
        </>
    );
};
/*axios.defaults.baseURL = "http://localhost:5000"; // Set the base URL globally */

export default App;