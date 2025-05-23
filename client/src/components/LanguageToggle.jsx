import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import useGTMEventTracker from './GoogleTagManager/useGTMEventTracker'; // Import the custom hook

const LanguageToggle = () => {
  const { i18n } = useTranslation();
  //const [dropdownOpen, setDropdownOpen] = useState(false);
  const trackEvent = useGTMEventTracker();  // Get the event tracker

  // Function to toggle language
  /* const changeLanguage = (lng) => {
     i18n.changeLanguage(lng);
     localStorage.setItem("i18nextLng", lng);
     document.documentElement.dir = lng === "ar" ? "rtl" : "ltr"; // Update page direction
     setDropdownOpen(false); // Close dropdown after selecting language
 
     // Track the language change event
     trackEvent('click on language button', "Language", "Change", lng === "ar" ? "English to Arabic" : "Arabic to English");
     window.location.reload();
   }; */

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "ar" : "en";
    i18n.changeLanguage(newLang);
    localStorage.setItem("i18nextLng", newLang);
    document.documentElement.dir = newLang === "ar" ? "rtl" : "ltr";

    trackEvent('click on language button', "Language", "Change", newLang === "ar" ? "English to Arabic" : "Arabic to English");
    window.location.reload(); // Optional, only if needed
  };

  useEffect(() => {
    const savedLang = localStorage.getItem("i18nextLng") || "en";
    document.documentElement.dir = savedLang === "ar" ? "rtl" : "ltr";
  }, []);

  return (
    /* <div className="nav-item dropdown" style={{ position: "relative", display: "inline-block" }}>
      <button
        className="btn dropdown-toggle v-vise language-toggle-btn"
        id="languageDropdown"
        onClick={() => setDropdownOpen(!dropdownOpen)}
        aria-expanded={dropdownOpen}
        style={{
          width: "auto", // Adjust width based on text
          minWidth: "50px", // Ensures it doesn't get too small
          padding: "5px 10px", // Padding for better spacing
          textAlign: "center",
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
            minWidth: "80%", // Makes dropdown same width as button
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
    </div> */
    <div className="nav-item" style={{ position: "relative", display: "inline-block" }}>
      <button
        className="btn language-toggle-btn v-vise mx-2"
        onClick={toggleLanguage}
        style={{
          width: "auto",
          minWidth: "50px",
          padding: "6px 10px",
          textAlign: "center",
          border: "1px solid",
          borderRadius: "10px"
        }}
      >
        {/*
     {i18n.language === "ar" ? "En" : "عربي"} <i className="fa fa-language"></i>
     */}
        {i18n.language === "ar" ? (
          <>
            En <span className="flag-icon flag-icon-us"></span>
          </>
        ) : (
          <>
            <span className="flag-icon flag-icon-sa"></span> عربي 
          </>
        )}
      </button>
    </div>
  );
};

export default LanguageToggle;
