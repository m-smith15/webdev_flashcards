import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();

    const navigateToPractice = () => {
        navigate('/practice')
    }
    const navigateToHome = () => {
        navigate('/')
    }
    const navigateToViewAll = () => {
        navigate('/view/all')
    }

    return (
        <div className="header">
            <h1> Web Dev Flashcards </h1>
            <div className="navigationBar">
                <div className="navigationItem"><h2><button onClick={navigateToHome}>Home</button></h2></div>
                <div className="navigationItem"><h2><button onClick={navigateToPractice}>Practice</button></h2></div>
                <div className="navigationItem"><h2><button onClick={navigateToViewAll}>View All</button></h2></div>
            </div>
        </div>
    )
}

export default Header;