import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import {getFirestore, collection, getDocs,query,where} from "firebase/firestore";


const ItemListContainer = () =>{
 

  const [items,setItems ] = useState([]);
  const {condicion} = useParams();
  
  
  useEffect(() => {
    const db = getFirestore();
    const dbCollection = collection(db,"items");
    if(condicion){
      const dbFilter = query(dbCollection, where("categoria","==", condicion))
    getDocs(dbFilter).then((res)=>{
      setItems(res.docs.map(product => ({id: product.id, ...product.data()})));
    })
    }
    else{
      getDocs(dbCollection).then((res)=>{
        setItems(res.docs.map(product => ({id: product.id, ...product.data()})));
      })
    }

  },[condicion]);
    
    return (
        
          <ItemList items={items}/>
        
    )


}

export default ItemListContainer;