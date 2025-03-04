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
    <div className="nav-item dropdown me-3">
      <button
        className="btn dropdown-toggle v-vise"
        id="languageDropdown"
        role="button"
        onClick={() => setDropdownOpen(!dropdownOpen)}
        aria-expanded={dropdownOpen}
      >
        <i className="bi bi-globe"></i> {i18n.language === "ar" ? "عربي" : "En"}
      </button>
      
      {dropdownOpen && (
        <ul className="dropdown-menu show" aria-labelledby="languageDropdown">
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
