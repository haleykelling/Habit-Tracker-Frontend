import React from 'react';
import HabitItem from './HabitItem';

import '../Dashboard.css';


const HabitContainer = ({habits, deleteHabit, editHabit, markCompletedHabit}) => {
    const showHabits = habits.map(habit => {
        return <HabitItem 
            habit={habit} 
            key={habit.id} 
            deleteHabit={deleteHabit} 
            editHabit={editHabit}
            markCompletedHabit={markCompletedHabit}
        />
    })
    
    return (
        <div className="habit-container">
            {showHabits}
        </div>
    );
}

export default HabitContainer;
