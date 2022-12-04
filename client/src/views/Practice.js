import React, { useEffect, useState } from 'react';
import CardList from '../components/CardList';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const Practice = (props) => {
    const uri = 'https://webdev-flashcards-backend.vercel.app/'
    const [card, setCard] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(uri + 'api/card')
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

    const navigateToHome = () => {
        navigate('/')
    }
    
    const navigateToCreate = () => {
        navigate('/create')
    }

    return (
        <div>
            <h1> Practice Time </h1>
            <div>See one that needs to be added?</div>
            <button onClick={navigateToCreate}>
                Create a new flashcard!</button>
            <hr /><br />
            {loaded && <CardList card={card} removeFromDom={removeFromDom} />}
            <hr />
            <button onClick={navigateToHome}>
                Back to home
            </button>
        </div>
    )
}
export default Practice;
