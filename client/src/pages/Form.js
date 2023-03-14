import { useState } from "react";
import $ from 'jquery';
import uniqid from 'uniqid';
import "../styles/form.css";
import copyIcon from "../assets/imgs/copy.png";
import pen from "../assets/imgs/pen.png";
import {Link} from 'react-router-dom';

import redStar from "../assets/imgs/red-star.png";
import orangeStar from "../assets/imgs/orange-star.png";
import yellowStar from "../assets/imgs/yellow-star.png";
import greenStar from "../assets/imgs/green-star.png";
import blueStar from "../assets/imgs/blue-star.png";
import purpleStar from "../assets/imgs/purple-star.png";
import pinkStar from "../assets/imgs/pink-star.png";
import blackStar from "../assets/imgs/black-star.png";

let recipientName;

let uniqId = uniqid();


async function noteForm() {

    recipientName = $("#formRecipient").val();
    let body = $("#text-box").val();
    let sender = $("#sender").val();
    let sticker = $('[name="sticker"]').val();

    const finalUniqId = recipientName+"-"+uniqId;

    if (SubmitEvent) {
      const response = await fetch('/api/note', {
        method: 'POST',
        body: JSON.stringify({
            uniqId: finalUniqId,
            recipient: recipientName,
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

    function copy(uniqId) {
        let copyText ="a-note-to-you.herokuapp.com/#/dear/"+ uniqId;
        console.log(copyText)
        navigator.clipboard.writeText(copyText);
      }

    copy(finalUniqId)
};

export default function Form(){
    const [recipient, setRecipient] = useState("")
    const [body, setBody] = useState("")
    const [sender, setSender] = useState("")

    const changeName = event => {
        setRecipient(event.target.value);
        uniqId = uniqid();
        console.log(recipientName)
    }
    const changeBody = event => {
        setBody(event.target.value);
    }
    const changeSender = event => {
        setSender(event.target.value);
    }
    
    $('#redStar').click(function(){
        $('#note-preview h3').css({
            'color': "#de3232"
        });
    })
    $('#orangeStar').click(function(){
        $('#note-preview h3').css({
            'color': "#f48737"
        });
    })
    $('#yellowStar').click(function(){
        $('#note-preview h3').css({
            'color': "#f1cc25"
        });
    })
    $('#greenStar').click(function(){
        $('#note-preview h3').css({
            'color': "#8ef063"
        });
    })
    $('#blueStar').click(function(){
        $('#note-preview h3').css({
            'color': "#63acf0"
        });
    })
    $('#purpleStar').click(function(){
        $('#note-preview h3').css({
            'color': "#d463f0"
        });
    })
    $('#pinkStar').click(function(){
        $('#note-preview h3').css({
            'color': "#fd7bb7"
        });
    })
    $('#blackStar').click(function(){
        $('#note-preview h3').css({
            'color': "#000"
        });
    })
    

    return(
        <div id="form-container">
            <div id="form">
                <img className="box" alt="A feather pen icon button" src={pen} id="static-pen"/><h1>Write your note</h1>
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
                        <input type="radio" className="form-check-input" id="redStar" value="red" name="sticker" required/>
                        <label><img className="stamp-preview" src={redStar} alt="red star icon"/></label>
                        <input type="radio" className="form-check-input" id="orangeStar" value="orange" name="sticker" required/>
                        <label><img className="stamp-preview" src={orangeStar} alt="orange star icon"/></label>
                        <input type="radio" className="form-check-input" id="yellowStar" value="yellow" name="sticker" required/>
                        <label><img className="stamp-preview" src={yellowStar} alt="yellow star icon"/></label>
                        <input type="radio" className="form-check-input" id="greenStar" value="orange" name="sticker" required/>
                        <label><img className="stamp-preview" src={greenStar} alt="green star icon"/></label>
                        <input type="radio" className="form-check-input" id="blueStar" value="blue" name="sticker" required/>
                        <label><img className="stamp-preview" src={blueStar} alt="blue star icon"/></label>
                        <input type="radio" className="form-check-input" id="purpleStar" value="purple" name="sticker" required/>
                        <label><img className="stamp-preview" src={purpleStar} alt="purple star icon"/></label>
                        <input type="radio" className="form-check-input" id="pinkStar" value="pink" name="sticker" required/>
                        <label><img className="stamp-preview" src={pinkStar} alt="pink star icon"/></label>
                        <input type="radio" className="form-check-input" id="blackStar" value="black" name="sticker" required/>
                        <label><img className="stamp-preview" src={blackStar} alt="black star icon"/></label>
                    </div>
                    <Link to="/"><button className="btn" id="submit" onClick={() => noteForm()}>Submit</button></Link>
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