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
        //preventDefault prevents page reload
        axios.post(BASE_URL + '/api/create/card', card)
            .then(res => 
                console.log(res),
                // go back to view all?
                navigate('/viewall'))
            .catch(err => console.log(err))
    }

    return(
    <div>
        <h2>Create a new flashcard!</h2>
        <br/>
        <CardForm 
            onSubmitProp={createCard} 
            initialTitle={''} 
            initiaDesc={''} 
            inputVal={'Add Card'}/>
        <hr/>
        <button className='btn btn-dark' onClick={navigate(-1)}>
            Back
        </button>
    </div>
    )
}

export default Create;