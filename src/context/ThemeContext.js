import { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const storedTheme = localStorage.getItem("theme") || "dark"; // Default dark mode
    const [theme, setTheme] = useState(storedTheme);

    useEffect(() => {
        if (theme === "dark") {
            document.body.classList.add("darkmode");
        } else {
            document.body.classList.remove("darkmode");
        }
        localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
