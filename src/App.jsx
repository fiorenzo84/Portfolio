import {BrowserRouter as Router} from "react-router-dom";
import "./sass/main.scss";
import "./App.css";
import Home from "./pages//Home/Home";
import ThemeContext from "./services/ThemeContext";
import {useState, useEffect} from "react";

export default function App() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const body = document.body;
    if (theme === "light") {
      body.classList.add("dark");
      body.classList.remove("light");
    } else {
      body.classList.add("light");
      body.classList.remove("dark");
    }
  }, [theme]);

  return (
    <div>
      <ThemeContext.Provider value={{theme, setTheme}}>
        <Router>
          <Home />
        </Router>
      </ThemeContext.Provider>
    </div>
  );
}
