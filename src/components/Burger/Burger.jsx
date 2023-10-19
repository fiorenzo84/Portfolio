import {FaBars, FaTimes} from "react-icons/fa";
import {useState} from "react";
import "./burger.scss";

export default function Burger() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button
        className="burger-menu"
        onClick={toggleMenu}
        aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      <nav className={isOpen ? "open" : ""}>
        <ul>
          <li>
            <a href="#about" onClick={toggleMenu}>
              À propos
            </a>
          </li>
          <li>
            <a href="#skills" onClick={toggleMenu}>
              Skills
            </a>
          </li>
          <li>
            <a href="#projects" onClick={toggleMenu}>
              Projets
            </a>
          </li>
          <li>
            <a href="#contact" onClick={toggleMenu}>
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
