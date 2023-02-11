import React, { useEffect, useState } from 'react';
import CardList from '../components/CardList';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const ViewAll = (props) => {
    //Conditionally render the api endpoint base url for production or development environment
    const BASE_URL = process.env.NODE_ENV === 'production'
    ? process.env.REACT_APP_SERVER_URL
    : 'http://localhost:8000'
    const [card, setCard] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const navigate = useNavigate();

    //getting all cards
    useEffect(() => {
        axios.get(BASE_URL + '/api/card')
            .then(res => {
                console.log(res)
                setCard(res.data);
                setLoaded(true);
            })
            .catch(err => console.error(err));
    }, []);

        const removeFromDom = cardId => {
        setCard(card.filter(card => card._id !== cardId));
    }

    const navigateToCreate = () => {
        navigate('/create')
    }

    return (
        <div className="viewall">
            <h1> Viewing All Flashcards</h1>
            <div>See one that needs to be added?</div>
            <button onClick={navigateToCreate}>
                Create a new flashcard!</button>
            <hr /><br />
            {loaded ?
                <CardList card={card} removeFromDom={removeFromDom} /> //true
                :
                <div class="d-flex align-items-center justify-content-center">
                    <strong>I know they're here somewhere...</strong>
                    <div class="spinner-border ms-5" role="status" aria-hidden="true"></div>
                </div> //false
            }
        </div>
    )

}

export default ViewAll;