import React from 'react';

const Footer = () => {

    return (
        <div className="footer">
            <div className="acknoledgement">A huge thank you to the following folks for their time and energy in making this project a reality:
                <ul>
                    <li>Mack Smith (he/him) <a href="https://www.linkedin.com/in/macksmithlambeau/">LinkedIn </a> | <a href="https://github.com/m-smith15">GitHub</a></li>
                    <li>Coren Frankel (he/they) <a href="https://www.linkedin.com/in/coren-frankel">LinkedIn </a> | <a href="https://github.com/coren-frankel">GitHub</a></li>
                </ul>
            </div>
            <div className="gettingInvolved"> Want to get involved in the project? <br />
                Learn more about getting involved <a href="">here</a>!
            </div>
        </div>
    )
}

export default Footer;