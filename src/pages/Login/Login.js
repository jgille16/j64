import './Login.css';

function Login() {
    return (
        <div className="login-container">
            <h1>Login</h1>
            <form className="login-form">

                <div className="form-group">
                    <label htmlFor="email">Username:</label>
                    <input type="email" id="email" placeholder="Enter your username"/>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" placeholder="Enter your password"/>
                </div>

                <button type="submit" className="login-button">Login</button>
            </form>
        </div>
    );
  }
  
  export default Login;