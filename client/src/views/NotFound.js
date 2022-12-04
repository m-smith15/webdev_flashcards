import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
    const navigate = useNavigate();

    const navigateToPractice = () => {
        navigate('/practice')
    }

    const navigateToHome = () => {
        navigate('/')
    }

    return (
        <div>
            <h1>URL Not Found</h1>
            <p>The buttons below will bring you to the homepage or practice page</p>
            <button onClick={navigateToHome}>
                Back to homepage</button> |
            | <button onClick={navigateToPractice}>
                I'd like to practice!</button>
        </div>
    )
}

export default NotFound;