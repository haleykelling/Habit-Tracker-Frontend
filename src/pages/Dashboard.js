import React from 'react';
import {Link} from 'react-router-dom';
import CreateNewHabit from '../components/CreateNewHabit'
import HabitStats from '../components/HabitStats'
import HabitContainer from '../components/HabitContainer'

const Dashboard = ({user, habits, setHabits}) => {
    console.log(habits)
    return(
        <div>
            <div className="header">
                <nav>
                <Link to="/login">Logout</Link>
                </nav>
                <h1>Welcome Back to Habit Tracker {user.name}</h1>
            </div>
            <div>
                <CreateNewHabit />
                <HabitStats habits={habits}/>
                <HabitContainer habits={habits}/>
            </div>
        </div>
    )
}

export default Dashboard