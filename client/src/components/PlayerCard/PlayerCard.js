import React, { useState } from "react";
import "./playerCard.css";
import UpkeepCounter from "../Counter/UpkeepCounter";
import DamageCounter from "../Counter/DamageCounter";
import UpkeepButton from "../Buttons/UpkeepButton/UpkeepButton";
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
                    <div className="col-md-5">
                        <h1><input className="player-name" placeholder="Player" type="text"></input></h1>
                    </div>
                    <div className="col-md-5 threat">
                        <u>Threat</u>
                        <img className="threatImg" src={ThreatImg} alt="threat token"></img>
                        <UpkeepCounter />
                    </div>
                    <div className="col-md-2">
                        <UpkeepButton />
                    </div>
                </div>

                <hr />

                <div className="row">
                    <div className="col-md-4">
                        <u>Heroes</u>
                        <img className="backpackImg" src={BackpackImg} alt="backpack token"></img>
                    </div>
                    <div className="col-md-4">
                        <u>Damage</u>
                        <img className="damageImg" src={DamageImg} alt="arrow damage token"></img>
                    </div>
                    <div className="col-md-4">
                        <u>Resources</u>
                        <img className="resourceImg" src={ResourceImg} alt="single resource token"></img>
                    </div>
                </div>
                
                <div className="row">
                    <div className="col-md-4">
                        <select id="heroOne">
                            <option value="Hero 1" onClick={heroDropdown}>Hero 1</option>
                        </select>
                    </div>
                    <div className="col-md-4">
                        <DamageCounter />
                    </div>
                    <div className="col-md-4">
                        <UpkeepCounter />
                    </div>
                </div>

                <br />

                <div className="row">
                    <div className="col-md-4">
                        <select id="heroTwo">
                            <option value="Hero 2">Hero 2</option>
                        </select>
                    </div>
                    <div className="col-md-4">
                        <DamageCounter />
                    </div>
                    <div className="col-md-4">
                        <UpkeepCounter />
                    </div>
                </div>

                <br />
                
                <div className="row">
                    <div className="col-md-4">
                        <select id="heroThree">
                            <option value="Hero 3">Hero 3</option>
                        </select>
                    </div>
                    <div className="col-md-4">
                        <DamageCounter />
                    </div>
                    <div className="col-md-4">
                        <UpkeepCounter />
                    </div>
                </div>
            </div>
        </div>
    </div>
        )
    }
        
export default PlayerCard;
