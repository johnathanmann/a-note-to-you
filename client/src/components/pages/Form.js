import { useState } from "react";
import "../../styles/form.css";
import pen from "../../assets/imgs/pen.png";
import heart from "../../assets/imgs/heart-stamp.png";
import smile from "../../assets/imgs/smile-stamp.png";
import star from "../../assets/imgs/star-stamp.png";
// async function noteForm() {

//     if (projectTitle, projectDescription) {
//       const response = await fetch('/api/projects', {
//         method: 'POST',
//         body: JSON.stringify({
//           user: userId,
//           title: projectTitle,
//           description: projectDescription
//         }),
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       });
//       if (response.ok) {
//         console.log('Post Posted');
//       } else {
//         alert(response.statusText);
//       }
//     }
// };

export default function Form(){
    const [recipient, setRecipient] = useState("")
    const [body, setBody] = useState("")
    const [sender, setSender] = useState("")

    const changeName = event => {
        setRecipient(event.target.value);
    }
    const changeBody = event => {
        setBody(event.target.value);
    }
    const changeSender = event => {
        setSender(event.target.value);
    }
    return(
        <div id="form-container">
            <div id="form">
                <img className="box" alt="A feather pen icon button" src={pen} id="pen-static"/><h1>Write your note</h1>
                <form>
                    <div className="form-group">
                        <label><h2>Recipient</h2></label> <br/>
                        <input id="formRecipient"type="text" className="form-control text-input" onInput={changeName} value={recipient}/>
                    </div>
                    <div className="form-group">
                        <label><h2>Note body</h2></label> <br/>
                        <input className="form-control"  id="text-box"rows="5" onInput={changeBody} value={body}></input>
                    </div>
                    <div className="form-group">
                        <label><h2>Sender</h2></label> <br/>
                        <input type="text" className="form-control text-input" onInput={changeSender} value={sender}/>
                    </div>
                    <div className="form-check">
                    <label><h2>Sticker</h2></label> <br/>
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" value="heart"/>
                        <label><img className="stamp-preview" src={heart} alt="Pink heart icon"/></label>
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" value="star"/>
                        <label><img className="stamp-preview" src={star} alt="Blue star icon"/></label>
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" value="smile"/>
                        <label><img className="stamp-preview" src={smile} alt="Yellow smile icon"/></label>
                    </div>
                    <button type="submit" className="btn" id="submit">Submit</button>
                    </form>
            </div>
            <div id="note-preview">
                <h3>Dear {recipient},</h3>
                <p>{body}</p>
                <h3>Sincerely, <br/>{sender}</h3>
            </div>
        </div>
    )
}