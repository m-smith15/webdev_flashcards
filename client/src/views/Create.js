import React, { useState } from 'react';
import CardForm from '../components/CardForm';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const Create = () => {
    const navigate = useNavigate();
    const [errors, setErrors] = useState([]);
    //Conditionally render the api endpoint base url
    const BASE_URL = process.env.NODE_ENV === 'production'
        // for production 
        ? process.env.REACT_APP_SERVER_URL
        // or development environment
        : 'http://localhost:8000';
    const createCard = card => {
        axios.post(BASE_URL + '/api/create/card', card)
            .then(res => {
                console.log(res)
                navigate('/viewall')
                })
                // on success go back to view all
            .catch(err => {
                // Unpack errors into iterable array
                const errorResponse = err.response.data.errors;
                const errorArr = [];
                for (const key of Object.keys(errorResponse)) {
                    errorArr.push(errorResponse[key].message)
                }
                setErrors(errorArr);})
    }

    return (
        <div>
            <h2>Create a new flashcard!</h2>
            <br />
            <CardForm
                onSubmitProp={createCard}
                errors={errors}
                initialTitle=''
                initiaDesc=''
                inputVal='Add Card' />
            <hr />
            <button className='btn btn-dark' onClick={() => navigate(-1)}>
                <i className="bi bi-arrow-left-circle me-2"></i>
                Go Back
            </button>
        </div>
    )
}

export default Create;