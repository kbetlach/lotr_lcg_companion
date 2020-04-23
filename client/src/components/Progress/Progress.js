import React from 'react';
import "./progress.css";
import ProgressImg from "../../assets/images/progress.png";
import QuestCounter from "../Counter/QuestCounter";

function Progress() {
    return (
        <div>
            <div className="card">
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-10">
                            <h2 style={{margin: 20}}>Quest Progress</h2>
                        </div>
                        <div className="col-md-2">
                            <img className="willpowerImg" src={ProgressImg} alt="willpower token"></img>
                        </div>
                    </div>

                    <hr />

                    <div className="row">
                        <div className="col-md-6">
                            <p>Committed Willpower</p>
                        </div>
                        <div className="col-md-6">
                            <QuestCounter />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-6">
                            <p>Active Location</p>
                        </div>
                        <div className="col-md-6">
                            <QuestCounter />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-6">
                            <p>Quest</p>
                        </div>
                        <div className="col-md-6">
                            <QuestCounter />
                        </div>
                    </div>
                 </div>
            </div>
        </div>
    )
}

export default Progress;