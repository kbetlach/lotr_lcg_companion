import React from 'react';
import "../../Counter/Counter";

function UpkeepButton(props) {
    return (
        <div>
            <button type="button"
                style={
                    {
                        width: "125px",
                        height: "50px",
                        fontSize: "18px",
                        backgroundColor: "white",
                        color: "rgb(99, 99, 99)",
                        borderRadius: "6px",
                        border: ".5px solid white",
                        padding: 5,
                        fontFamily: "MiddleEarth",
                        cursor: "pointer"
                    }
            }>
                Upkeep
            </button>
        </div>
    )
}

export default UpkeepButton;
