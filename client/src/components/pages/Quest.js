import React from 'react';
import "./pages.css";
import PlayerCard from "../PlayerCard/PlayerCard";

function QuestPage() {
    return(
        <div className="container w3-container w3-animate-opacity">
            <div className="row">
                <div className="col-md-6">
                    <PlayerCard />
                </div>
            </div>
        </div>
    ) 
}

export default QuestPage;