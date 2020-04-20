import React from 'react';
import "../Pages/pages.css";
import PlayerCard from "../PlayerCard/PlayerCard";
import Progress from "../Progress/Progress";
import UpkeepButton from "../Buttons/UpkeepButton/UpkeepButton";
import RoundSequenceButton from "../Buttons/RoundSequenceButton/RoundSequenceButton";

function QuestPage() {
    return(
        <div className="container w3-container w3-animate-opacity">
            <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-6"><Progress /></div>
                <div className="col-md-3"><RoundSequenceButton /></div>
            </div>

            <div className="row">
                <div className="col-md-6">
                    <PlayerCard />
                </div>
                <div className="col-md-6">
                    <PlayerCard />
                </div>
            </div>

            <div className="row justify-content-center">
                <UpkeepButton />
            </div>
        </div>
    ) 
}

export default QuestPage;