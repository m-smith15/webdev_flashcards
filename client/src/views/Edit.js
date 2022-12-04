import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const Update = (props) => {
    const { id } = useParams();
    const uri = 'https://webdev-flashcards-backend.vercel.app/'
    const [cardTitle, setCardTitle] = useState("");
    const [cardDescription, setCardDescription] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(uri + 'api/card/' + id)
            .then(res => {
                setCardTitle(res.data.cardTitle);
                setCardDescription(res.data.cardDescription);
            })
    }, []);

    const updateCard = e => {
        e.preventDefault();
        axios.put('https://webdev-flashcards-backend.vercel.app/api/card/' + id, {
            cardTitle,
            cardDescription
        })
            .then(res => 
                console.log(res),
                navigate('/'))
            .catch(err => console.error(err));
    }


    const deleteCard = (cardId) => {
        axios.delete('https://webdev-flashcards-backend.vercel.app/api/card/' + cardId)
            .then(res => {
                navigate("/");
            })
            .catch(err => console.error(err));
    }

    const navigateToHome = () => {
        navigate('/')
    }


    return (
        <div>
            <h1>Update a Card</h1>
            <form onSubmit={updateCard}>
                <p>
                    <label>Card</label><br />
                    <input type="text"
                        name="cardTitle"
                        value={cardTitle}
                        onChange={(e) => { setCardTitle(e.target.value) }} />
                </p>
                <p>
                    <label>cardDescription</label><br />
                    <textarea type="text"
                        name="cardDescription"
                        value={cardDescription}
                        onChange={(e) => { setCardDescription(e.target.value) }} />
                </p>
                <input type="submit" value="Update Flashcard" />
            </form> <br />
            <button onClick={navigateToHome}>
                Back to home
            </button> |
            | <button onClick={(e) => { deleteCard(id) }}>
                Delete Card
            </button>
        </div>
    )
}
export default Update;