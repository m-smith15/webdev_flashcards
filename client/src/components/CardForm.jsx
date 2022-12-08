import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

//Conditionally render the api endpoint base url for production or development environment
//Add https://webdev-flashcards-backend.vercel.app as REACT_APP_SERVER_URL in vercel env var
const BASE_URL = process.env.NODE_ENV === 'production'
    ? process.env.REACT_APP_SERVER_URL
    : 'http://localhost:8000'

const CardForm = () => {
    const [cardTitle, setCardTitle] = useState("");
    const [cardDescription, setDescription] = useState("");
    const navigate = useNavigate();

    //preventDefault prevents page reload
    const formSubmitHandler = (e) => {
        e.preventDefault();
        axios.post(BASE_URL + '/api/create/card', {
            cardTitle,
            cardDescription
        })
            .then(res => 
                console.log(res),
                navigate("/"))
            .catch(err => console.log(err))
    }

    return (
        <div>
            <form onSubmit={formSubmitHandler}>
                <div>
                    <label>Title</label>
                    <input type="text" onChange={(e) => setCardTitle(e.target.value)} value={cardTitle} />
                </div>
                <div>
                    <label>Description</label>
                    <textarea onChange={(e) => setDescription(e.target.value)} value={cardDescription} />
                </div>
                <input type="submit" value="Add Card" />
            </form>
        </div>
    )
}

export default CardForm