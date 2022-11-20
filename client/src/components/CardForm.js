import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CardForm = () => {
    const [cardTitle, setCardTitle] = useState("");
    const [cardDescription, setDescription] = useState("");
    const navigate = useNavigate();

    //preventDefault prevents page reload
    const formSubmitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/create/card', {
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