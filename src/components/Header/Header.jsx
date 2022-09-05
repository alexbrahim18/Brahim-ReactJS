import React from "react";
import logo from "../../img/logo1.jpg";
import NavBar from "../NavBar/NavBar";
import "./Header.css";

const Header = () => {
    
    
    return (
        <header className="row justify-content-between header ">
            <div className=" col-1">
                <img  src={logo}  className="img-fluid"/>
            </div>
            <h1 className="  col-4 aling-items-center" >Cervecería The Northman</h1>
            <div className="col-1"></div>
            <NavBar/>
        </header>
    )
}


export default Header;