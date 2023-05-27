import React from 'react';

const Card = ({taskObj, index}) => {
    return (
        <div class = "card-wrapper mr-5">
            <div class = "card-top" style={{"background-Color": "chartreuse"}}></div>
            <div class = "task-holder">
                <span class = "card-header" style={{"background-Color": "#F2FAF1", "border-radius": "10px"}}>{taskObj.Name}</span>
                <p>{taskObj.Description}</p>

                <div style={{"position": "absolute", "right": "20px", "bottom": "20px"}}>
                    <i class = "far fa-edit" style={{"color": "#5DC250"}}></i>
                    <i class = "far fa-trash-alt" style={{"color": "#5DC250"}}></i>
                </div>
            </div>
        </div>
    );
};

export default Card;