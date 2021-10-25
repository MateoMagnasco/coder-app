import { useState } from "react/cjs/react.development";
import "./contactForm.css";

const ContactForm = ({
  setFirstName,
  setLastName,
  setEmail,
  setSentInfo,
  confirmOrder,
  clearCart,
  processingOrder,
  productsLength,
}) => {
  const [formFirstName, setFormFirstName] = useState("");
  const [formLastName, setFormLastName] = useState("");
  const [formEmail, setFormEmail] = useState("");
  

  const handleContactForm = (e) => {
    e.preventDefault();
    setFirstName(formFirstName);
    setLastName(formLastName);
    setEmail(formEmail);

    console.log(formFirstName);
  };

  return (
  <div className="ContactContainer">
      <div>Nombre</div>
      <form className="ContactForm" onSubmit={handleContactForm}>
        <label className="LabelContact">
          Nombre:
          <input
            className="InputContact"
            type="text"
            value={formFirstName}
            required
            onChange={({ target }) => setFormFirstName(target.value)}
            placeholder = "Ej: Carlos"
          />
        </label>
        <label className="LabelContact">
          Apellido:
          <input
            className="InputContact"
            type="text"
            required
            value={formLastName}
            onChange={({ target }) => setFormLastName(target.value)}
            placeholder = "Ej: Perez"
          />
        </label>
        <label className="LabelContact">
          Email:
          <input
            className="InputContact"
            type="email"
            value={formEmail}
            onChange={({ target }) => setFormEmail(target.value)}
            required
            placeholder ="ejemplo@gmail.com"
          />
        </label>
        

          <button className='Button' type='submit' onClick={() =>setSentInfo(true)}>Enviar datos</button>
      
      </form>
    </div>
  );
};

export default ContactForm;
