import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";


const NavBar = () =>{
    

  
    
    return (

<nav className="navbar navbar-expand-lg">
  <div className="container-fluid">

    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="#">Inicio</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Productos</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Locales</a>
        </li>
        <li className="nav-item">
          <a className="nav-link ">Nosotros</a>
        </li>
      </ul>
    </div>
  </div>
  <CartWidget/>
</nav>
    )
}



export default NavBar;