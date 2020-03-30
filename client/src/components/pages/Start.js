import React from 'react';
import "./pages.css";
import StartButton from "../StartButton/StartButton";

function StartPage() {
    return(
        <div className="container w3-container w3-center w3-animate-opacity">
            <div className="jumbotron">
                <h1>Lord of the Rings</h1>
                <h2>The Living Card Game Companion</h2> 
                <br />
                <br />
                <StartButton />
                <br />
            </div>
        </div>
    ) 
}

export default StartPage;