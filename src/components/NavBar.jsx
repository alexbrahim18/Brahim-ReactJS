import React from "react";

const NavBar = () =>{
    
    const nav = [ {id:1, nombre: "Inicio", link:`./index.html`}, 
    {id:2, nombre: "Productos", link:`./index.html`},
    {id:3, nombre: "Bares", link:`./index.html`},
    {id:4, nombre: "Promos", link:`./index.html`}];

    let stilos ={
    display : "flex",
    listStyle : "none",
    padding : "10px",
    backgroundColor :"#423737",
    border : "1px",
}

    let estilosLI = {
    textDecoration : "none",
    margin :"10px",
    
}

    let estilosA ={
        textDecoration:"none",
        color : "#f1b800",
        fontSize : "27px",
        fontFamily: "'Raleway', sans-serif",
    }
    
    return (
        
        
        <ul className='justify-content-center' style={stilos}>
      {
        nav.map(item=>(
          <li style={estilosLI} key={item.id}><a style={estilosA} href={item.link}>{item.nombre}</a></li>
        ))
      }

      </ul>
    )
}



export default NavBar;