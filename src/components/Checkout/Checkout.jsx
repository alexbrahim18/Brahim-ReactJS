import React from "react";
import { useContext } from "react";
import { CartContext } from "../Context/Context";
import "./Checkout.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { getFirestore,collection,addDoc } from "firebase/firestore";
import Success from "../Success";


const Checkout = () =>{

    const {cart,sumaTotal,removeItem,clear} = useContext(CartContext);

    let total = sumaTotal();
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [telefono, setTelefono] = useState("");
    const [orderId, setOrderId] = useState("");

    const sendOrder = () => {
        if ((nombre !== "") && (email !== "") && (telefono !== "")) {
            const buyer = {name:nombre, email:email, phone:telefono};
            const items = [];
            cart.forEach(item => {
                items.push({id:item.id, title:item.nombre, price:item.precio, quantity:item.cantidad});
            });
            const date = new Date();
            const now = date.getDate() + "-" + (date.getMonth()+1) + "-" + date.getFullYear() + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
            const order = {buyer:buyer, items:items, date:now, total:sumaTotal()};
            
            const db = getFirestore();
            const orderCollection =  collection(db, "orders");
            addDoc(orderCollection, order).then(({id}) => {
                
                setOrderId(id);
                clear();
            });
        }
    }
    return(
        
        <div>
            {sumaTotal() > 0 ? 
            <div className="row d-flex justify-content-around">
            <form  className="col-4 m-5">
                    <div className="mb-3">
                        <input type="text" className="form-control" id="nombre"  placeholder="Ingrese su Nombre" onInput={(e) => setNombre(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                        <input type="email" className="form-control" id="email"  placeholder="Ingrese su Email" onInput={(e) => setEmail(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                        <input type="text" className="form-control" id="telefono"  placeholder="Ingrese su Telefono" onInput={(e) => setTelefono(e.target.value)}/>
                    </div>
                    <button type="button" className="btn btn-warning" onClick={() => {sendOrder()}}>Finalizar</button>
            </form>
            <div className="col-5">
                {cart.map(item => <div className="d-flex  justify-content-around align-items-center" key={item.id}>
                <img src={item.img} alt={item.nombre} width="200px" />
                <div className="d-flex flex-column justify-content-center">
                    <p className="text-center">{item.nombre} x {item.cantidad}</p>
                    <p>Sub Total : ${ item.precio * item.cantidad}</p>
                </div>
                <button type="button" class="btn btn-danger trash" onClick={()=> removeItem(item.id)}><span className="material-symbols-outlined">delete</span></button>
            </div> )}
            <p className="text-center fs-3 total">Total : ${total}</p>
            </div>
            </div> 
            : orderId !== "" ? <Success id={orderId} /> 
            : <div className="d-flex flex-column justify-content-center align-items-center"><div className="alert alert-danger text-center m-5" role="alert">No se encontraron Productos!</div><Link to="/"><input type="button " className="btn btn-success remove" value="Volver a la Tienda"  readOnly /></Link ></div>
        }
            
        </div>
        
    )
}


export default Checkout;