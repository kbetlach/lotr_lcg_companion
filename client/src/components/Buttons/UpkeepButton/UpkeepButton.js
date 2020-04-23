import React, { useState } from 'react';
import "../../Counter/UpkeepCounter";

function UpkeepButton() {

    let [count, setCount] = useState(0);

    if (count < 0) {
        count = 0;
    }

    return (
        <div>
            <button type="button"
                style={
                    {
                        width: "100px",
                        height: "50px",
                        fontSize: "18px",
                        backgroundColor: "white",
                        color: "rgb(99, 99, 99)",
                        borderRadius: "6px",
                        border: ".5px solid white",
                        padding: 5,
                        fontFamily: "MiddleEarth",
                        cursor: "pointer",
                        position: "absolute",
                        right: "25px",
                        bottom: "25px"
                    }
            }>
                Upkeep
            </button>
        </div>
    )
}

export default UpkeepButton;
