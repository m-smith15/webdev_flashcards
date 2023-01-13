import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();

    const navigateToPractice = () => {
        navigate('/practice')
    }

    return (
        <div className="header">
            <h1> Web Dev Flashcards </h1>
            <div className="navigationBar">
                <div className="navigationItem"><h2>Home</h2></div>
                <div className="navigationItem"><h2>Practice</h2></div>
                <div className="navigationItem"><h2>View All</h2></div>
            </div>
        </div>
    )
}

export default Header;