import { useLocation } from 'react-router-dom';

// Custom hook to track events with page name
const useGTMEventTracker = () => {
  const location = useLocation();  // Get the current page URL

  const trackEvent = (eventCategory, eventAction, eventLabel) => {
    const pageName = location.pathname;

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: 'click',
      eventCategory,
      eventAction,
      eventLabel,
      pageName,  // Adding the page name here
      timestamp: new Date().toISOString()
    });

   // console.log(`${eventCategory} event pushed: ${eventAction} , ${eventLabel} , From Page: ${pageName}`);
  };

  return trackEvent;
};

export default useGTMEventTracker;
