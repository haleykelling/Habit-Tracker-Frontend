import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';


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
        <form onSubmit={handleSubmit}>
            <div>
                <label>First Name:</label>
                <input name="first_name" onChange={handleInput} />
            </div>
            <div>
                <label>Last Name:</label>
                <input name="last_name" onChange={handleInput} />
            </div>
            <div>
                <label>Email Address:</label>
                <input type="email" name="email" onChange={handleInput} />
            </div>
            <div>
                <label>Password:</label>
                <input type="password" name="password" onChange={handleInput} />
            </div>
            <input type="submit" value="Create User"/>
            { alerts.length ? showAlerts() : null }
            <p>Already a member? <Link to="/login">Log In</Link></p>
        </form>
    );
}

export default SignupForm;
