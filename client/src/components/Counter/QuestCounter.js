import React from 'react';
import UpkeepButton from "../Buttons/UpkeepButton/UpkeepButton";
import "./counter.css";

function QuestCounter(props) {

    return (
        <div>
            <div className="row">
                <div className="col-md-2">
                  <button i class="fas fa-minus" onClick={() => props.setCount(props.count - 1)}></button>
                </div>
                <div className="col-md-2">
                    <div className="count">{props.count}</div>
                </div>
                <div className="col-md-2">
                  <button i class="fas fa-plus" onClick={() => props.setCount(props.count + 1)}></button>
                </div>
                <div className="col-md-6"></div>
            </div>
        </div>
    )
}

export default QuestCounter;