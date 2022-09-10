import React from "react";  
import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css";




const ItemDetail= ({id,nombre,imagen,precio,descripcion}) =>{
    return (
                
    <div className="row detail  justify-content-center">
        <img src={imagen} alt={nombre} className="col-5"/>
        <div key={id} className="col-5">
            <h3>Six Pack de {nombre}</h3>
            <h4>${precio}</h4>
            <p><span className="material-symbols-outlined">credit_card</span> <b>24</b> Cuotas de <b></b></p>
            <p>{descripcion}</p>
            <ItemCount/>
        </div>
        

    </div>
                 
    )
}





export default ItemDetail ;