import { useState } from "react";
import ThemeContext from "./index";

const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  const [english, setEnglish] = useState(false);

  return (
    <ThemeContext.Provider
      value={{
        darkMode,
        setDarkMode,
        english,
        setEnglish,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
