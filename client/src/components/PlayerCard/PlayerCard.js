import React from 'react';
import "./playerCard.css";
import HealthCounter from "../Counters/HealthCounter/HealthCounter";
import ThreatCounter from '../Counters/ThreatCounter/ThreatCounter';
import ResourceCounter from '../Counters/ResourceCounter/ResourceCounter';

function PlayerCard() {
    return (
    <div>
        <div className="card">
            <div className="card-body">
                <div className="row">
                    <div className="col-md-8">
                        <h1><input className="player-name" placeholder="Player"></input></h1>
                    </div>
                    <div className="col-md-4">
                        <ThreatCounter />
                    </div>
                </div>

                <hr />
                
                <div className="row">
                    <div className="col-md-4">
                        <input placeholder="Hero 1"></input>
                    </div>
                    <div className="col-md-4">
                        <HealthCounter />
                    </div>
                    <div className="col-md-4">
                        <ResourceCounter />
                    </div>
                </div>

                <br />

                <div className="row">
                    <div className="col-md-4">
                        <input placeholder="Hero 2"></input>
                    </div>
                    <div className="col-md-4">
                        <HealthCounter />
                    </div>
                    <div className="col-md-4">
                        <ResourceCounter />
                    </div>
                </div>

                <br />
                
                <div className="row">
                    <div className="col-md-4">
                        <input placeholder="Hero 3"></input>
                    </div>
                    <div className="col-md-4">
                        <HealthCounter />
                    </div>
                    <div className="col-md-4">
                        <ResourceCounter />
                    </div>
                </div>
            </div>
        </div>
    </div>
        )
    }
        
export default PlayerCard;
