import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();
    const [setTheme, theme] = useState(false);

    const navigateToPractice = () => {
        navigate('/practice')
    }
    const navigateToHome = () => {
        navigate('/')
    }
    const navigateToViewAll = () => {
        navigate('/viewall')
    }
    const toggleThemeChange = (theme) => {
        console.log(theme);
        setTheme(!theme);
        console.log(theme);
    }

    return (
        <div className="header">
            <h1>WebDev Flashcards</h1>
            <div className="navigationBar">
                <div className="navigationItem"><button type="button" className="btn btn-dark" onClick={navigateToHome}><h2>Home</h2></button></div>
                <div className="navigationItem"><button type="button" className="btn btn-dark" onClick={navigateToPractice}><h2>Practice</h2></button></div>
                <div className="navigationItem"><button type="button" className="btn btn-dark" onClick={navigateToViewAll}><h2>View All</h2></button></div>
                <div className="navigationItem lightdarkToggle">
                    <h2>
                        <label class="switch">
                            <input type="checkbox" onClick={toggleThemeChange}/>
                            <span class="slider" />
                        </label>
                    </h2>
                    </div>
            </div>
        </div>
    )
}

export default Header;