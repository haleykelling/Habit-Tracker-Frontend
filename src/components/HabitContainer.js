import React from 'react';
import HabitItem from './HabitItem';

const HabitContainer = ({habits, deleteHabit}) => {
    const showHabits = habits.map(habit => {
        return <HabitItem habit={habit} key={habit.id} deleteHabit={deleteHabit}/>
    })
    
    return (
        <div>
            {showHabits}
        </div>
    );
}

export default HabitContainer;
