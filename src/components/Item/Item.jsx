import React from "react";
import { Link } from "react-router-dom";


const Item = ({id,nombre,imagen,precio}) =>{


    return(
        <div className="col-md-3" key={id} >
            <div className="card m-5 d-flex flex-column justify-content-center aling-items-center " >
                <Link to={"/producto/" + id }><img src={imagen} className="card-img-top" alt={nombre}/></Link>
                <div className="card-body d-flex flex-column justify-content-center aling-items-center">
                    <h5 className="card-title text-center">{nombre}</h5>
                    <p className="card-text text-center ">${precio} Pack x 6 unidades</p>
                    <Link to={"/producto/" + id} className="btn btn-warning ">Ver Más</Link>
                 </div>
            </div>
        </div>
    )
}






export default Item;