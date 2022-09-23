import React from "react";
import { useContext } from "react";
import { CartContext } from "./Context/Context";


const Cart = () =>{

    const{cart,clear,removeItem,suma} = useContext(CartContext);



    return(
        <div>
            {cart.map(item=>
                <div className="d-flex  justify-content-center align-item-end">
                    <img src={item.img} alt={item.nombre} width="300px" />
                    <div className="d-flex flex-column justify-content-center">
                        <p className="text-center">{item.nombre}</p>
                        <p>Productos en el carrito: {item.cantidad}</p>
                        
                        <input type="button " className="btn btn-danger remove" value="Remover" onClick={() =>removeItem(item.id)} readOnly />
                    </div>
                </div> 
                )}
                <input type="button " className="btn btn-danger remove" value="Borrar Todo" onClick={() =>clear()} readOnly />

        </div>
    )
}

export default Cart;