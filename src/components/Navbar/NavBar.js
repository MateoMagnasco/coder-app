import CartWidget from "../CartWidget/CartWidget";
import { useEffect, useState, useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import "./navBar.css";
import Brand from "../Brand/Brand";
import CartContext from "../../context/CartContext/CartContext";
import { getCategories } from "../../services/firebase/firebase";

const NavBar = () => {
  const { getQuantity } = useContext(CartContext);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories()
      .then((categories) => {
        setCategories(categories);
      })
      .catch((error) => {
        console.log(error);
      });
    return () => {
      setCategories();
    };
  }, []);

  return (
    <div>
      <nav className="navBar">
        <div className="container-fluid">
          {categories.map((cat) => (
            <NavLink
              key={cat.id}
              to={`/category/${cat.id}`}
              activeClassName="navLink"
              className="option"
            >
              {cat.name}{" "}
            </NavLink>
          ))}
          <Link to={"/"} className="option" id="contacto">
            Contactanos!
          </Link>
          {getQuantity() !== 0 && <CartWidget />}
        </div>
      </nav>
      <Brand />
    </div>
  );
};

export default NavBar;
