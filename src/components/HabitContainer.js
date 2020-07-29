import React from 'react';
import HabitItem from './HabitItem';

import '../Dashboard.css';


const HabitContainer = ({habits, deleteHabit}) => {
    const showHabits = habits.map(habit => {
        return <HabitItem habit={habit} key={habit.id} deleteHabit={deleteHabit}/>
    })
    
    return (
        <div className="habit-container">
            {showHabits}
        </div>
    );
}

export default HabitContainer;
