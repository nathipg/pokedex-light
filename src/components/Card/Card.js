import React from 'react';

import { capitalize } from '../../util/utility';

import './Card.scss';

const Card = props => {
    const classes = ['Card', props.type];
    const number = (props.number + '').padStart(3, '0');
    
    return (
        <div className={classes.join(' ')}>
            <div className="imgContainer">
                <img src={`https://pokeres.bastionbot.org/images/pokemon/${props.number}.png`} alt={props.name} />
            </div>
            <div className="info">
                <div className="number">
                    <span>#{number}</span>
                </div>
                <h1 className="name">{capitalize(props.name)}</h1>
                <span className="type">Type: {props.type}</span>
            </div>
        </div>
    );
};

export default Card;