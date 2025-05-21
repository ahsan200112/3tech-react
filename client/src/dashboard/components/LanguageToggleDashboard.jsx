import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import useGTMEventTracker from '../../components/GoogleTagManager/useGTMEventTracker'; // Import the custom hook

const LanguageToggleDashboard = () => {
  const { i18n } = useTranslation();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const trackEvent = useGTMEventTracker();  // Get the event tracker

  // Function to toggle language
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("i18nextLng", lng);
    document.documentElement.dir = lng === "ar" ? "rtl" : "ltr"; // Update page direction
    setDropdownOpen(false); // Close dropdown after selecting language

    // Track the language change event
    trackEvent('click on dashboard language button', "Language", "Change", lng === "ar" ? "English to Arabic" : "Arabic to English");
    window.location.reload();
  };

  useEffect(() => {
    const savedLang = localStorage.getItem("i18nextLng") || "en";
    document.documentElement.dir = savedLang === "ar" ? "rtl" : "ltr";
  }, []);

  return (
    <div className="dashboard-language-color dropdown" style={{ position: "relative", display: "inline-block" }}>
      <button
        className="btn dropdown-toggle language-button-vise"
        id="languageDropdown"
        onClick={() => setDropdownOpen(!dropdownOpen)}
        aria-expanded={dropdownOpen}
        style={{
          width: "auto", // Adjust width based on text
          minWidth: "50px", // Ensures it doesn't get too small
          padding: "5px 10px", // Padding for better spacing
          textAlign: "center",
          border: "1px solid grey",
          borderRadius: "10px"
        }}
      >
        <i className="bi bi-globe"></i> {i18n.language === "ar" ? "عربي" : "En"}
      </button>

      {dropdownOpen && (
        <ul className="dropdown-menu show" aria-labelledby="languageDropdown"
          style={{
            display: "block",
            position: "absolute",
            top: "100%", // Ensures dropdown appears below the button
            left: "0",
            minWidth: "100%", // Makes dropdown same width as button
            textAlign: "center",
          }}
        >
          <li>
            <button
              className="dropdown-item"
              onClick={() => changeLanguage(i18n.language === "en" ? "ar" : "en")}
            >
              {i18n.language === "en" ? "عربي" : "English"}
            </button>
          </li>
        </ul>
      )}
    </div>
  );
};

export default LanguageToggleDashboard;
