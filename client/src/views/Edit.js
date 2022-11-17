import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const Update = (props) => {
    const { id } = useParams();
    const [cardTitle, setCardTitle] = useState("");
    const [cardDescription, setcardDescription] = useState("");
    const navigate = useNavigate();

    useEffect((id) => {
        axios.get('http://localhost:8000/api/card/' + id)
            .then(res => {
                setCardTitle(res.data.cardTitle);
                setcardDescription(res.data.cardDescription);
            })
    }, []);

    const updateCard = e => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/card/' + id, {
            cardTitle,
            cardDescription
        })
            .then(res => 
                console.log(res),
                navigate('/'))
            .catch(err => console.error(err));
    }


    const deleteCard = (cardId) => {
        axios.delete('http://localhost:8000/api/card/' + cardId)
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
                        onChange={(e) => { setcardDescription(e.target.value) }} />
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