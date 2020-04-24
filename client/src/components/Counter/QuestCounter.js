import React, { useState } from 'react';
import "./counter.css";

function QuestCounter() {

    let [count, setCount] = useState(0);

    if (count < 0) {
        count = 0;
    }

    return (
        <div>
            <div className="row">
                <div className="col-md-2">
                  <button i class="fas fa-minus" onClick={() => setCount(count - 1)}></button>
                </div>
                <div className="col-md-2">
                    <div className="count">{count}</div>
                </div>
                <div className="col-md-2">
                  <button i class="fas fa-plus" onClick={() => setCount(count + 1)}></button>
                </div>
                <div className="col-md-6"></div>
            </div>
        </div>
    )
}

export default QuestCounter;