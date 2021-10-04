import CartWidget from "../CartWidget/CartWidget";
import { useEffect, useState, useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import "./navBar.css"
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Brand from "../Brand/Brand";
import CartContext from "../../context/CartContext/CartContext";




const categories = [{id:1, name:"Eléctricas"},{id:2, name:"Acústicas"},{id:3, name:"Nylon"}]


const NavBar = () => {

const {getQuantity} = useContext(CartContext)


    return (
    <div>
      
      <nav className="navBar"  >
        <div className="container-fluid" >
          {categories.map(cat => <NavLink key={cat.id} to={`/category/${cat.id}`} activeClassName="navLink" className="option">{cat.name} </NavLink>)}
          <Link to={"/"} className="option" id="contacto">
            Contactanos! 
          </Link>
          {getQuantity() !== 0 && <CartWidget/>}
          
    </div>
        
      </nav>
         <Brand/>
    </div>
  
      

    );
}

export default NavBar;