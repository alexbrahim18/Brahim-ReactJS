import React from "react";
import tarjeta1 from "../img/visa@2x.png";
import tarjeta2 from "../img/tarjeta-naranja@2x.png";
import tarjeta3 from "../img/rapipago@2x.png";
import tarjeta4 from "../img/mercadopago@2x.png";
import tarjeta5 from "../img/mastercard@2x.png";
import tarjeta6 from "../img/amex@2x.png";
import envio1 from "../img/oca@2x.png";
import envio2 from "../img/correo@2x.png";
import envio3 from "../img/andreani@2x.png";
import "./Footer.css"


const Footer = () => {



    return(
        <div className="mt-5">
            <div className="foot">
                <div className="foot__info row d-flex p-3 ">
                            <h3 className="col-md-3 mx-5">Medios de Pago</h3>
                            <div className="col-md-4">
                                <img className="" src={tarjeta1} alt="banner" width="50px" height="35px"/>
                                <img className="" src={tarjeta2} alt="banner" width="50px" height="35px" />
                                <img className="" src={tarjeta4} alt="banner" width="50px" height="35px" />
                                <img className="" src={tarjeta5} alt="banner" width="50px" height="35px" />
                                <img className="" src={tarjeta6} alt="banner" width="50px" height="35px"/>
                                <img className="" src={tarjeta3} alt="banner" width="50px" height="35px" />
                            </div>
                </div>
                <div className="foot__info row d-flex p-3">
                            <h3 className="col-md-3 mx-5">Medios de envio</h3>
                            <div className="col-md-4">
                                <img className="" src={envio1} alt="banner" width="50px" height="35px"/>
                                <img className="" src={envio2} alt="banner" width="50px" height="35px"/>
                                <img className="" src={envio3} alt="banner" width="50px" height="35px"/>
                            </div>
                </div>
            </div>
            
            <div className="foot__under row"><p>Copyright Cervecería The Northman - 2022. Todos los derechos reservados.</p></div>
        </div>
    )
}

export default Footer;