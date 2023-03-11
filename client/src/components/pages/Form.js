import { useState } from "react";
import "../../styles/form.css";
import pen from "../../assets/imgs/pen.png";
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

    const change = event => {
        setRecipient(event.target.value);
        console.log(recipient)
        var preview = document.getElementById("recipientNamePreview");
        preview.value = recipient;
    }

    return(
        <div id="form-container">
            <div id="form">
                <img className="box" alt="A feather pen icon button" src={pen} id="pen-static"/><h1>Write your note</h1>
                <form>
                    <div className="form-group">
                        <label><h2>Recipient</h2></label> <br/>
                        <input id="formRecipient"type="text" className="form-control text-input" onInput={change} value={recipient}/>
                    </div>
                    <div className="form-group">
                        <label><h2>Note body</h2></label> <br/>
                        <textarea className="form-control"  id="text-box"rows="5"></textarea>
                    </div>
                    <div className="form-group">
                        <label><h2>Sender</h2></label> <br/>
                        <input type="text" className="form-control text-input"/>
                    </div>
                    <div className="form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                        <label className="form-check-label">Check me out</label>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
            </div>
            <div id="note-preview">
                <input type="text" id="recipientNamePreview" />
            </div>
        </div>
    )
}