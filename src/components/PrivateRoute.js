import React from 'react';
import {Route, Redirect} from 'react-router-dom';


const PrivateRoute = (props) => {
    const {
        path, 
        component: Component, 
        user, 
        habits, 
        addHabit, 
        deleteHabit, 
        editHabit,
        markCompletedHabit
    } = props
    
    return localStorage.token
        ? <Route 
                exact 
                path={path} 
                render={(routerProps) => {
                    return <Component 
                        user={user} 
                        habits={habits} 
                        addHabit={addHabit}
                        deleteHabit={deleteHabit}
                        editHabit={editHabit}
                        markCompletedHabit={markCompletedHabit}
                    />
                }} 
            />
        : <Redirect to="/welcome" />
}

export default PrivateRoute