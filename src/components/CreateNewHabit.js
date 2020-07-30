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
                <label>Name:
                    <input name="name" onChange={handleInput} />
                </label>
                <textarea 
                    name="details" 
                    rows="2"
                    placeholder="Description of habit..."
                    onChange={handleInput} 
                />
                <input type="submit" />
            </form>
        : null 
        }
        </>
    );
}

export default CreateNewHabit;
