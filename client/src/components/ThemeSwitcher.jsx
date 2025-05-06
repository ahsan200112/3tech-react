import React from "react";
import { useTheme } from "../context/ThemeContext";
import { FaSun, FaMoon } from "react-icons/fa"; // Icons for theme toggle
import useGTMEventTracker from './GoogleTagManager/useGTMEventTracker';  // Import the custom hook

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();
  const trackEvent = useGTMEventTracker();  // Use the custom hook

  const handleThemeChange = () => {
    toggleTheme();
    // Track the theme change event
    trackEvent('click on theme button',"Theme", "Click", theme === "light" ? "Light to Dark" : "Dark to Light");
  };

  return (
    <button className="theme-switcher-btn theme-icon-size" onClick={handleThemeChange}>
      {theme === "light" ? <FaMoon /> : <FaSun />}
    </button>
  );
};

export default ThemeSwitcher;
