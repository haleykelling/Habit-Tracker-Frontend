import React from 'react';

const Dashboard = ({user}) => {
    return(
        <div>
            <h1>Welcome Back to Habit Tracker {user.name}</h1>
        </div>
    )
}

export default Dashboard