import './Login.css';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {

    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate(); // Use navigate for redirection
    
    const handleLogin = (event) => {
        event.preventDefault();
    
        const data = {
            username: document.getElementById("username").value,
            password: document.getElementById("password").value,
        };
    
        axios
            .post('http://localhost:3000/api/login', data)
            // Valid credentials
            .then((res) => {
                if (res.data.success) {
                    console.log('Login successful:', res.data);
                    localStorage.setItem('token', res.data.tokenValue); // Store the token
                    setErrorMessage(''); // Clear any previous error
                    navigate('/'); // Redirect to dashboard
                }
            })
            // Invalid credentials
            .catch((error) => {
                if (error.response) {
                    setErrorMessage(error.response.data.err); // Display the server-provided error message
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