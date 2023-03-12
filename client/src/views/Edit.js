import React, { useEffect, useState } from 'react'
import axios from 'axios';
import CardForm from '../components/CardForm';
import { useParams, useNavigate } from 'react-router-dom';

const Update = () => {
    const { id } = useParams();
    const [card, setCard] = useState();
    const [loaded, setLoaded] = useState(false);
    const [errors, setErrors] = useState([]);
    //Conditionally render the api endpoint base url 
    const BASE_URL = process.env.NODE_ENV === 'production'
        // for production 
        ? process.env.REACT_APP_SERVER_URL
        // or development environment
        : 'http://localhost:8000'
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
            .then(res => navigate('/viewall'))
                // after editing go to viewall
            .catch(err => {
                // Unpack errors into iterable array
                const errorResponse = err.response.data.errors;
                const errorArr = [];
                for (const key of Object.keys(errorResponse)) {
                    errorArr.push(errorResponse[key].message)
                }
                setErrors(errorArr);});
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
                    <h1>{card.cardTitle}</h1>
                    <CardForm
                        // pass update fn and text to form
                        onSubmitProp={updateCard}
                        errors={errors}
                        initialTitle={card.cardTitle}
                        initialDesc={card.cardDescription}
                        inputVal='Update'
                    />
                    <button className='btn btn-dark me-2' onClick={() => navigate(-1)}>
                        <i className="bi bi-arrow-left-circle me-2"></i>
                        Go Back
                    </button>
                    <button className='btn btn-danger ms-2' onClick={() => deleteCard(card._id)}>
                        Delete  
                        <i className="bi bi-trash3 ms-2"></i>
                    </button>
                </>)}
        </div>
    )
}
export default Update;