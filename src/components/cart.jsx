import React from "react";
import { useContext } from "react";
import CartDetail from "./CartDetail";
import { CartContext } from "./Context/Context";
import { Link } from "react-router-dom";


const Cart = () =>{

    const {cart} = useContext(CartContext);

    if (cart.length === 0){
        return(
                <div>
                    <h2>No hay Productos en el Carrito</h2>
                    <Link to="/"><input type="button " className="btn btn-success remove" value="Seguir Comprando"  readOnly /></Link >
                </div>
        )
    }
    return(
       <CartDetail/>
    )
}

export default Cart;