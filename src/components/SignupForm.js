import React, {useState} from 'react';

const usersUrl = "http://localhost:3000/users"

const SignupForm = ({toggleForm}) => {
    const [input, setInput] = useState({})

    const handleInput = (event) => {
        setInput({
            ...input,
            [event.target.name]: event.target.value 
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        
        fetch(usersUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({user: input})
        })
    }
    
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
            <p>Already a member? <button onClick={toggleForm}>Log In</button></p>
        </form>
    );
}

export default SignupForm;
