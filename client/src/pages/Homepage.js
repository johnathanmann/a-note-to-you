import React from "react";
import {Link} from "react-router-dom";
import "../styles/styles.css";
import pen from "../assets/imgs/pen.png";


export default function Homepage(){
    return(
        <div className="container center">
          <h1 className="box">A note to you.</h1>
          <Link to="/form"><img className="box" alt="A feather pen icon button" src={pen} id="pen"/></Link>
        </div>
    )
}