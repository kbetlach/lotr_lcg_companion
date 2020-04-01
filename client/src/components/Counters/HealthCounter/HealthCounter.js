import React, { useState } from 'react';
import "./healthCounter.css";

function HealthCounter() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <div className="row">
                <div className="col-md-2">
                  <button i class="fas fa-minus" onClick={() => setCount(count - 1)}></button>
                </div>
                <div className="col-md-2 align-items-center">
                    <p>{count}</p>
                </div>
                <div className="col-md-2">
                  <button i class="fas fa-plus" onClick={() => setCount(count + 1)}></button>
                </div>
                <div className="col-md-6"></div>
            </div>
        </div>
    )
}

export default HealthCounter;