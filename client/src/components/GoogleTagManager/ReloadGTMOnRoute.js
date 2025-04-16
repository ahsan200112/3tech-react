// src/components/GoogleTagManager/ReloadGTMOnRoute.js
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const GTM_ID = 'GTM-TKSNBVWD';

const ReloadGTMOnRoute = () => {
  const location = useLocation();

  useEffect(() => {
    // Remove old GTM script
    const oldScript = document.getElementById('gtm-script');
    if (oldScript) {
      oldScript.remove();
    }

    // Add new GTM script
    const script = document.createElement('script');
    script.id = 'gtm-script';
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`;
    document.head.appendChild(script);

    // Push page_view to dataLayer
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: 'page_view',
      page_path: location.pathname,
      page_location: window.location.href,
      page_title: document.title,
    });

    console.log('✅ GTM script injected on route:', location.pathname);
  }, [location]);

  return null;
};

export default ReloadGTMOnRoute;
