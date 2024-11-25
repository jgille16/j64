import './App.css';

import Menu from './components/Menu/Menu';
import Login from './pages/Login/Login';
import Dashboard from './pages/Dashboard/Dashboard';
import Summary from './pages/Summary/Summary';
import Reports from './pages/Reports/Reports';
import Footer from './components/Footer/Footer';

import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';


/* This function returns conditional components that are to be included in the Router tag */
function AppContent() {
  const location = useLocation();

  return (
    <>
      {/* Don't show Menu on login page */}
      {location.pathname !== '/login' && <Menu/>}
      
      <div className="mainContainer">
        <Routes>
          <Route path="/login" element={<Login/>} />
          <Route path="/summary" element={<Summary/>} />
          <Route path="/reports" element={<Reports/>} />
          <Route path="/" element={<Dashboard/>} />
        </Routes>
      </div>

      {/* Don't show Footer on login page */}
      {location.pathname !== '/login' && <Footer/>}
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent/>
    </Router>
  );
}

export default App;

