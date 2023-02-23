import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();
    const [theme, setTheme] = useState(false);

    const navigateToPractice = () => {
        navigate('/practice')
    }
    const navigateToHome = () => {
        navigate('/')
    }
    const navigateToViewAll = () => {
        navigate('/viewall')
    }
    const toggleThemeChange = () => {
        //true is night, false is light
        setTheme(prevTheme => !prevTheme);
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
                    <h2>Theme
                    </h2>
                        <label className="switch">
                            <input type="checkbox" onClick={toggleThemeChange}/>
                            <span className="slider" />
                        </label>
                    </div>
            </div>
        </div>
    )
}

export default Header;