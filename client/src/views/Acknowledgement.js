import React from 'react';


const Acknowledgement = () => {

    //TODO: 2 approaches I see to this. Can either hard-code in names/links or pass them in via a variable.
        //I like the idea of the variable, it adds some reusability. I can also see this getting very, very long. Perhaps there'd be a way to pull the table from readme? Or use the contributors list??
    const contributors = [
        {
            name : 'Coren "Kern" Frankel',
            LinkedIn : 'https://www.linkedin.com/in/coren-frankel/',
            GitHub: 'https://github.com/coren-frankel'
        },
        {
            name : 'Mack Smith',
            LinkedIn : 'https://www.linkedin.com/in/macksmithlambeau/',
            GitHub: 'https://github.com/m-smith15'
        },
        {
            name : 'Vinit Hemadri',
            GitHub : 'https://github.com/Vinitvh',
        },
        {
            name : 'Diego Díaz',
            GitHub: 'https://github.com/dialejo24'
        }
        ]

    return (
        <div className="contributors">
            {contributors.map((contributor, i) => (
                <ul>
                <li>{contributor.name}</li>
                {contributor.LinkedIn ? <li><a href={contributor.LinkedIn}>LinkedIn</a></li> : ''}
                <li><a href={contributor.GitHub}>GitHub</a></li>
                </ul>
            ))}
        </div>
    )
}
export default Acknowledgement;