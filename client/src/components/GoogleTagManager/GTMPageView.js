import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const GTMPageView = () => {
    const location = useLocation();
    const { i18n } = useTranslation();

    useEffect(() => {
        const path = location.pathname + location.search;

        // Ye actual "History Change" event simulate karega
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
            event: 'gtm.historyChange',  // 👈 GTM ko force kar rahe hain naya summary block banane ko
            page_path: path,
            page_location: window.location.href,
            page_title: document.title,
            language: i18n.language,
        });

    }, [location, i18n.language]);

    return null; // No UI
};

export default GTMPageView;
