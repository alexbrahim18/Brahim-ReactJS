import React from "react";
import { useContext } from "react";
import CartDetail from "./CartDetail";
import { CartContext } from "./Context/Context";
import { Link } from "react-router-dom";


const Cart = () =>{

    const {cart} = useContext(CartContext);

    if (cart.length === 0){
        return(
            <div className="d-flex flex-column justify-content-center align-items-center">
                <div className="alert alert-danger text-center m-5" role="alert">No se encontraron Productos!</div>
                <Link to="/"><input type="button " className="btn btn-success remove" value="Volver a la Tienda"  readOnly /></Link >
            </div>
        )
    }
    return(
       <CartDetail/>
    )
}

export default Cart;