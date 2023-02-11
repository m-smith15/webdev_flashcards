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
        <ReactCardFlip isFlipped={isFlipped} flipDirection='horizontal'>
            <div className="card front" onClick={()=>setIsFlipped((prev) => !prev)}>
                <div className="title">
                    {card.cardTitle}
                </div>
                <div className='edit'>
                    <button onClick={() => { editCard(card._id) }} className="btn btn-sm btn-secondary">
                        Edit
                    </button>
                </div>
            </div>
            <div className="description card" onClick={()=>setIsFlipped((prev) => !prev)}>
                <h5>{card.cardTitle}</h5>
                <hr class="line"/>
                <hr class="line"/>
                <hr class="line"/>
                <hr class="line"/>
                <hr class="line"/>
                <hr class="line"/>
                <hr class="line"/>
                <hr class="line"/>
                <hr class="line"/>
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