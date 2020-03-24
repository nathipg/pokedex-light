import React from 'react';

const Card = props => {
    const classes = ['Card', props.type];
    const number = props.number.padStart(3, '0');
    
    return (
        <div className={classes.join(' ')}>
            <img src={`https://pokeres.bastionbot.org/images/pokemon/${props.number}.png`} alt={props.name} />
            <div className="number">
                <span>#{number}</span>
            </div>
            <h1 className="name">{props.name}</h1>
            <span className="type">Type: {props.type}</span>
        </div>
    );
};

export default Card;