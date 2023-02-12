import React, { useState } from 'react';

const CardForm = (props) => {
    const {initialTitle, initialDesc, inputVal, onSubmitProp} = props;
    const [cardTitle, setCardTitle] = useState(initialTitle);
    const [cardDescription, setDescription] = useState(initialDesc);
    const onSubmitHandler = (e) => {
        e.preventDefault();
        onSubmitProp({cardTitle, cardDescription});
        // then reset form?
    }
    
    
    return (
        <div>
            <form onSubmit={onSubmitHandler} className='col-4 m-auto'>
                <div className='mb-3 form-floating'>
                    <input type='text' id='title' className='form-control h-25' onChange={(e) => setCardTitle(e.target.value)} value={cardTitle} placeholder='RDBMS'/>
                    <label for='title'>Title</label>
                </div>
                <div className='mb-3 form-floating'>
                    <textarea id='desc' className='form-control h-100' rows='6' onChange={(e) => setDescription(e.target.value)} value={cardDescription} placeholder='(Relational Database Management System) i.e. MySql, Postgres, etc.'/>
                    <label for='desc'>Description</label>
                </div>
                <input className='btn btn-dark btn-md' type='submit' value={inputVal} />
            </form>
        </div>
    )
}

export default CardForm