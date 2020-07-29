import React, {useState} from 'react';
import {Route, Switch, Redirect, Link} from 'react-router-dom';
import SignupForm from './components/SignupForm';
import LoginForm from './components/LoginForm';
import Dashboard from './pages/Dashboard';
import PrivateRoute from './components/PrivateRoute'

import './App.css';

function App() {
  
  const [user, setUser] = useState({})
  
  
  return (
    <div className="App">
      <Switch>
        <PrivateRoute exact path="/" component={Dashboard} user={user}/>
        <Route exact path="/login" render={(routerProps) => {
          return <LoginForm setUser={setUser} {...routerProps} /> 
        }} />
        <Route exact path="/signup" render={(routerProps) => {
          return <SignupForm setUser={setUser} {...routerProps} />
        }} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
