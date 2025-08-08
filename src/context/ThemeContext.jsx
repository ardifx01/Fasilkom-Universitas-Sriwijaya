import React, { createContext, useState, useEffect } from "react";

// Create Context: This creates a Context object.
export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "dark";
  });

  /**
   * Toggles the current theme between "dark" and "light".
   * Updates the theme state and persists the new theme to localStorage.
   */
  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  // useEffect hook to synchronize the theme state with localStorage.
  // Whenever the 'theme' state changes, it updates the "theme" item in localStorage.
  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]); // Dependency array ensures this effect runs only when 'theme' changes

  return (
    // ThemeContext.Provider makes the 'theme' and 'toggleTheme' values available
    // to any descendant component that consumes the ThemeContext.
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider; 