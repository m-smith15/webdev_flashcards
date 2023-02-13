import React, { useState } from 'react';
import CardForm from '../components/CardForm';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const Create = () => {
    const navigate = useNavigate();
    //Conditionally render the api endpoint base url
    const BASE_URL = process.env.NODE_ENV === 'production'
        // for production 
        ? process.env.REACT_APP_SERVER_URL
        // or development environment
        : 'http://localhost:8000';
    const createCard = card => {
        axios.post(BASE_URL + '/api/create/card', card)
            .then(res =>
                console.log(res),
                // go back to view all
                navigate('/viewall'))
            .catch(err => console.log(err))
    }

    return (
        <div>
            <h2>Create a new flashcard!</h2>
            <br />
            <CardForm
                onSubmitProp={createCard}
                initialTitle={''}
                initiaDesc={''}
                inputVal={'Add Card'} />
            <hr />
            <button className='btn btn-dark' onClick={() => navigate(-1)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left-circle me-2" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z" />
                </svg>
                Go Back
            </button>
        </div>
    )
}

export default Create;