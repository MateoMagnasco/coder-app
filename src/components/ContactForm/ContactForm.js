import { useState, useContext } from "react/cjs/react.development";
import "./contactForm.css";
import CartContext from "../../context/CartContext/CartContext";

const ContactForm = ({ setFirstName, setLastName, setEmail, setSentInfo }) => {
  const [formFirstName, setFormFirstName] = useState("");
  const [formLastName, setFormLastName] = useState("");
  const [formEmail, setFormEmail] = useState("");
  const [formSent, setFormSent] = useState(false);

  const hasRequiredFields = () => {
    return formFirstName.length && formLastName.length && formEmail.length;
  };

  const { products } = useContext(CartContext);

  const handleContactForm = (e) => {
    e.preventDefault();
    setFirstName(formFirstName);
    setLastName(formLastName);
    setEmail(formEmail);
    setFormSent(true);

    console.log(formFirstName);
  };

  return (
    <div className="ContactContainer" hidden={!products.length}>
      <div style={{ color: "white" }}>
        Ingrese sus datos para realizar la compra!
      </div>
      <form className="ContactForm" onSubmit={handleContactForm}>
        <label className="LabelContact">
          Nombre:*
          <input
            className="InputContact"
            type="text"
            value={formFirstName}
            required
            onChange={({ target }) => setFormFirstName(target.value)}
            placeholder="Ej: Carlos"
          />
        </label>
        <label className="LabelContact">
          Apellido:*
          <input
            className="InputContact"
            type="text"
            required
            value={formLastName}
            onChange={({ target }) => setFormLastName(target.value)}
            placeholder="Ej: Perez"
          />
        </label>
        <label className="LabelContact">
          Email:*
          <input
            className="InputContact"
            type="email"
            value={formEmail}
            onChange={({ target }) => setFormEmail(target.value)}
            required
            placeholder="ejemplo@gmail.com"
          />
        </label>

        <button
          className="Button"
          type="submit"
          hidden={!hasRequiredFields() || formSent}
          onClick={() => setSentInfo(true)}
        >
          Enviar datos
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
