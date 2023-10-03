import "./header.scss";
import {useContext} from "react";
import Burger from "../../components/Burger/Burger";
import ThemeToggle from "../../components/ThemeToggle/ThemeToggle";
import ThemeContext from "../../services/ThemeContext";

export default function Header() {
  const {theme} = useContext(ThemeContext);

  return (
    <header className={theme}>
      <ThemeToggle />
      <Burger />
    </header>
  );
}
