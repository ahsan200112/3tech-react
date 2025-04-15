// src/components/GTMPageViewTracker.js
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const GTMPageViewTracker = () => {
  const location = useLocation();
  const { i18n } = useTranslation();

  useEffect(() => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: 'pageView',
      pagePath: location.pathname,
      pageTitle: document.title,
      language: i18n.language,
      timestamp: new Date().toISOString()
    });
  }, [location, i18n.language]);

  return null; // No UI
};

export default GTMPageViewTracker;
