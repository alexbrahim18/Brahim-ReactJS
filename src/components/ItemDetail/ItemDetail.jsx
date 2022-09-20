import React, {useContext} from "react";  
import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css";
import { CartContext } from "../Context/Context";
import { useState } from "react";




const ItemDetail= ({item}) =>{

        const {addItem} = useContext(CartContext);
        const  [counter, setCounter] = useState(0);
        //const [product, setProduct] = useState(item);

        const onAdd = (item, counter) =>{
            setCounter(counter);
            addItem(item,counter);
        }

    


    return (
                
    <div className="row detail  justify-content-center m-5">
        <img src={item.img} alt={item.nombre} className="col-5"/>
        <div key={item.id} className="col-5">
            <h3>Six Pack de {item.nombre}</h3>
            <h4>${item.precio}</h4>
            <p><span className="material-symbols-outlined">credit_card</span> <b>24</b> Cuotas de <b></b></p>
            <p>{item.descripcion}</p>
            <ItemCount stock={item.stock} initial={1} onAdd={onAdd} counter={counter} setCounter={setCounter} item={item}/>
        </div>
        

    </div>
                 
    )
}





export default ItemDetail ;