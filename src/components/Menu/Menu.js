import { Link } from 'react-router-dom';

function Menu() {
    return (
        <div role="navigation" className="menu">
        <ul>
            <li><Link to="/">Dashboard</Link></li>
        </ul>
    </div>
    );
  }
  
  export default Menu;