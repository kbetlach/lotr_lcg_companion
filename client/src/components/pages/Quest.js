import React from 'react';
import "../Pages/pages.css";
import PlayerCard from "../PlayerCard/PlayerCard";
import Willpower from "../Willpower/Willpower";

function QuestPage() {
    return(
        <div className="container w3-container w3-animate-opacity">
            <div className="row">
                <div className="col-md-6">
                    <Willpower />
                    <PlayerCard />
                </div>
            </div>
        </div>
    ) 
}

export default QuestPage;