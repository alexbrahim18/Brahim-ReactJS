import React from "react";  
import { useEffect } from "react";
import { useState } from "react";
import ItemDetail from "./ItemDetail/ItemDetail";



const ItemDetailContainer= ({productos}) =>{
    const [item,setItem] = useState({});
    



    useEffect(()=>{
        const getProduct = () =>
            new Promise((resolve,reject)=>{
                 const product = productos.find((i)=> i.id === 1); 
                    console.log(product)                
                 setTimeout(()=>{
                    resolve(product);
                },2000);
            });
            getProduct()
            .then((data)=>{
                setItem(data);
            })
            

    },[]);
    
    
    return (
                
    <div className="row">

        <ItemDetail id={item.id} nombre={item.nombre} imagen={item.img} precio={item.precio} descripcion={item.descripcion}/> 
    </div>
                 
    )
}





export default ItemDetailContainer ;