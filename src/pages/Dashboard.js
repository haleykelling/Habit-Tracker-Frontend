import React from 'react';
import {Link} from 'react-router-dom';
import CreateNewHabit from '../components/CreateNewHabit'
import HabitStats from '../components/HabitStats'
import HabitContainer from '../components/HabitContainer'

import '../Dashboard.css';

const Dashboard = ({user, habits, addHabit, deleteHabit, editHabit, markCompletedHabit}) => {
    return(
        <div className="dashboard">
            <div className="header">
                <Link to="/welcome"><button>Logout</button></Link>
                <h1>Welcome Back {user.name}</h1>
            </div>
            <HabitStats habits={habits}/>
            <div className="habit-section">
                <CreateNewHabit addHabit={addHabit}/>
                <HabitContainer 
                    habits={habits} 
                    deleteHabit={deleteHabit} 
                    editHabit={editHabit}
                    markCompletedHabit={markCompletedHabit}
                />
            </div>
        </div>
    )
}

export default Dashboard