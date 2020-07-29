import React from 'react';
import {Link} from 'react-router-dom';
import CreateNewHabit from '../components/CreateNewHabit'
import HabitStats from '../components/HabitStats'
import HabitContainer from '../components/HabitContainer'

const Dashboard = ({user, habits, addHabit, deleteHabit}) => {
    return(
        <div>
            <div className="header">
                <nav>
                <Link to="/login">Logout</Link>
                </nav>
                <h1>Welcome Back to Habit Tracker {user.name}</h1>
            </div>
            <div>
                <CreateNewHabit addHabit={addHabit}/>
                <HabitStats habits={habits}/>
                <HabitContainer habits={habits} deleteHabit={deleteHabit} />
            </div>
        </div>
    )
}

export default Dashboard