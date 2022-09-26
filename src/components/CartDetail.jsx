import React from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./Context/Context";
import { useContext } from "react";
const CartDetail = () =>{

    const{cart,clear,removeItem,sumaTotal} = useContext(CartContext);
    let total = sumaTotal();


    return(
        <div>
        {cart.map(item=>
            <div className="d-flex  justify-content-center align-item-end">
                <img src={item.img} alt={item.nombre} width="300px" />
                <div className="d-flex flex-column justify-content-center">
                    <p className="text-center">{item.nombre}</p>
                    <p>Productos en el carrito: {item.cantidad}</p>
                    <p>Sub Total : ${ item.precio * item.cantidad}</p>
                    <input type="button " className="btn btn-danger remove" value="Remover" onClick={() =>removeItem(item.id)} readOnly />
                </div>
            </div> 
            )}
            <input type="button " className="btn btn-danger remove" value="Borrar Todo" onClick={() =>clear()} readOnly />
            <Link to="/"><input type="button " className="btn btn-success remove" value="Seguir Comprando"  readOnly /></Link >
            <input type="button " className="btn btn-dark remove" value="Finaliza Compra" readOnly />
            <p className="fs-3">Total : ${total}</p>

    </div>

    )
}

export default CartDetail;