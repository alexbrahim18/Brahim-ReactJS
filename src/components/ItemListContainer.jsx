import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import {products} from "./Mock";


const ItemListContainer = () =>{
 

  const [items,setItems ] = useState([]);
  const {condicion} = useParams();
  useEffect(() => {
    let categoria = "";

    if(condicion === "promociones"){
       categoria = "promo";
    }
    else if (condicion === "cervezas"){
      categoria = "cervezas";
    } else {
      categoria = "todo";
    }
    
    
    
    const promesa = new Promise ((resolve,reject)=>{
      setTimeout(()=>{
        resolve(products);
      },2000);
    });

    promesa.then((respuesta)=>{
      if(categoria === "todo"){
        setItems(respuesta);
      }else {
        const array_prod = respuesta.filter(producto => producto.categoria === categoria);
        setItems(array_prod);
      }
    
    })
  },[condicion]);
    
    return (
        <div>
          <ItemList items={items}/>
        </div>
    )


}

export default ItemListContainer;