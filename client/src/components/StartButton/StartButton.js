import React from 'react';
import {Link} from "react-router-dom";

function StartButton() {
    return (
        <div>
            <Link to="/quest"
                className={
                    window.location.pathname === "/quest"
            }>
                <button type="button"
                    style={
                        {
                            width: "300px",
                            height: "50px",
                            fontSize: "24px",
                            backgroundColor: "white",
                            color: "rgb(99, 99, 99)",
                            borderRadius: "6px",
                            border: ".5px solid white",
                            padding: 5,
                            fontFamily: "MiddleEarth",
                            cursor: "pointer"
                        }
                }>
                    Start Quest
                </button>
            </Link>
        </div>
    )
}

export default StartButton;