import React, { useState } from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const CardList = (props) => {
    const navigate = useNavigate();
    const [showDescription, setShowDescription] = useState(false);

    const { removeFromDom } = props;
    const deleteCard = (cardId) => {
        axios.delete('http://localhost:8000/api/card/' + cardId)
            .then(res => {
                removeFromDom(cardId)
            })
            .catch(err => console.error(err));
    }

    const flipCard = (e) => {
        setShowDescription(showDescription => !showDescription);
    }

    const editCard = (cardId) => {
        navigate('/edit/' + cardId)
    }

    return (
        <div className="cardContainer container">
            {props.card.map((card, i) =>
                <div className="card" key={i} onClick={(e) => { flipCard() }}>
                    {showDescription ?
                    <div className="description">| Description | <br/> {card.cardDescription}</div> //true
                        :
                    <div className="title">| Title | <br/> {card.cardTitle}</div> //false (starts false by default)
                    }
                    <br />
                    <button onClick={(e) => { editCard(card._id)}} className="btn btn-secondary">
                        Edit
                    </button>
                    <button onClick={(e) => { deleteCard(card._id) }} className="btn btn-secondary">
                        Delete
                    </button>
                </div>
            )}
        </div>
    )
}

export default CardList;