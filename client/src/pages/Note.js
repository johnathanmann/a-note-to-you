import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


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
        <div>
            <h1>{note.recipient}</h1>
        </div>
    )
}