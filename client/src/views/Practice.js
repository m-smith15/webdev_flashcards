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
    const [cardShowing, setCardShowing] = useState("");

    useEffect(() => {
        axios.get(BASE_URL + '/api/random')
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
        setSets(sets+1);
        setCardShowing("");
    }

    return (
        <div className="practice">
            <h1> Practice Time </h1>
            <h2>Number of Sets: {sets}</h2>
            <button type="button" className="btn btn-light mb-2" onClick={() => newSet(1)}>Another set?</button>
            <p>Click on a flashcard to see the other side!</p>
            <hr /><br />
            {loaded ?
                <CardList //true
                    card={card} 
                    removeFromDom={removeFromDom} 
                    sets={sets} 
                    cardShowing={cardShowing}
                    setCardShowing={setCardShowing}
                />
                :
                <div className="d-flex align-items-center justify-content-center">
                    <strong>I know they're here somewhere...</strong>
                    <div className="spinner-border ms-5" role="status" aria-hidden="true"></div>
                </div> //false
            }
            <hr />
        </div>
    )
}
export default Practice;
