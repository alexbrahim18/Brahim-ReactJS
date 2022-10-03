import React from "react";
import fondo from "../img/fondo.webp";
import {Link} from "react-router-dom";
import cervezas from "../img/cervezas.webp";
import promos from "../img/promos.webp";
import contacto from "../img/contacto.webp";
import "./Home.css";


const Home = () =>{



    return(
        <div>
            <img src={fondo} alt="fondo" className="mb-5" />
            <div className="row d-flex">
                <Link to="/tienda" className="col-4 "><img src={cervezas} alt="cervezas"className="home__img" /><p className="fs-1 text-center home__texto">Tienda</p></Link>
                <Link to={"/categoria/promociones"} className="col-4"><img src={promos} alt="promo" className="home__img"/><p className="fs-1 text-center home__texto">Promociones</p></Link>
                <Link to="/contacto" className="col-4"><img src={contacto} alt="contacto"className="home__img" /><p className="fs-1 text-center home__texto">Contacto</p></Link>
            </div>
        
        </div>
    )
}

export default Home;