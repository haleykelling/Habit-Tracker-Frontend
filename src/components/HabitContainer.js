import React from 'react';
import HabitItem from './HabitItem';

const HabitContainer = ({habits}) => {
    const showHabits = habits.map(habit => <HabitItem habit={habit} key={habit.id} />)
    
    return (
        <div>
            {showHabits}
        </div>
    );
}

export default HabitContainer;
