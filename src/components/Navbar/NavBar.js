import { NavLink, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import CartWidget from "../CartWidget/CartWidget";
import "./navBar.css";
import Brand from "../Brand/Brand";

import { getCategories } from "../../services/firebase/firebase";

const NavBar = () => {
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
          <CartWidget />
        </div>
      </nav>
      <Brand />
    </div>
  );
};

export default NavBar;
