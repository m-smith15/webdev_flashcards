import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ReactCardFlip from 'react-card-flip';

const Card = ({card}) => {
    const navigate = useNavigate();
    const [isFlipped, setIsFlipped] = useState(false);
    //passing sets in from Practice view - going to use this to reset the "showDescription" to false

    const editCard = (cardId) => {
        navigate('/edit/' + cardId)
    }

    return (
        <ReactCardFlip className="card" isFlipped={isFlipped} flipDirection='horizontal'>
            <div className="title CardFront" onClick={()=>setIsFlipped((prev) => !prev)}>
                {card.cardTitle}
                <button onClick={() => { editCard(card._id) }} className="btn btn-sm btn-secondary">
                    Edit
                </button>
            </div>
            <div className="description CardBack" onClick={()=>setIsFlipped((prev) => !prev)}>
                <h5>{card.cardTitle}</h5><br/>
                <hr class="blueline"/>
                <hr class="blueline"/>
                <hr class="blueline"/>
                <hr class="blueline"/>
                <hr class="blueline"/>
                <hr class="blueline"/>
                <hr class="blueline"/>
                <hr class="blueline"/>
                <hr class="blueline"/>
                <p>{card.cardDescription}</p>
            </div>
        </ReactCardFlip>
    )
}

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