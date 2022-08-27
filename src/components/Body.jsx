import React from "react";
import bg from "./img/background.jpg";

const Body = () => {

let stiloBody = {
    margin : 0,
}


    return (
        <body style={stiloBody}>
            <img src={bg} alt="" />
        </body>
    )
}

export default Body;