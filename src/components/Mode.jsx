// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
// import { useState } from "react";
// const Mode = () => {
//   const [icon, setIcon] = useState(false);
//   if (icon) {
//     document.body.classList.add("bg-white");
//     document.body.classList.remove("bg-n-8");
//   } else {
//     document.body.classList.add("bg-n-8");
//     document.body.classList.remove("bg-white");
//   }
//   return (
//     <div
//       onClick={() => setIcon((prev) => !prev)}
//       className="fixed w-[3rem] h-[3rem] left-3 top-20 p-1 bg-n-6 rounded-lg flex justify-center items-center cursor-pointer"
//     >
//       <FontAwesomeIcon
//         icon={icon === false ? faSun : faMoon}
//         className={`${icon === true ? "" : "animate-spin-slowly"}`}
//       />
//     </div>
//   );
// };

// export default Mode;

import React, { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
    } else {
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.documentElement.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);