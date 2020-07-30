import React from 'react';

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
            <button onClick={handleCompletedClick}>Completed Today</button>
            <button onClick={handleEditClick}>Edit</button>
            <button onClick={handleDeleteClick}>Delete</button>
        </div>
    );
}

export default HabitItem;
