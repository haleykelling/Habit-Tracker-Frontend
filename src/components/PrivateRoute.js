import React from 'react';
import {Route, Redirect} from 'react-router-dom';


const PrivateRoute = ({path, component: Component, user, habits}) => {
    return localStorage.token
        ? <Route exact path={path} render={(routerProps) => <Component user={user} habits={habits}/>} />
        : <Redirect to="/login" />
}

export default PrivateRoute