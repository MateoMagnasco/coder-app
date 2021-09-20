import CartWidget from "../CartWidget/CartWidget";
import { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import "./navBar.css"
import { BrowserRouter, Switch, Route } from 'react-router-dom';


const NavBar = ({products, categories}) => {

  useEffect (()=>{
    console.log("despues del primer renderizado");
    return () => {
      console.log("antes de desmontar el componente")
    }
  },[])

  console.log("el componente va a ser renderizado")
  
  const [] = useState();

    return (
  
      <nav className="navBar"  >
        <div className="container-fluid" >


         <Link to={"/"} className="option">Inicio </Link>
          <NavLink to={"/DetailContainer"} activeClassName="navLink" className="option">
            Detalles 
          </NavLink>
          {categories.map(cat => <NavLink key={cat.id} to={`/product/${cat.name}`} activeClassName="navLink" className="option">{cat.name} </NavLink>)}
       
          <Link to={"/"} className="option">
            Contactanos! 
          </Link>
          <CartWidget/>
 
      </div>
        
     </nav>
  
      

    );
}

export default NavBar;