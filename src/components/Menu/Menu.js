import { Link } from 'react-router-dom';
import './Menu.css';

function Menu() {

    const handleLogout = () => {
        console.log("User logged out!");
        // Add your logout logic here, such as clearing user data or redirecting
    };


    return (
        <div role="navigation" className="menu">
            <Link to="/" className="logo-link">
                <img src="/logo.png" alt="Logo" className="logo" />
            </Link>
            <ul>
                <li><Link to="/">Dashboard</Link></li>
                <li><Link to="/summary">Summary</Link></li>
                <li><Link to="/reports">Reports</Link></li>
                <li><button className="logout-btn" onClick={handleLogout}>Log Out</button></li>
            </ul>
        </div>
    );
  }
  
  export default Menu;