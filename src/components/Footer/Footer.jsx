import React from "react";
import banner from "../../img/Banner_mercadopago.png";
import "./Footer.css"


const Footer = () => {



    return(
        <div>
            <div className="foot__info">
                <div className="row"><h3>Medios de Pago</h3> <img className="col-md-4" src={banner} alt="banner" /></div>
            </div>
            <div className="foot__under row"><p>Copyright Cervecería The Northman - 2022. Todos los derechos reservados.</p></div>
        </div>
    )
}

export default Footer;