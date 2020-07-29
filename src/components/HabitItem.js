import React from 'react';

import '../Dashboard.css';


const HabitItem = ({habit, deleteHabit}) => {
    
    const handleClick = (event) => {
        event.preventDefault()
        deleteHabit(habit.id)
    }
    
    return (
        <div className="habit-card">
            <h2>{habit.name}</h2>
            <p>{habit.details}</p>
            <p>Current Streak: {habit.current_streak}</p>
            <p>Longest Streak: {habit.longest_streak}</p>
            <button>Completed Today</button>
            <button onClick={handleClick}>Delete Habit</button>
        </div>
    );
}

export default HabitItem;
