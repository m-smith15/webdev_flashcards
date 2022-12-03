import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CardList = (props) => {
    const navigate = useNavigate();
    const [showDescription, setShowDescription] = useState(null);

    const editCard = (cardId) => {
        navigate('/edit/' + cardId)
    }

    return (
        <div className="cardContainer container">
            {props.card.map((card, i) =>
                <div className="card" key={i} onClick={() => { setShowDescription(i) }}>
                    {showDescription === i ?
                    <div className="description"><u>Description</u><br/> {card.cardDescription}</div> //true
                        :
                    <div className="title"><u>Title</u><br/> {card.cardTitle}</div> //false (starts false by default)
                    }
                    <button onClick={() => { editCard(card._id)}} className="btn btn-sm btn-secondary">
                        Edit
                    </button>
                    <br />
                </div>
            )}
        </div>
    )
}

export default CardList;