import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import ReactCardFlip from 'react-card-flip';

const Card = (props) => {
    const {card, sets, cardKey, onCardFlip, cardShowing} = props;
    const navigate = useNavigate();
    const [isFlipped, setIsFlipped] = useState(false);
    // Change in set resets cards
    useEffect(() => {
        setIsFlipped(false)
        
    }, [sets])
    // Change in cardShowing unflips all but the match to cardKey
    useEffect(() => {
        setIsFlipped( cardKey == cardShowing ? true : false)
    }, [cardShowing])
    // lifts state of the card displayed to CardList parent component
    // if cardKey matches the cardShowing, clear cardShowing, otherwise replace it
    const flipCard = () => cardKey == cardShowing ? onCardFlip("") : onCardFlip(cardKey)
    const editCard = (cardId) => {
        navigate('/edit/' + cardId)
    }
    return (
        <ReactCardFlip isFlipped={isFlipped} flipDirection='vertical'>
            <div className="card front" onClick={()=>flipCard()}>
                <div className="title m-5">
                    {card.cardTitle}
                </div>
            </div>
            <div className="description card" onClick={()=>flipCard()}>
                <h5>{card.cardTitle}</h5>
                <hr className="line"/>
                <hr className="line"/>
                <hr className="line"/>
                <hr className="line"/>
                <hr className="line"/>
                <hr className="line"/>
                <hr className="line"/>
                <hr className="line"/>
                <hr className="line"/>
                <p>{card.cardDescription}</p>
                <div className='edit'>
                    <button onClick={() => { editCard(card._id) }} className="btn btn-sm btn-outline-danger border border-0">
                        <i className="bi bi-pencil-square"></i>
                    </button>
                </div>
            </div>
        </ReactCardFlip>
    )
}

export default Card