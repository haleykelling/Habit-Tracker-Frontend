import React from 'react';
import {Route, Redirect} from 'react-router-dom';


const PrivateRoute = ({path, component: Component, user, habits, addHabit, deleteHabit}) => {
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
                    />
                }} 
            />
        : <Redirect to="/welcome" />
}

export default PrivateRoute