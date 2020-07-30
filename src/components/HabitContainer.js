import React from 'react';
import HabitItem from './HabitItem';
import CreateNewHabit from './CreateNewHabit'

import '../Dashboard.css';


const HabitContainer = ({habits, addHabit, deleteHabit, editHabit, markCompletedHabit}) => {
    const habitsToDo = () => {
        let today = new Date()
        let formatted = today.toISOString().slice(0, 10)
        return habits.filter(habit => {
            return habit.date_last_completed !== formatted
        })
    }

    const completedHabits = () => {
        let today = new Date()
        let formatted = today.toISOString().slice(0, 10)
        return habits.filter(habit => {
            return habit.date_last_completed === formatted
        })
    }
    
    const showHabits = (selectedHabits) => {
        return selectedHabits.map(habit => {
            return <HabitItem 
                habit={habit} 
                key={habit.id} 
                deleteHabit={deleteHabit} 
                editHabit={editHabit}
                markCompletedHabit={markCompletedHabit}
            />
        })
    }

    return (
        <div className="habit-container">
            <h2>Daily Habits</h2>
            <CreateNewHabit addHabit={addHabit}/>
            <div className="to-do">
                {showHabits(habitsToDo())}
            </div>
            <h2>Completed</h2>
            <div className="done">
                {showHabits(completedHabits())}
            </div>
        </div>
    );
}

export default HabitContainer;
