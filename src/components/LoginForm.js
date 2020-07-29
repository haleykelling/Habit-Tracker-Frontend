import React, {useState} from 'react';
import {Link} from 'react-router-dom';

const loginUrl = "http://localhost:3000/login"

const LoginForm = ({setUser, history}) => {
    
    const [input, setInput] = useState({})
    const [alerts, setAlerts] = useState([])

    const handleInput = (event) => {
        setInput({
            ...input,
            [event.target.name]: event.target.value 
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        
        fetch(loginUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({user: input})
        })
            .then(response => response.json())
            .then(response => {
                console.log(response)
                setUser(response.user)
                localStorage.setItem('token', response.token)
                if(response.errors){
                    setAlerts(response.errors)
                } else {
                    setAlerts([])
                }
            })
            .then(() => history.push('/'))
    }

    const showAlerts = () => alerts.map(alert => <p>{alert}</p>)
    
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Email Address:</label>
                <input type="email" name="email" onChange={handleInput} />
            </div>
            <div>
                <label>Password:</label>
                <input type="password" name="password" onChange={handleInput} />
            </div>
            <input type="submit" value="Login"/>
            { alerts.length ? showAlerts() : null }
            <p>Not a member? <Link to="/signup">Sign Up</Link></p>
        </form>
    );
}

export default LoginForm;
