import React, { useEffect, useState } from 'react'
import axios from 'axios';
import CardForm from '../components/CardForm';
import { useParams, useNavigate } from 'react-router-dom';

const Update = () => {
    const { id } = useParams();
    //Conditionally render the api endpoint base url 
    const BASE_URL = process.env.NODE_ENV === 'production'
        // for production 
        ? process.env.REACT_APP_SERVER_URL
        // or development environment
        : 'http://localhost:8000'
    const [card, setCard] = useState();
    const [loaded, setLoaded] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(BASE_URL + '/api/card/' + id)
            .then(res => {
                setCard(res.data);
                setLoaded(true);
            })
    }, []);

    const updateCard = card => {
        axios.put(BASE_URL + '/api/card/' + id, card)
            .then(res => 
                console.log(res),
                // after editing go to viewall?
                // going back risks not loading the update on the card.
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

    return (
        <div>
            {loaded && (
            <>
                <h1>Update a Card</h1>
                <CardForm 
                    // pass update fn and text to form
                    onSubmitProp={updateCard} 
                    initialTitle={card.cardTitle} 
                    initialDesc={card.cardDescription} 
                    inputVal={'Update'}
                    />
                <button className='btn btn-danger me-2' onClick={() => deleteCard(card._id)}>
                    Delete
                </button> 
                || 
                <button className='btn btn-dark ms-2' onClick={() => navigate(-1)}>
                    Back
                </button> 
                </>)}
        </div>
    )
}
export default Update;