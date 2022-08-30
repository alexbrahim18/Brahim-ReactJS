import React from "react";
import logo from "../../img/logo1.jpg";
import "./Header.css";

const Header = () => {
    
    
    return (
        <header className="row justify-content-between header ">
            <div className=" col-1">
                <img  src={logo}  className="img-fluid"/>
            </div>
            <h1 className="  col-4 aling-items-center" >Cervecería The Northman</h1>
            <div className="col-1"></div>
        </header>
    )
}


export default Header;