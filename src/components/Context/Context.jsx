import React, { Children } from "react";
import { useState } from "react";
import { createContext } from "react";


export const CartContext = createContext();

const Provider = (props) => {
    
    const [cart, setCart] = useState([]);
    
    
    const addItem = (item , cantidad) =>{
        if(isInCart(item.id)){
            let producto = cart.find(x => x.id === item.id);
            cart [cart.indexOf(producto)].cantidad += 1;
            setCart([...cart]);
            console.log(cart);
        }else {
            setCart([...cart, {...item, cantidad:cantidad }]);
            
        }
    }
    
    const clear = () =>{
        setCart([]);
    }
    const removeItem = (id) =>{
        const filtrado = cart.filter((prod) =>prod.id !== id)
        setCart(filtrado);

    }
    
    const sumaTotal = ()=>{
        const copia = [...cart];
        let count = 0;
        copia.forEach((producto) => {
            count += (producto.cantidad*producto.precio);
        });
        return count;


    };
    
    

    const isInCart = (id) =>{
        return cart.some(item =>item.id === id);
    }
    const cartTotal = () => {
        const copia = [...cart];
        let count = 0;
        copia.forEach((producto) => {
            count = count + producto.cantidad;
        });
        return count;
    }
    
    return(
        
            <CartContext.Provider value={{cart, addItem, clear,isInCart, cartTotal,removeItem,sumaTotal}}>
                {props.children}
            </CartContext.Provider>
        


    )
}

export default Provider;