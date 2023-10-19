/* eslint-disable react/no-unescaped-entities */
import "./about.scss";
import maPhoto from "../../assets/images/ma_photo.png";

export default function About() {
  return (
    <section id="about">
      <h2>À propos</h2>
      <img
        src={maPhoto}
        alt="Ma profil picture"
        className="my-picture"
        data-aos="zoom-in"
      />
      <div className="txt">
        <p data-aos="zoom-in">
          Moi, c'est Florent, un développeur web animé par une passion profonde
          pour le monde numérique et ses innovations.
          <br />
          <br /> Mon parcours m'a permis de comprendre les nuances du
          développement web, J'ai eu l'opportunité d'apprendre et d'expérimenter
          avec des technos tel que{" "}
          <span className="highlight">React, Redux, Sass, Node.js</span> ,
          contribuant ainsi à la réalisation d'applications web.
          <br />
          <br />
          Je vous invite à naviguer à travers mon portfolio pour avoir un aperçu
          de ma vision.
          <br /> Si mon univers vous interpelle, je serais ravi de collaborer,
          de partager ou même d'échanger avec vous.
        </p>
        <a
          href="https://drive.google.com/file/d/1yjB7z2VH55cFqGyft6yMrSLZphV55Vx-/view?  usp=sharing"
          target="_blank"
          rel="noopener noreferrer">
          <button className="button">Télécharger cv</button>
        </a>
      </div>
    </section>
  );
}
