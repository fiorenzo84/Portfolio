import "./banner.scss";
import {useRef, useEffect} from "react";
import {FaLinkedin, FaGithub} from "react-icons/fa";
import Typed from "typed.js";
import MonLogo from "../../assets/images/mon_logo.png";

function Banner() {
  const typewriterRef = useRef(null);

  useEffect(() => {
    if (typewriterRef.current) {
      const options = {
        strings: [
          "<h1>Florent Tuppo</h1>",
          "<h1>Florent Tuppo</h1><p>Développeur web React</p>",
        ],
        typeSpeed: 70,
        backSpeed: 70,
        loop: false,
        showCursor: false,
        smartBackspace: true,
      };

      const typed = new Typed(typewriterRef.current, options);

      return () => {
        typed.destroy();
      };
    }
  }, []);

  return (
    <section className="banner">
      <span ref={typewriterRef} className="container-title-subtitle"></span>
      <div className="container-icons logo-fade-in">
        <a
          href="https://www.linkedin.com/in/florent-tuppo/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visitez mon profil LinkedIn">
          <FaLinkedin size={30} className="social"/>
        </a>
        <a
          href="https://github.com/fiorenzo84/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visitez mon profil GitHub">
          <FaGithub size={30} className="social"/>
        </a>
      </div>
      <img src={MonLogo} className="monLogo logo-fade-in" alt="My Logo" />
    </section>
  );
}

export default Banner;
