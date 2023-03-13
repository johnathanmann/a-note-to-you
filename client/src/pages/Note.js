import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import $ from "jquery";
import "../styles/note.css";
import "../styles/envelope.css";

import redStar from "../assets/imgs/red-star.png";
import orangeStar from "../assets/imgs/orange-star.png";
import yellowStar from "../assets/imgs/yellow-star.png";
import greenStar from "../assets/imgs/green-star.png";
import blueStar from "../assets/imgs/blue-star.png";
import purpleStar from "../assets/imgs/purple-star.png";
import pinkStar from "../assets/imgs/pink-star.png";
import blackStar from "../assets/imgs/black-star.png";
let star;

export default function Note(){
    let { uniqId } = useParams();
    
    const [note, setNote] = useState([]);
  
    async function getNote() {
      const response = await fetch(`/api/note/dear/${uniqId}`);
      const singleNote = await response.json();
  
      setNote(singleNote)
    }
    useEffect(() => {
      getNote();
    });

    if(note.sticker === "red"){
      star = redStar
  }

    return(
        <div className={note.sticker}>
            <div className="envelope-container">
            <input id="flap" type="checkbox"/>
            <label className="flap" for="flap"></label>
            <div className="envelope-back"></div>
            <div className="card">
            <h3 className="note-h3">Dear {note.recipient},</h3>
            <p>{note.body}</p>
            <h3 className="note-h3">Sincerely, <br /> {note.sender}</h3>
            </div>
        </div>
    </div>
    )
}