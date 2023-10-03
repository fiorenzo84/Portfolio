/* eslint-disable react/no-unescaped-entities */
import "./notfound.scss";
import {FiSearch} from "react-icons/fi";
import {useNavigate} from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <section className="errorContainer">
      <h1>Erreur 404 ! Page non trouvée</h1>
      <FiSearch className="search" />
      <p className="errorText">
        Désolé, la page que vous cherchez n'existe pas.
      </p>
      <button className="backHome" onClick={() => navigate("/")}>
        Retourner à l'accueil
      </button>
    </section>
  );
}
