import React from "react";
import logo from "./img/logo1.jpg";

const Header = () => {
    
    let estilo = {
        color:"#F1B800",
        backgroundColor: "#333333",
        padding : "20px",
        textAling: "center",
        margin : "0px",
        
       
    }
    
    let stiloIMG = {
        width : "100px",
        

    }

    return (
        <header style = {estilo} className="d-flex justify-content-center">
            <img  src={logo} style={stiloIMG} className="justify-content-start "/>
            <h1 className="text-center" > Cervecería The Northman </h1>
        </header>
    )
}


export default Header;