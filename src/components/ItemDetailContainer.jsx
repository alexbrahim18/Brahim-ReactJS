import React from "react";  
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail/ItemDetail";
import {products} from "./Mock";



const ItemDetailContainer= () =>{
    const [item,setItem] = useState({});
    const {id} = useParams();
    



    useEffect(()=>{
        const getProduct = () =>
            new Promise((resolve,reject)=>{
                 const product = products.find((i)=> i.id === parseInt(id));                 
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

        <ItemDetail item={item}/> 
    </div>
                 
    )
}





export default ItemDetailContainer ;