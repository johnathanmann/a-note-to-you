import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import $ from "jquery";
import "../styles/note.css"

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

    return(
        <div className="">
            <div className="envelope-container">
            <input id="flap" type="checkbox"/>
            <label className="flap" for="flap"></label>
            <div className="envelope-back"></div>
            <div className="card">
            Dear {note.recipient},
            </div>
        </div>
    </div>
    )
}