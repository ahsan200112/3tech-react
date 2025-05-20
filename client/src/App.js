import React, { useEffect } from 'react';
import AppRoutes from './routes';
import './i18n';
import MetaTags from './components/MetaTagsAll';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'antd/dist/reset.css';

const App = () => {

    useEffect(() => {
        const savedLang = localStorage.getItem("i18nextLng") || "en";
        document.documentElement.dir = savedLang === "ar" ? "rtl" : "ltr";
    }, []);

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