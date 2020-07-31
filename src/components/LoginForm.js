import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

import '../App.css';

const loginUrl = "http://localhost:3000/login"

const LoginForm = ({setUser, setHabits, history}) => {
    
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
        event.target.reset()
        login(input)
        setInput({})
    }
    
    const login = (input) => {
        fetch(loginUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({user: input})
        })
            .then(response => response.json())
            .then(response => {
                if(response.errors){
                    setAlerts(response.errors)
                } else if (response.token) {
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
        <form className="login" onSubmit={handleSubmit}>
            <h2>Login</h2>
            <label>Email Address:
                <input type="email" name="email" onChange={handleInput} />
            </label>
            <label>Password:
                <input type="password" name="password" onChange={handleInput} />
            </label>
            <input className="submit" type="submit" value="Login"/>
            { alerts.length ? showAlerts() : null }
            <p>Not a member? <Link to="/signup">Sign Up</Link></p>
        </form>
    );
}

export default LoginForm;
