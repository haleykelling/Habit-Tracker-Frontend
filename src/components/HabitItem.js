import React from 'react';

const HabitItem = ({habit}) => {
    return (
        <div>
            <h2>{habit.name}</h2>
            <p>{habit.details}</p>
            <p>Current Streak: {habit.current_streak}</p>
            <p>Longest Streak: {habit.longest_streak}</p>
        </div>
    );
}

export default HabitItem;
