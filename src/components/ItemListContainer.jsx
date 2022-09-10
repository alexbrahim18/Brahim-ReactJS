import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ItemList from "./ItemList";


const ItemListContainer = (props) =>{
 

  const [items,setItems ] = useState([]);
  useEffect(() => {
    const promesa = new Promise ((resolve,reject)=>{
      setTimeout(()=>{
        resolve(props.productos);
      },2000);
    });

    promesa.then((respuesta)=>{
      setItems(respuesta);
    
    })
  },[]);
    
    return (
        <div>
          <ItemList items={items}/>
        </div>
    )


}

export default ItemListContainer;