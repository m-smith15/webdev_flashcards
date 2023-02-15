import React from 'react';
import Card from './Card';

const CardList = (props) => {
    return (
        <div className="cardContainer container">
            {props.card.map((card, i) =>
                <Card card={card} key={`card-${i}`}/>
            )}
        </div>
    )
}

export default CardList;