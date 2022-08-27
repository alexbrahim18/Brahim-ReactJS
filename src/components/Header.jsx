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
        verticalAling : "center",
        heigt: "50px",
        

    }

    return (
        <header style = {estilo} className="row justify-content-between ">
            <div className=" col-1">
                <img  src={logo} style={stiloIMG} className="img-fluid"/>
            </div>
            <h1 className="  col-4 aling-items-center" style={stiloH1} >Cervecería The Northman</h1>
            <div className="col-1"></div>
        </header>
    )
}


export default Header;