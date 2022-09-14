import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import {Link} from "react-router-dom";
import "./NavBar.css";


const NavBar = () =>{
    

  
    
    return (

<nav className="navbar navbar-expand-lg">
  <div className="container-fluid">

    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link  className="nav-link" aria-current="page" to={"/"}>Inicio</Link>
        </li>
        <li className="nav-item">
          <Link  className="nav-link" to={"/categoria/cervezas"}>Productos</Link>
        </li>
        <li className="nav-item">
          <Link  className="nav-link" to={"/categoria/promociones"}>Promociones</Link>
        </li>
      </ul>
    </div>
  </div>
  <CartWidget/>
</nav>
    )
}



export default NavBar;