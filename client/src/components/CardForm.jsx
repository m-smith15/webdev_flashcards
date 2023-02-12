import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

//Conditionally render the api endpoint base url for production or development environment
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
            <form onSubmit={formSubmitHandler} className='col-4 m-auto'>
                <div className='mb-3 form-floating'>
                    <input type='text' id='title' className='form-control h-25' onChange={(e) => setCardTitle(e.target.value)} value={cardTitle} placeholder='RDBMS'/>
                    <label for='title'>Title</label>
                </div>
                <div className='mb-3 form-floating'>
                    <textarea id='desc' className='form-control h-100' rows='6' onChange={(e) => setDescription(e.target.value)} value={cardDescription} placeholder='(Relational Database Management System) i.e. MySql, Postgres, etc.'/>
                    <label for='desc'>Description</label>
                </div>
                <input className='btn btn-dark btn-md' type='submit' value='Add Card' />
            </form>
        </div>
    )
}

export default CardForm