import React from 'react';
import FontAwesome from 'react-fontawesome'

import '../Dashboard.css';


const HabitItem = ({habit, deleteHabit, editHabit, markCompletedHabit}) => {
    
    const handleDeleteClick = (event) => {
        event.preventDefault()
        deleteHabit(habit.id)
    }

    const handleEditClick = (event) => {
        event.preventDefault()
    }

    const handleCompletedClick = (event) => {
        event.preventDefault()
        markCompletedHabit(habit.id)
    }
    
    return (
        <div className="habit-card">
            <h3>{habit.name}</h3>
            <p>{habit.details}</p>
            <p>Current Streak: {habit.current_streak}</p>
            <p>Longest Streak: {habit.longest_streak}</p>
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
