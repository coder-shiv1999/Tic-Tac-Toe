import React from "react";
import './Square.css';
const Square = (props) => {
    return(
        <div className="Square" onClick={props.onClick}>
            <h3>{props.value}</h3>
        </div>
    );
   
}

export default Square;