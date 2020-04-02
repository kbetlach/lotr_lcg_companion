import React from 'react';
import "./playerCard.css";
import Counter from "../Counter/Counter";
import ResourceImg from "../../assets/images/resource.png";
import ThreatImg from "../../assets/images/threat.png";
import DamageImg from "../../assets/images/damage.png";
import BackpackImg from "../../assets/images/backpack.png";

function PlayerCard() {
    return (
    <div>
        <div className="card">
            <div className="card-body">
                <div className="row">
                    <div className="col-md-6">
                        <h1><input className="player-name" placeholder="Player"></input></h1>
                    </div>
                    <div className="col-md-6 threat">
                        <u>Threat</u>
                        <img className="threatImg" src={ThreatImg}></img>
                        <Counter />
                    </div>
                </div>

                <hr />

                <div className="row">
                    <div className="col-md-4">
                        <u>Heroes</u>
                        <img className="backpackImg" src={BackpackImg}></img>
                    </div>
                    <div className="col-md-4">
                        <u>Damage</u>
                        <img className="damageImg" src={DamageImg}></img>
                    </div>
                    <div className="col-md-4">
                        <u>Resources</u>
                        <img className="resourceImg" src={ResourceImg}></img>
                    </div>
                </div>
                
                <div className="row">
                    <div className="col-md-4">
                        <input placeholder="Hero 1"></input>
                    </div>
                    <div className="col-md-4">
                        <Counter />
                    </div>
                    <div className="col-md-4">
                        <Counter />
                    </div>
                </div>

                <br />

                <div className="row">
                    <div className="col-md-4">
                        <input placeholder="Hero 2"></input>
                    </div>
                    <div className="col-md-4">
                        <Counter />
                    </div>
                    <div className="col-md-4">
                        <Counter />
                    </div>
                </div>

                <br />
                
                <div className="row">
                    <div className="col-md-4">
                        <input placeholder="Hero 3"></input>
                    </div>
                    <div className="col-md-4">
                        <Counter />
                    </div>
                    <div className="col-md-4">
                        <Counter />
                    </div>
                </div>
            </div>
        </div>
    </div>
        )
    }
        
export default PlayerCard;
