import React from "react";  
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { CartContext } from "../Context/Context";


const CartWidget = () =>{
    
    const {cart} = useContext(CartContext);
    const [total, setTotal ] = useState(0);
    console.log(cart);
    useEffect(()=>{
        let totalItems = cart.reduce((total , item) => total += item.cantidad, 0);
        setTotal(totalItems);
        console.log(totalItems);
    },[cart] );


    return (
        <button className="btn btn-warning position-relative" type="button">
            <span className="material-symbols-outlined">shopping_cart</span>
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{total}</span>
        </button>
                
                 
    )
}





export default CartWidget ;