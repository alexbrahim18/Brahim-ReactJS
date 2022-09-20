import React, {useContext} from "react";  
import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css";
import { CartContext } from "../Context/Context";
import { useState } from "react";




const ItemDetail= ({id,nombre,imagen,precio,descripcion,stock,item}) =>{
    
    const {addItem} = useContext(CartContext);
    const  [counter,setCounter] = useState();

    


    const onAdd = (counter) =>{
        setCounter(counter);
        addItem(item, counter);
    }

    return (
                
    <div className="row detail  justify-content-center m-5">
        <img src={imagen} alt={nombre} className="col-5"/>
        <div key={id} className="col-5">
            <h3>Six Pack de {nombre}</h3>
            <h4>${precio}</h4>
            <p><span className="material-symbols-outlined">credit_card</span> <b>24</b> Cuotas de <b></b></p>
            <p>{descripcion}</p>
            <ItemCount stock={stock} initial={1} onAdd={onAdd}/>
        </div>
        

    </div>
                 
    )
}





export default ItemDetail ;