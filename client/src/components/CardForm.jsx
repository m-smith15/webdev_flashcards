import React, { useState } from 'react';

const styles = {
    error: {
        color: "white",
        marginTop: "0",
        backgroundColor: "#B05C4B",
        borderRadius: "50px"
    }
}

const CardForm = (props) => {
    const {initialTitle, initialDesc, inputVal, onSubmitProp, errors} = props;
    const [cardTitle, setCardTitle] = useState(initialTitle);
    const [cardDescription, setCardDescription] = useState(initialDesc);
    const onSubmitHandler = (e) => {
        //prevents page reload
        e.preventDefault();
        // Lift state of card properties to parent view
        onSubmitProp({cardTitle, cardDescription});
    }
    
    
    return (
        <div className='mb-2'>
            <form onSubmit={onSubmitHandler} className='col-4 m-auto'>
                {errors.map((err,idx) => <p key={idx} style={ styles.error }>{err}</p>)}
                <div className='mb-3 form-floating'>
                    <input type='text' id='title' className='form-control h-25' onChange={(e) => setCardTitle(e.target.value)} value={cardTitle} placeholder='RDBMS'/>
                    <label>Title</label>
                </div>
                <div className='mb-3 form-floating'>
                    <textarea id='desc' className='form-control h-100' rows='6' onChange={(e) => setCardDescription(e.target.value)} value={cardDescription} placeholder='(Relational Database Management System) i.e. MySql, Postgres, etc.'/>
                    <label>Description</label>
                </div>
                <input className='btn btn-primary btn-md' type='submit' value={inputVal} />
            </form>
        </div>
    )
}

export default CardForm