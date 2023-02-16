import React, { useState } from 'react';
import Card from './Card';

const CardList = ({card, sets}) => {
    const [cardShowing, setCardShowing] = useState("");
    const getCardShowing = (cardKey) => {
        setCardShowing(cardKey)
    }
    return (
        <div className="cardContainer container">
            {card.map((card, i) =>
                <Card 
                    card={card} 
                    key={i} 
                    cardKey={`card-${i}`} 
                    sets={sets} 
                    onCardFlip={getCardShowing}
                    cardShowing={cardShowing}
                />
            )}
        </div>
    )
}

export default CardList;