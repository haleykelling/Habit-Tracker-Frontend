import React, {useState} from 'react';
import FontAwesome from 'react-fontawesome'

import '../Dashboard.css';


const HabitItem = ({habit, deleteHabit, editHabit, markCompletedHabit}) => {
    
    const [edit, setEdit] = useState(false)
    const [input, setInput] = useState({})

    const toggleEdit = () => setEdit(!edit)

    const handleDeleteClick = (event) => {
        event.preventDefault()
        deleteHabit(habit.id)
    }

    const handleEditClick = (event) => {
        event.preventDefault()
        toggleEdit()
    }

    const handleInput = (event) => {
        setInput({
            ...input,
            [event.target.name]: event.target.value 
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        setInput({})
        editHabit(habit.id, input)
        event.target.reset()
        toggleEdit()
    }

    const handleCompletedClick = (event) => {
        event.preventDefault()
        markCompletedHabit(habit.id)
    }
    
    return (
        <div className="habit-card">
            {edit
                ? <form className="edit-form" onSubmit={handleSubmit}>
                    <input name="name" placeholder={habit.name} onChange={handleInput}/>
                    <textarea 
                        name="details" 
                        rows="4"
                        placeholder={habit.details} 
                        onChange={handleInput}
                    />
                    <input type="submit" value="Edit"/>
                </form>
                : <>
                    <h3>{habit.name}</h3>
                    <p>{habit.details}</p>
                    <p>Current Streak: {habit.current_streak}</p>
                    <p>Longest Streak: {habit.longest_streak}</p>
                </>
            }
            <span className="habit-card-buttons">
                <button onClick={handleCompletedClick}>
                    <FontAwesome name="check-square" className="checkmark"/>
                </button>
                <button onClick={handleEditClick}>
                    <FontAwesome name="edit" className="edit"/>
                </button>
                <button onClick={handleDeleteClick}>
                    <FontAwesome name="trash" className="trash"/>
                </button>
            </span>
        </div>
    );
}

export default HabitItem;
