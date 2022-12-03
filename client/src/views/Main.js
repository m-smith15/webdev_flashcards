import React from 'react';
import { useNavigate } from 'react-router-dom';


const Main = (props) => {
    const navigate = useNavigate();
    
    const navigateToPractice = () => {
        navigate('/practice')
    }

    return (
        <div>
            <h1>WebDev Flashcards</h1>
            <p>Welcome to webdev flashcards! <br />
                The purpose of this app is to help aspiring webdevs practice and study up on concepts within the industry</p>
            <hr />
            <div>Ready to get practicing?</div>
            <button onClick={navigateToPractice}>
                Lets get moving!</button>
        </div>
    )
}

export default Main;