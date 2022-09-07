import React from "react";

const Item = ({id,nombre,imagen,precio}) =>{


    return(
        <div className="col-md-4" key={id}>
            <div className="card m-5">
                <img src={imagen} class="card-img-top" alt={nombre}/>
                <div className="card-body">
                    <h5 className="card-title text-center">{nombre}</h5>
                    <p className="card-text text-center ">${precio} Pack x 6 unidades</p>
                    <a href="#" className="btn btn-primary ">Ver Más</a>
                 </div>
            </div>
        </div>
    )
}






export default Item;