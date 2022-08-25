import React from "react";
import logo from "./img/logo1.jpg";

const Header = () => {
    
    let estilo = {
        color:"#F1B800",
        backgroundColor: "#333333",
        padding : "20px",
        textAling: "center",
        margin : "0px",
        fontFamily: "'Aboreto', cursive",
        
       
    }
    
    let stiloIMG = {
        
        

    }
    let stiloH1 = {
        verticalAling : "middle",
        

    }

    return (
        <header style = {estilo} className="row">
            <div className=" col-1">
                <img  src={logo} style={stiloIMG} className="img-fluid"/>
            </div>
            <h1 className=" justify-content-center col-4 "  style={stiloH1}> Cervecería The Northman </h1>
        </header>
    )
}


export default Header;