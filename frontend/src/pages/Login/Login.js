import './Login.css';
import axios from 'axios';
import { useState } from 'react';

function Login() {

    const [errorMessage, setErrorMessage] = useState('');
    
    const handleLogin = (event) => {
        event.preventDefault();
    
        const data = {
            username: document.getElementById("username").value,
            password: document.getElementById("password").value,
        };
    
        axios
            .post('http://localhost:3000/api/login', data)
            .then((res) => {
                console.log('Login successful:', res.data);
                setErrorMessage(''); // Clear any previous error
            })
            .catch((error) => {
                if (error.response) {
                    // Invalid credentials
                    setErrorMessage(error.response.data.err); // Display server-provided error message
                }
            });
    };
    
    
    
    return (
        <div className="login-container">
            <h1>Login</h1>
            <form className="login-form">

                {errorMessage && <div className="error-message">{errorMessage}</div>}

                <div className="form-group">
                    <label htmlFor="username">Username:</label>
                    <input type="username" id="username" placeholder="Enter your username"/>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" placeholder="Enter your password"/>
                </div>

                <button type="submit" className="login-button" onClick={handleLogin}>Login</button>
            </form>
        </div>
    );
  }
  
  export default Login;