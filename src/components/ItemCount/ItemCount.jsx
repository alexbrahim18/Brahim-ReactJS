import React from "react";
import { useState, useContext } from "react";
import "./ItemCount.css";
import { CartContext } from "../Context/Context";
import { Link } from "react-router-dom";


const ItemCount = (props) =>{

    const { item} = props;
    const {cart, setCart, addItem, removeItem} = useContext(CartContext);
    const  [counter, setCounter] = useState(props.initial);
    const  [itemStock, setItemStock] = useState(props.stock);

    const decremCantidad = (valor) =>{
        if (valor > 0){
            setCounter(valor);
        }
    }
    const incremCantidad = (valor) =>{
        if (valor <= itemStock){
            setCounter(valor);
        }
    }

    const agregProd = () =>{
        if (counter<= itemStock){
            props.onAdd(item , counter);
            setItemStock(itemStock - counter);
            
        }
    }

        return (
            <div className="container ">
                <div className="col-5">
                    <div className="counter">
                        <div className="input-group">
                            <input type="button" className="btn btn-warning" value="-" onClick={()=>{decremCantidad(counter - 1)}} />
                            <input type="text" className="form-control" value={counter} readOnly/>
                            <input type="button" className="btn btn-warning" value="+" onClick={()=>{incremCantidad(counter + 1)}}  />
                        </div>
                        <div className="d-grid gap-2 py-3">
                            <input type="button" className="btn btn-warning" value="Agregar" onClick={()=> {agregProd()}} />
                            <input type="button " className="btn btn-danger remove" value="Remover" onClick={() =>removeItem(item.id)} readOnly />
                            <Link to="/cart"><input type="button" className="btn btn-warning" value="Terminar Compra"  /></Link>
                        </div>
                        <p>Productos disponibles : {itemStock}</p>
                    </div>
                </div>
            </div>
        )


}



export default ItemCount;