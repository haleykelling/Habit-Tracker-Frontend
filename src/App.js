import React, {useState, useEffect} from 'react';
import {Route, Switch, Redirect, Link} from 'react-router-dom';
import SignupForm from './components/SignupForm';
import LoginForm from './components/LoginForm';
import Dashboard from './pages/Dashboard';
import PrivateRoute from './components/PrivateRoute'

import './App.css';

const profileUrl = "http://localhost:3000/profile"

function App() {
  
  const [user, setUser] = useState({})
  const [habits, setHabits] = useState([])
  
  useEffect(() => {
    if(localStorage.token){
      authorizeUser()
    }
  }, [])

  const authorizeUser = () => {
    fetch(profileUrl, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${localStorage.token}`
      }
    })
      .then(response => response.json())
      .then(result => {
        setUser(result.user)
        setHabits(result.habits)
      })
  }
  
  return (
    <div className="App">
      <Switch>
        <PrivateRoute 
          exact 
          path="/" 
          component={Dashboard} 
          user={user} 
          habits={habits} 
          setHabits={setHabits} 
        />
        <Route exact path="/login" render={(routerProps) => {
          return <LoginForm setUser={setUser} setHabits={setHabits} {...routerProps} /> 
        }} />
        <Route exact path="/signup" render={(routerProps) => {
          return <SignupForm setUser={setUser} setHabits={setHabits} {...routerProps} />
        }} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
