/* eslint-disable react/no-unescaped-entities */
import "./about.scss";
import maPhoto from "../../assets/images/ma_photo.png";
import {FaLightbulb, FaRocket} from "react-icons/fa";

export default function About() {
  return (
    <section id="about">
      <h2>À propos</h2>
      <img src={maPhoto} alt="Ma profil picture" className="my-picture" />
      <div className="txt">
        développeur web passionné par le web et les technologies associées, je
        suis pleinement engagé dans ma progression professionnelle dans le
        secteur numérique. Attentif et flexible, je sais m'adapter aux exigences
        de mes rôles et responsabilités.
        <div className="container-icons-of-txt">
          <FaRocket className="icons" />
          <FaLightbulb className="icons" />
        </div>
      </div>
    </section>
  );
}
