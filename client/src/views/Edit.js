import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const Update = (props) => {
    const { id } = useParams();
    //Conditionally render the api endpoint base url 
    const BASE_URL = process.env.NODE_ENV === 'production'
    // for production 
    ? process.env.REACT_APP_SERVER_URL
    // or development environment
    : 'http://localhost:8000'
    const [cardTitle, setCardTitle] = useState("");
    const [cardDescription, setCardDescription] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(BASE_URL + '/api/card/' + id)
            .then(res => {
                setCardTitle(res.data.cardTitle);
                setCardDescription(res.data.cardDescription);
            })
    }, []);

    const updateCard = e => {
        e.preventDefault();
        axios.put(BASE_URL + '/api/card/' + id, {
            cardTitle,
            cardDescription
        })
            .then(res => 
                console.log(res),
                // after editing go back
                navigate(-1))
            .catch(err => console.error(err));
    }


    const deleteCard = (cardId) => {
        axios.delete(BASE_URL + '/api/card/' + cardId)
            .then(res => {
                navigate(-1);
            })
            .catch(err => console.error(err));
    }
    // The home button in the header demands that this be
    // changed to a back button? Gods? What say ye?
    const navigateBack = () => {
        navigate(-1)
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
                <input type="submit" className='btn btn-sm btn-success' value="Update Flashcard" />
                || 
                <button className='btn btn-sm btn-danger' onClick={(e) => { deleteCard(id) }}>
                    Delete Card
                </button>
            </form> <br />
            <button onClick={() => navigate(-1)}>
                Back
            </button> 
        </div>
    )
}
export default Update;