import React from 'react';
import CardForm from '../components/CardForm';
import { useNavigate } from 'react-router-dom';


const Create = (props) => {
    const navigate = useNavigate();
    // Goes Back. Don't care where, just goin' back...
    const navigateBack = () => {
        navigate(-1)
    }

    return(
    <div>
        <h2>Create a new flashcard!</h2>
        <br/>
        <CardForm />
        <hr/>
        <button className='btn btn-danger' onClick={navigateBack}>
            Back
        </button>
    </div>
    )
}

export default Create;