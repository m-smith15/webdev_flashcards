import React, { useEffect, useState } from 'react';
import CardList from '../components/CardList';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const Practice = (props) => {
    //Conditionally render the api endpoint base url for production or development environment
    const BASE_URL = process.env.NODE_ENV === 'production'
    ? process.env.REACT_APP_SERVER_URL
    : 'http://localhost:8000'
    const [card, setCard] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const navigate = useNavigate();

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

    return (
        <div className="practice">
            <h1> Practice Time </h1>
            <div>Click on a flashcard to see the other side!</div>
            <hr /><br />
            {loaded ?
                <CardList card={card} removeFromDom={removeFromDom} /> //true
                :
                <div>I know its here somewhere...</div> //false
            }
            <hr />
        </div>
    )
}
export default Practice;
