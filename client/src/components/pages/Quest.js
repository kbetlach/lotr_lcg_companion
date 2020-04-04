import React from 'react';
import "../Pages/pages.css";
import PlayerCard from "../PlayerCard/PlayerCard";
import Progress from "../Progress/Progress";

function QuestPage() {
    return(
        <div className="container w3-container w3-animate-opacity">
            <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-6"><Progress /></div>
                <div className="col-md-3"></div>
            </div>

            <div className="row">
                <div className="col-md-6">
                    <PlayerCard />
                </div>
                <div className="col-md-6">
                    <PlayerCard />
                </div>
            </div>
        </div>
    ) 
}

export default QuestPage;