import React from 'react';
import "./willpower.css";
import ProgressImg from "../../assets/images/progress.png";

function Willpower() {
    return (
        <div>
            <div className="card">
                <div className="card-body">
                    <img className="willpowerImg" src={ProgressImg}></img>
                    Willpower lol
                </div>
            </div>
        </div>
    )
}

export default Willpower;