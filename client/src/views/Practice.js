import React, { useEffect, useState } from 'react';
import CardList from '../components/CardList';
import axios from 'axios';


const Practice = (props) => {
    //Conditionally render the api endpoint base url for production or development environment
    const BASE_URL = process.env.NODE_ENV === 'production'
        ? process.env.REACT_APP_SERVER_URL
        : 'http://localhost:8000'
    const [card, setCard] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [sets, setSets] = useState(0);

    useEffect(() => {
        axios.get(BASE_URL + '/api/card')
            .then(res => {
                console.log(res)
                setCard(res.data);
                setLoaded(true);
            })
            .catch(err => console.error(err));
    }, [sets]);

    const removeFromDom = cardId => {
        setCard(card.filter(card => card._id !== cardId));
    }

    //leaving this call in, potential to add gamification late
    // could add possiblity to call more than 3 cards
    //for now hard coded to another "set" of 3
    const newSet = (number)=> {
        setSets(sets+1)
    }

    return (
        <div className="practice">
            <h1> Practice Time </h1>
            <div>Click on a flashcard to see the other side!</div>
            <h2>Number of Sets: {sets}</h2>
            <button onClick={() => newSet(1)}>Another set?</button>
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
