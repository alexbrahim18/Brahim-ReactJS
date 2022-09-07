import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ItemList from "./ItemList";


const ItemListContainer = () =>{
  const productos = [ 
                      {id:1,nombre:"HUBBSI - IPA", precio:200, stock:5,img:"https://d2r9epyceweg5n.cloudfront.net/stores/001/193/297/products/hubbsi11-8479febb3cf9b5da9615972491316014-640-0.jpg"},
                      {id:2,nombre:"MOSAIC - LIGHT LAGGER", precio:200, stock:5,img:"https://d2r9epyceweg5n.cloudfront.net/stores/001/193/297/products/mosaic11-ddc5a636884f48f81715972491560753-640-0.jpg"},
                      {id:3,nombre:"VAINILLA PORTER", precio:300, stock :0,img:"https://d2r9epyceweg5n.cloudfront.net/stores/001/193/297/products/lata-vanilla1-7fed38b963122e76b116092724750193-640-0.jpg"},
                      {id:4,nombre:"HONEY", precio:400, stock:15,img:"https://d2r9epyceweg5n.cloudfront.net/stores/001/193/297/products/honey11-f6c9e8c27b1ca19b5b15994876402928-640-0.jpg"},
                      {id:5,nombre:"TUQUE A.A.A.", precio:100, stock:10, img:"https://d2r9epyceweg5n.cloudfront.net/stores/001/193/297/products/lata-tuque1-3ea973e0262f0ef31516092667678466-1024-10241-bc3c713059df46852c16092722783430-640-0.jpg"},
                      {id:6,nombre:"LADY G - AMBER LAGGER", precio:100, stock:10, img:"https://d2r9epyceweg5n.cloudfront.net/stores/001/193/297/products/ladyg1-3eee6a3cba91ea1e7a15972490885174-640-0.jpg"}];

  const [items,setItems ] = useState([]);
  useEffect(() => {
    const promesa = new Promise ((resolve,reject)=>{
      setTimeout(()=>{
        resolve(productos);
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