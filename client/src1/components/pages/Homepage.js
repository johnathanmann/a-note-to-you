import React from "react";
import "../../styles/styles.css";
import pen from "../../assets/imgs/pen.png";

export function Home(){
    return(
        <div className="container center">
          <h1 className="box">A note to you.</h1>
          <button><img className="box" alt="A feather pen icon button" src={pen} id="pen"/></button>
        </div>
    )
}