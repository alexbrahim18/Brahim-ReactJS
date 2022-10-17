import { addDoc, collection, getFirestore } from "firebase/firestore";
import React from "react";
import { useState } from "react";
import "./Contacto.css"


const Contacto = () =>{
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [telefono, setTelefono] = useState("");
    const [mensaje, setMensaje] = useState("");
    const [suggesId, setSuggesId] = useState("");

    const sendSuggestion = () =>{
        if ((nombre !== "") && (email !== "") && (telefono !== "") && (mensaje !== "")){
            const user = {name:nombre,email:email,phone:telefono,};
            const message = {suggestion:mensaje}
            const date = new Date();
            const now = date.getDate() + "-" + (date.getMonth()+1) + "-" + date.getFullYear() + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
            const suggestion = {user:user, suggestion:message, date:now};

            const db = getFirestore();
            const suggesCollection = collection(db, "suggestions");
            addDoc(suggesCollection,suggestion).then(({id})=>{
                setSuggesId(id);
                console.log(suggesId);
            })
        }

    }


    
    
    return(
        <div>
            <div className="row d-flex justify-content-center my-4">
                <h1 className="col-md-8 cont__tit">Contacto</h1>
            </div>
            <div className="row d-flex justify-content-center">
                <ul className="col-md-3 cont__list">
                    <li><i className="fa-brands fa-whatsapp"> 3816304495</i></li>
                    <li><i className="fa-solid fa-phone"> 3814361639</i></li>
                    <li ><i className="fa-solid fa-envelope"> ventas@northman.com</i></li>
                    <li ><i className="fa-solid fa-location-dot"> Calle Falsa 123</i></li>
                </ul>
                <form  className="col-md-5 ">
                    <div className="mb-3">
                        <input type="text" className="form-control" id="nombre"  placeholder="Ingrese su Nombre" onInput={(e) => setNombre(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                        <input type="email" className="form-control" id="email"  placeholder="Ingrese su Email" onInput={(e) => setEmail(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                        <input type="text" className="form-control" id="telefono"  placeholder="Ingrese su Telefono" onInput={(e) => setTelefono(e.target.value)}/>
                    </div>
                    <div class="mb-3">
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Ingrese su Mensaje" onInput={(e)=>setMensaje(e.target.value)}></textarea>
                    </div>
                    <button type="button" className="btn btn-warning" onClick={()=>sendSuggestion()} >Enviar</button>
            </form>
            </div>
        </div>
    )
}

export default Contacto;