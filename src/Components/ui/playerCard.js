import React from 'react';

const playerCard = (props) => {
    return (
        <div className="player_card_wrapper">
            <div 
                className="player_card_thmb"
                style={{background : `#f2f9ff url(${props.bck})`}}
                >
            </div>
            <div className="player_card_number">
                <span>{props.number}</span>
            </div>
            <div className="player_card_name">
                <span>{props.name}</span>
                <span>{props.firstName}</span>
            </div>
        </div>
    );
};

export default playerCard;