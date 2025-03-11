import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const LanguageToggle = () => {
  const { i18n } = useTranslation();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Function to toggle language
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    document.documentElement.dir = lng === "ar" ? "rtl" : "ltr"; // Update page direction
    setDropdownOpen(false); // Close dropdown after selecting language
  };

  return (
    <div className="nav-item dropdown me-3" style={{ position: "relative", display: "inline-block" }}>
      <button
        className="btn dropdown-toggle v-vise"
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

export default LanguageToggle;
