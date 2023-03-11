import { useState } from "react";
import $ from 'jquery';
import uniqid from 'uniqid';
import "../../styles/form.css";
import pen from "../../assets/imgs/pen.png";
import heart from "../../assets/imgs/heart-stamp.png";
import smile from "../../assets/imgs/smile-stamp.png";
import star from "../../assets/imgs/star-stamp.png";

function onClick(e) {
    e.preventDefault();
 }

async function noteForm() {
    const recipient = $("#formRecipient").val();
    const body = $("#text-box").val();
    const sender = $("#sender").val();
    const sticker = $('[name="sticker"]').val();

    if (recipient) {
      const response = await fetch('/api/note', {
        method: 'POST',
        body: JSON.stringify({
            uniqId: uniqid(`${recipient}-`),
            recipient: recipient,
            body: body,
            sender: sender,
            sticker: sticker
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        console.log('Post Posted');
        $('#form-container').css({
                'display': 'none'
        });
      } else {
        alert(response.statusText);
      }
    }
};

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

    $('#smile').click(function(){
        $('#note-preview h3').css({
            'color': '#F1CC25'
        });
    })
    
    $('#star').click(function(){
        $('#note-preview h3').css({
            'color': '#6AB5EE'
        });
    })
    
    $('#heart').click(function(){
        $('#note-preview h3').css({
            'color': '#FD7BB7'
        });
    })

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
                        <input className="form-control"  id="text-box" rows="5" onInput={changeBody} value={body}></input>
                    </div>
                    <div className="form-group">
                        <label><h2>Sender</h2></label> <br/>
                        <input type="text" id="sender" className="form-control text-input" onInput={changeSender} value={sender}/>
                    </div>
                    <div className="form-check">
                    <label><h2>Sticker</h2></label> <br/>
                        <input type="radio" className="form-check-input" id="heart" value="heart" name="sticker" required/>
                        <label><img className="stamp-preview" src={heart} alt="Pink heart icon"/></label>
                        <input type="radio" className="form-check-input" id="star" value="star" name="sticker" required/>
                        <label><img className="stamp-preview" src={star} alt="Blue star icon"/></label>
                        <input type="radio" className="form-check-input" id="smile" value="smile" name="sticker" required/>
                        <label><img className="stamp-preview" src={smile} alt="Yellow smile icon"/></label>
                    </div>
                    <button className="btn" id="submit" onClick={() => noteForm()} onSubmit={(event) => event.preventDefault()}>Submit</button>
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