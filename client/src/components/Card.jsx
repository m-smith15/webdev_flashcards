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
                        {/* SVG edit icon */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                            <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                        </svg>
                    </button>
                </div>
            </div>
        </ReactCardFlip>
    )
}

export default Card