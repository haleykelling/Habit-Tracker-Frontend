import React, {useState} from 'react';
import './App.css';
import SignupForm from './components/SignupForm';
import LoginForm from './components/LoginForm';

function App() {
  
  const [user, setUser] = useState({})
  const [login, setLogin] = useState(true)
  
  const toggleForm = () => setLogin(!login)
  
  return (
    <div className="App">
      {login 
        ? <LoginForm toggleForm={toggleForm} setUser={setUser}/> 
        : <SignupForm toggleForm={toggleForm} setUser={setUser}/>
      }
    </div>
  );
}

export default App;
