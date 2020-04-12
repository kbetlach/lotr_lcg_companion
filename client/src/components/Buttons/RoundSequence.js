import React from 'react';

function RoundSequenceButton() {
    return (
        <div>
            <button type="button" data-target="#sequenceModal" data-toggle="modal"
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
                Round Sequence
            </button>

            <div aria-hidden="true" aria-labelledby="sequenceModalLabel" class="modal fade" id="sequenceModal" role="dialog" tabindex="-1">
                        <div class="modal-dialog" role="document">
                            <div class="modal-content">
                                <div class="modal-header" style = {{backgroundColor: "darkslategray"}}>
                                    <h5 style = {{color: 'white'}} class="modal-title" id="sequenceModal">Round Sequence Order</h5>
                                    <button style = {{color: 'white'}} aria-label="Close" class="close" data-dismiss="modal" type="button">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <form id="roundSequence">
                                    <div class="modal-body">
                                        <div class="form-group" style={{textAlign: "left", fontSize: "20px"}}>

                                        </div>
                                        <div class="form-group" style={{textAlign: "left", fontSize: "20px"}}>

                                        </div>
                                    </div>
                                    <div class="modal-footer">
                                        <button class="btn btn-secondary" data-dismiss="modal" type="button">Close</button>
                                        <button style = {{color: 'white', backgroundColor: "darkslategray", border: '.5 px solid white'}} class = "btn" type="submit">Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
        </div>
    )
}

export default RoundSequenceButton;
