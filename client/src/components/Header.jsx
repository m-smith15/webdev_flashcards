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
        //can track with state so it should persist thoughout the site
        setTheme(prevTheme => !prevTheme);

        if(theme === false){
            //header
            let newHeader = document.getElementsByClassName('header');
            newHeader[0].style.backgroundColor = 'lightgrey';
            //footer
            let newFooter = document.getElementsByClassName('footer');
            newFooter[0].style.backgroundColor = 'lightgrey';
            newFooter[0].style.color = 'black';
            //icon
            let updateIcon = document.querySelector('.lightdarkToggle h2');
            updateIcon.style.backgroundImage = "url('/assets/sun.png')";
            //button border
            let updateButtonBorder = document.querySelectorAll('.navigationItem button');
            for(let x = 0; x < updateButtonBorder.length; x++){
                updateButtonBorder[x].style.border = "black solid 1px";
            }
        } else{
            //header
            let newHeader = document.getElementsByClassName('header');
            newHeader[0].style.backgroundColor = '#000000e0';
            //footer
            let newFooter = document.getElementsByClassName('footer');
            newFooter[0].style.backgroundColor = '#000000e0';
            newFooter[0].style.color = 'lightgrey';
            //icon
            let updateIcon = document.querySelector('.lightdarkToggle h2');
            updateIcon.style.backgroundImage = "url('/assets/moon.png')";
            //button borders
            let updateButtonBorder = document.querySelectorAll('.navigationItem button');
            for(let x = 0; x < updateButtonBorder.length; x++){
                updateButtonBorder[x].style.border = "lightgrey solid 1px";
            }
        }
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