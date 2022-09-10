import React from "react";


const Item = ({id,nombre,imagen,precio}) =>{


    return(
        <div className="col-md-3" key={id} >
            <div className="card m-5 d-flex flex-column justify-content-center aling-items-center " >
                <img src={imagen} className="card-img-top" alt={nombre}/>
                <div className="card-body d-flex flex-column justify-content-center aling-items-center">
                    <h5 className="card-title text-center">{nombre}</h5>
                    <p className="card-text text-center ">${precio} Pack x 6 unidades</p>
                    <a href="#" className="btn btn-warning ">Ver Más</a>
                 </div>
            </div>
        </div>
    )
}






export default Item;