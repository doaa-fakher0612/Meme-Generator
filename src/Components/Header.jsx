import React from "react";
import TrollFace from "../assets/troll-face.png"

export default function Header (){
    return (
     <header className = "header">
        <img  src = {TrollFace}/>
        <h1>Meme Generator</h1>
     </header>
    )
}