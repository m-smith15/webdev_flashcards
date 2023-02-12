import React from 'react';
import CardForm from '../components/CardForm';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const Create = (props) => {
    const navigate = useNavigate();
    //Conditionally render the api endpoint base url
    const BASE_URL = process.env.NODE_ENV === 'production'
        // for production 
        ? process.env.REACT_APP_SERVER_URL
        // or development environment
        : 'http://localhost:8000'
    const createCard = (e) => {
        //preventDefault prevents page reload
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
    // Goes Back. Don't care where, just goin' back...
    const navigateBack = () => {
        navigate(-1)
    }

    return(
    <div>
        <h2>Create a new flashcard!</h2>
        <br/>
        <CardForm formSubmitHandler={createCard} title={''} desc={''} inputVal={'Add Card'}/>
        <hr/>
        <button className='btn btn-dark' onClick={navigateBack}>
            Back
        </button>
    </div>
    )
}

export default Create;