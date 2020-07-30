import React from 'react';
import HabitItem from './HabitItem';

import '../Dashboard.css';


const HabitContainer = ({habits, deleteHabit, editHabit, markCompletedHabit}) => {
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
            <div className="to-do">
                <h2>Habits to Check Off Today</h2>
                {showHabits(habitsToDo())}
            </div>
            <div className="done">
                <h2>Completed Today</h2>
                {showHabits(completedHabits())}
            </div>
        </div>
    );
}

export default HabitContainer;
