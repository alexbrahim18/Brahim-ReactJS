import React from "react";
import logo from "../img/logo.png";
import NavBar from "../NavBar/NavBar";
import "./Header.css";
import {Link} from "react-router-dom"

const Header = () => {
    
    
    return (
        <header className="row justify-content-between header ">
            <div className=" col-1">
            <Link  to={"/"}><img  src={logo}  className="img-fluid" alt="logo"/></Link> 
            </div>
            <h1 className="  col-4 aling-items-center" >Cervecería The Northman</h1>
            <div className="col-1"></div>
            <NavBar/>
        </header>
    )
}


export default Header;