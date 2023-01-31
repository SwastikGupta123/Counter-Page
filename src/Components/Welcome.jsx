import React from "react";
import './Welcome.css';

export default function Welcome(props) {

    const handleClick = () =>{
        var hid = document.getElementsByClassName("exp");
        if(hid[0].offsetWidth > 0 && hid[0].offsetHeight > 0) {
            hid[0].style.visibility= "visible";
        }
    }
    return (
        <>
        <div>
            <button type="button" onClick={handleClick}>Log In</button>
        </div>
        <div class="exp">
            <h1>Hey! {props.name}</h1>
            <h2 >Welcome to Lovely Professional University</h2>
        </div>
        <p>Assignment done by Swastik Gupta 12006944</p>
        </>
    )
}
