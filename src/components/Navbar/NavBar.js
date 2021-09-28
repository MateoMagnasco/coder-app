import CartWidget from "../CartWidget/CartWidget";
import { useEffect, useState, useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import "./navBar.css"
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Brand from "../Brand/Brand";



const categories = [{id:1, name:"Eléctricas"},{id:2, name:"Acústicas"},{id:3, name:"Nylon"}]


const NavBar = () => {



    return (
    <div>
      
      <nav className="navBar"  >
        <div className="container-fluid" >
          {categories.map(cat => <NavLink key={cat.id} to={`/category/${cat.id}`} activeClassName="navLink" className="option">{cat.name} </NavLink>)}
          <Link to={"/"} className="option" id="contacto">
            Contactanos! 
          </Link>
          <CartWidget />
    </div>
        
      </nav>
         <Brand/>
    </div>
  
      

    );
}

export default NavBar;