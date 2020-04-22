import React from 'react';
import "./roundSequence.css";

function RoundSequenceButton() {
    return (
        <div>
            <button type="button" data-target="#sequenceModal" data-toggle="modal"
                style={
                    {
                        width: "125px",
                        height: "55px",
                        fontSize: "18px",
                        backgroundColor: "white",
                        color: "rgb(99, 99, 99)",
                        borderRadius: "6px",
                        border: ".5px solid white",
                        fontFamily: "MiddleEarth",
                        cursor: "pointer"
                    }
            }>
                Round Sequence
            </button>

            <div aria-hidden="true" aria-labelledby="sequenceModalLabel" className="modal fade" id="sequenceModal" role="dialog" tabindex="-1">
                        <div className="modal-dialog" role="document" style={{fontFamily: "MiddleEarth"}}>
                            <div className="modal-content">
                                <div className="modal-header" style = {{backgroundColor: "rgb(99, 99, 99)"}}>
                                    <h5 style = {{color: 'white', fontFamily: "MiddleEarth", fontSize: "28px"}} className="modal-title" id="sequenceModal">Round Sequence</h5>
                                    <button style = {{color: 'white'}} aria-label="Close" className="close" data-dismiss="modal" type="button">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <form id="roundSequence">
                                    <div className="modal-body">
                                        <div className="form-group" style={{textAlign: "left", fontSize: "20px", color: "rgb(99, 99, 99)"}}>
                                            <u><ol>1. Resource Phase</ol></u>
                                                <li>Each player adds 1 resource to each of their heroes' resource pools.</li>
                                                <li>Player actions.</li>

                                                <br />

                                            <u><ol>2. Planning Phase</ol></u>
                                                <li>First player plays ally and attachment cards.</li>
                                                <li>Player actions.</li>
                                                <li>Next player plays ally and attachment cards, etc.</li>
                                                <li>Player actions.</li>

                                                <br />

                                            <u><ol>3. Quest Phase</ol></u>
                                                <li>Players commit characters to quest.</li>
                                                <li>Encounter deck reveals 1 card per player.</li>
                                                <li>Player actions.</li>
                                                <li>Resolve questing.</li>
                                                <li>Player actions.</li>

                                                <br />

                                            <u><ol>4. Travel Phase</ol></u>
                                                <li>Players may travel to 1 location if there is no currently active location.</li>
                                                <li>Player actions.</li>

                                                <br />

                                            <u><ol>5. Encounter Phase</ol></u>
                                                <li>Each player may choose and engage 1 enemy from the staging area.</li>
                                                <li>Player actions.</li>
                                                <li>Engagement checks are made.</li>
                                                <li>Player actions.</li>

                                                <br />

                                            <u><ol>6. Combat Phase</ol></u>
                                                <li>Deal 1 shadow card to each enemy.</li>
                                                <li>Player actions.</li>
                                                <li>First player resolves attacks made by enemies against them.</li>
                                                <li>Next player resolves attacks made by enemies against them, etc.</li>
                                                <li>First player declares and resolves attacks against their enemies.</li>
                                                <li>Next player declares and resolves attacks against their enemiesm etc.</li>
                                                <li>Player actions.</li>

                                                <br />

                                            <u><ol>7. Refresh Phase</ol></u>
                                                <li>Each player refreshes all cards they control.</li>
                                                <li>Each player raises their threat by 1.</li>
                                                <li>First player token passes to the next player on the left.</li>
                                                <li>Player actions.</li>
                                        </div>
                                    </div>
                                    <div className="modal-footer">
                                        <button className="btn btn-secondary" data-dismiss="modal" type="button">Close</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
        </div>
    )
}

export default RoundSequenceButton;
