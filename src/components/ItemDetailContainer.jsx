import React from "react";  
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail/ItemDetail";
import {products} from "./Mock";



const ItemDetailContainer= () =>{
    const [item,setItem] = useState({});
    const {id} = useParams();
    console.log(id);
    



    useEffect(()=>{
        const getProduct = () =>
            new Promise((resolve,reject)=>{
                 const product = products.find((i)=> i.id === parseInt(id)); 
                    console.log(product)                
                 setTimeout(()=>{
                    resolve(product);
                },2000);
            });
            getProduct(id)
            .then((data)=>{
                setItem(data);
            })
            

    },[id]);
    
    
    return (
                
    <div className="row detailContainer">

        <ItemDetail id={item.id} nombre={item.nombre} imagen={item.img} precio={item.precio} descripcion={item.descripcion} stock={item.stock}/> 
    </div>
                 
    )
}





export default ItemDetailContainer ;