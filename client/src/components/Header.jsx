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
        navigate('/viewall')
    }

    return (
        <div className="header">
            <h1> Web Dev Flashcards </h1>
            <div className="navigationBar">
                <div className="navigationItem"><button type="button" className="btn btn-dark btn-lg" onClick={navigateToHome}><h2>Home</h2></button></div>
                <div className="navigationItem"><button type="button" className="btn btn-dark btn-lg" onClick={navigateToPractice}><h2>Practice</h2></button></div>
                <div className="navigationItem"><button type="button" className="btn btn-dark btn-lg" onClick={navigateToViewAll}><h2>View All</h2></button></div>
            </div>
        </div>
    )
}

export default Header;