import React from 'react';
import RoundSequenceButton from "../Buttons/RoundSequenceButton/RoundSequenceButton";
import "./scenarioCard.css";

function ScenarioCard() {
    return (
        <div>
            <div className="card">
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-8">
                            <h2 style={{margin: 20}}>(Scenario Title)</h2>
                        </div>
                        <div className="col-md-4">
                            <RoundSequenceButton />
                        </div>
                    </div>

                    <hr />

                    image of scenario card from API?
                    able to arrow through all scenario cards?

                 </div>
            </div>
        </div>
    )
}

export default ScenarioCard;