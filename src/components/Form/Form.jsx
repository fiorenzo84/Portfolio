import "./form.scss";

import {useState} from "react";

function Form() {
  const [status, setStatus] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const data = new FormData(form);
    fetch(form.action, {
      method: "POST",
      body: data,
      headers: {
        Accept: "application/json",
      },
    })
      .then(() => {
        setStatus("Message envoyé !");
        setShowPopup(true);
        form.reset();
      })
      .catch(() => {
        setStatus("Oups! Il y a eu un problème.");
        setShowPopup(true);
      });
  }

  return (
    <section id="contact">
      <form
        onSubmit={handleSubmit}
        action="https://formspree.io/f/mnqkvogl"
        method="POST">
        <h2>Contact</h2>

        <label htmlFor="nom">Nom :</label>
        <input type="text" name="nom" id="nom" required />

        <label htmlFor="prenom">Prénom :</label>
        <input type="text" name="prenom" id="prenom" required />

        <label htmlFor="email">Email :</label>
        <input type="email" name="email" id="email" required />

        <label htmlFor="message">Message :</label>
        <textarea name="message" id="message" required />

        <button type="submit" className="submitButton">
          Envoyer
        </button>
      </form>
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <span className="popup-close" onClick={() => setShowPopup(false)}>
              X
            </span>
            <p>{status}</p>
          </div>
        </div>
      )}
    </section>
  );
}

export default Form;
