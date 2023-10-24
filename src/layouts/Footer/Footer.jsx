import "./footer.scss";

import {FaGithub, FaLinkedin} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <p className="footer-text">© 2023 Florent Tuppo - Tous droits réservés</p>
      <div className="container-icons logo-fade-in">
        <a
          href="https://www.linkedin.com/in/florent-tuppo/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visitez mon profil LinkedIn">
          <FaLinkedin size={48} />
        </a>
        <a
          href="https://github.com/fiorenzo84/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visitez mon profil GitHub">
          <FaGithub size={48} />
        </a>
      </div>
    </footer>
  );
}
