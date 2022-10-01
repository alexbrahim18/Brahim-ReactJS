import React from "react";  
import { useContext } from "react";
import { CartContext } from "../Context/Context";
import { Link } from "react-router-dom";



const CartWidget = () =>{
    
    const {cart, cartTotal} = useContext(CartContext);
    
    let total = cartTotal();
   

    
    return (
        
            <Link to={"/cart"}>
            <button className="btn btn-warning position-relative" type="button">
            <span className="material-symbols-outlined">shopping_cart</span>
            {cartTotal()> 0 ? <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{total}</span> : "" }
           
            </button>
            </Link>
        
                
                 
    )
}





export default CartWidget ;