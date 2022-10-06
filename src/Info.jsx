import React from "react"
import image from "./images/AlanFoto.jpeg"

function Info() {
    return (
    <div className="info">
        <img className="photo-info" src={image}/>
        <h2>Alan Schmidt</h2>
        <h5>Frontend Developer</h5>
        <h6>alanschmidt.weibsite</h6>
        <button type="button" onClick={(e) => { e.preventDefault(); 
        window.location.href='mailto:alu.schmidt@hotmail.com';
        }} 
        
        className="email-btn">Email</button>
        
        <button type="button" onClick={(e) => { e.preventDefault(); 
        window.location.href='https://www.linkedin.com/in/alan-schmidt-b62377165/';
        }} className="linkedIn-btn">LinkedIn</button>  
    </div>
    )
}

export default Info