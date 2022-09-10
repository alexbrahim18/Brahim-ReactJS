import React from "react";
import { useState } from "react";
import "./ItemCount.css";


const ItemCount = ({stock,initial,onAdd}) =>{

    const  [cantidad, setCantidad] = useState(initial);
    const  [itemStock, setItemStock] = useState(stock);
    const  [itemAdd, setItemAdd] = useState(onAdd);

    const decremCantidad = (valor) =>{
        if (valor > 0){
            setCantidad(valor);
        }
    }
    const incremCantidad = (valor) =>{
        if (valor <= itemStock){
            setCantidad(valor);
        }
    }

    const agregProd = () =>{
        if (cantidad<= itemStock){
            setItemStock(itemStock - cantidad);
            setItemAdd(itemAdd+cantidad);
        }
    }

        return (
            <div className="container ">
                <div className="col-5">
                    <div className="counter">
                        <p className="text-center">Producto 1</p>
                        <div className="input-group">
                            <input type="button" className="btn btn-secondary" value="-" onClick={()=>{decremCantidad(cantidad - 1)}} />
                            <input type="text" className="form-control" value={cantidad} readOnly/>
                            <input type="button" className="btn btn-secondary" value="+" onClick={()=>{incremCantidad(cantidad + 1)}}  />
                        </div>
                        <div className="d-grid gap-2 py-3">
                            <input type="button" className="btn btn-secondary" value="Agregar" onClick={()=> {agregProd()}} />
                        </div>
                        <p>Productos en el Carrito : {itemAdd}</p>
                    </div>
                </div>
            </div>
        )


}



export default ItemCount;