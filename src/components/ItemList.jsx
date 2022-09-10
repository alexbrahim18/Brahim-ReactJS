import React from "react";
import Item from "./Item/Item";

const ItemList = ({items}) =>{


    return(
        <div className="row">
             {items.map(item => <Item id={item.id} nombre={item.nombre} imagen={item.img} precio={item.precio}/>)}   
        </div>
    )
}






export default ItemList;