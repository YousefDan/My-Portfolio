import { useContext } from "react";
import ThemeContext from "../../context";
import "./toggle.css";

const Toggle = () => {
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  return (
    <div className="toggle">
      {/* <img src="/images/sun.png" alt="" className="toggle-icon" /> */}
      <div className="toggle-icon moon"></div>
      <div className="toggle-icon sun"></div>
      {/* <img src="/images/moon.png" alt="" className="toggle-icon" /> */}
      <div
        style={{ left: darkMode ? "0" : "25px" }}
        onClick={() => setDarkMode(!darkMode)}
        className="toggle-btn"
      ></div>
    </div>
  );
};

export default Toggle;
