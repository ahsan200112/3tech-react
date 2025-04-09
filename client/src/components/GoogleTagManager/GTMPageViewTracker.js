// src/components/GTMPageViewTracker.js
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const GTMPageViewTracker = () => {
  const location = useLocation();

  useEffect(() => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: 'pageView',
      pagePath: location.pathname,
      pageTitle: document.title,
      timestamp: new Date().toISOString()
    });

   // console.log('GTM pageView event pushed:', location.pathname);
  }, [location]);

  return null; // No UI
};

export default GTMPageViewTracker;
