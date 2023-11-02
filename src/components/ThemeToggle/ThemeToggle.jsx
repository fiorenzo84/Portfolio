import "./themetoggle.scss";
import {useState, useContext} from "react";
import {FaMoon} from "react-icons/fa";
import {MdSunny} from "react-icons/md";
import ThemeContext from "../../services/ThemeContext";

export default function ThemeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const {theme, setTheme} = useContext(ThemeContext);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className="theme-toggle">
      <div className="toggle-track">
        <FaMoon className="icon dark-icon" />
        <MdSunny className="icon light-icon" />
      </div>
      <div
        className={`toggle-button ${isDarkMode ? "dark-mode" : ""}`}
        onClick={toggleTheme}>
        {isDarkMode ? <MdSunny /> : <FaMoon />}
      </div>
    </div>
  );
}
