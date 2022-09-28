import React from "react";  
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail/ItemDetail";
import {getFirestore,doc,getDoc} from "firebase/firestore";



const ItemDetailContainer= () =>{
    const [item,setItem] = useState({});
    const {id} = useParams();
    
    



    useEffect(()=>{
        const db = getFirestore();
        const response = doc(db,"items",id);
        getDoc(response).then((res)=>{
            setItem({id: res.id, ...res.data()});
        })
            

    },[id]);
    
    
    return (
                
    <div className="row detailContainer">

        <ItemDetail item={item}/> 
    </div>
                 
    )
}





export default ItemDetailContainer ;