import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";


const NavBar = () =>{
    

  
    
    return (

<nav class="navbar navbar-expand-lg">
  <div class="container-fluid">

    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="#">Inicio</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Productos</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Locales</a>
        </li>
        <li class="nav-item">
          <a class="nav-link ">Nosotros</a>
        </li>
      </ul>
    </div>
  </div>
  <CartWidget/>
</nav>
    )
}



export default NavBar;