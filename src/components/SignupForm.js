import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

import '../App.css';

const usersUrl = "http://localhost:3000/users"

const SignupForm = ({setUser, setHabits, history}) => {
    const [input, setInput] = useState({})
    const [alerts, setAlerts] = useState([])

    useEffect(() => {
        localStorage.removeItem('token')
        setUser({})
    }, [])

    const handleInput = (event) => {
        setInput({
            ...input,
            [event.target.name]: event.target.value 
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        signUp(input)
        setInput({})
    }
    
    const signUp = (user) => {
        fetch(usersUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({user})
        })
            .then(response => response.json())
            .then(response => {
                if(response.errors){
                    setAlerts(response.errors)
                } else {
                    setUser(response.user)
                    setHabits(response.habits)
                    localStorage.setItem('token', response.token)
                    setAlerts([])
                    history.push('/')
                }
            })
    }

    const showAlerts = () => alerts.map(alert => <p className="alerts">{alert}</p>)
    
    return (
        <form className="signup" onSubmit={handleSubmit}>
            <h2>New User</h2>
            <label>First Name:
                <input name="first_name" onChange={handleInput} />
            </label>
            <label>Last Name:
                <input name="last_name" onChange={handleInput} />
            </label>
            <label>Email Address:
                <input type="email" name="email" onChange={handleInput} />
            </label>
            <label>Password:
                <input type="password" name="password" onChange={handleInput} />
            </label>
            <input className="submit" type="submit" value="Create User"/>
            { alerts.length ? showAlerts() : null }
            <p>Already a member? <Link to="/login">Log In</Link></p>
        </form>
    );
}

export default SignupForm;
