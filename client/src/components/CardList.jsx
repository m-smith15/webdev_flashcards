import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const CardList = (props) => {
    const navigate = useNavigate();
    const [showDescription, setShowDescription] = useState(null);
    //passing sets in from Practice view - going to use this to reset the "showDescription" to false

    //this will reset setShowDescription to null when the set counter increases
    useEffect(() => {
            if(props.sets > 0) {
                setShowDescription(null);
            }
    }, [props.sets])

    const editCard = (cardId) => {
        navigate('/edit/' + cardId)
    }

    return (
        <div className="cardContainer container">
            {props.card.map((card, i) =>
                <div className="card" key={i} onClick={() => { setShowDescription(i) }}>
                    {showDescription === i ?
                        <div className="description">
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
                        </div> //true
                        :
                        <div className="title">{card.cardTitle}</div> //false (starts false by default)
                    }
                    <br />
                    <button onClick={() => { editCard(card._id) }} className="btn btn-sm btn-secondary">
                        Edit
                    </button>
                </div>
            )}
        </div>
    )
}

export default CardList;