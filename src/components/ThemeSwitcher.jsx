import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div id="theme-switch" onClick={toggleTheme}>
      {theme === "light" ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 96 960 960"
          width="24"
        >
          <path d="M480 670q-75 0-127.5-52.5T300 490q0-75 52.5-127.5T480 310q75 0 127.5 52.5T660 490q0 75-52.5 127.5T480 670Zm0-60q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Zm0 386q-20 0-34-14t-14-34v-40q0-20 14-34t34-14q20 0 34 14t14 34v40q0 20-14 34t-34 14Zm212-119-28-28q-14-14-14-34t14-34q14-14 34-14t34 14l28 28q14 14 14 34t-14 34q-14 14-34 14t-34-14Zm-424 0q-14-14-14-34t14-34l28-28q14-14 34-14t34 14q14 14 14 34t-14 34l-28 28q-14 14-34 14t-34-14Zm0-424q-20 0-34-14t-14-34q0-20 14-34l28-28q14-14 34-14t34 14q14 14 14 34t-14 34l-28 28q-14 14-34 14Zm424 0-28-28q-14-14-14-34t14-34q14-14 34-14t34 14l28 28q14 14 14 34t-14 34q-14 14-34 14t-34-14ZM480 276q-20 0-34-14t-14-34v-40q0-20 14-34t34-14q20 0 34 14t14 34v40q0 20-14 34t-34 14Z" />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 96 960 960"
          width="24"
         /* fill="#5f6368"*/
        >
          <path d="M480 996q-133 0-226.5-93.5T160 676q0-121 75.5-211T440 377q9-1 16 2.5t12 10.5q4 6 5 13.5t-2 14.5q-9 26-13.5 54t-4.5 56q0 100 69.5 169T760 766q27 0 55-5t54-14q7-3 14.5-2t13.5 5q6 4 10.5 11t2.5 16q-11 130-102 205T480 996Z" />
        </svg>
      )}
    </div>
  );
};

export default ThemeSwitcher;
