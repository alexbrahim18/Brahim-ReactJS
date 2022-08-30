import React from "react";


const ItemListContainer = (props) =>{

    const {
      greeting,
    } = props;
  
  
  
  
    return (
        <div>
          {
            greeting.map( (producto)=>{
                return <li>{producto.nombre} - ${producto.precio}</li>
            })
          }
        </div>
    )


}

export default ItemListContainer;