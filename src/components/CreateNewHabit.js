import React, {useState} from 'react';

import '../Dashboard.css';


const CreateNewHabit = ({addHabit}) => {
    
    const [input, setInput] = useState({})
    const [form, setForm] = useState(false)

    const handleInput = (event) => {
        setInput({
            ...input,
            [event.target.name]: event.target.value 
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        addHabit(input)
        setInput({})
    }

    const toggleForm = () => setForm(!form)
    
    return (
        <>
        <button className="show-form-button" onClick={toggleForm}>+</button>
        {form
        ?   <form className="create-form" onSubmit={handleSubmit}>
                <h2>Create a New Habit</h2>
                <div>
                    <label>Name:</label>
                    <input name="name" onChange={handleInput} />
                    <label>Details:</label>
                    <input name="details" onChange={handleInput} />
                    <input type="submit" />
                </div>
            </form>
        : null 
        }
        </>
    );
}

export default CreateNewHabit;
