import './App.css';

import Menu from './components/Menu/Menu';
import Login from './pages/Login/Login';
import Dashboard from './pages/Dashboard/Dashboard';
import Summary from './pages/Summary/Summary';
import Reports from './pages/Reports/Reports';
import Footer from './components/Footer/Footer';
import ProtectRoute from './components/ProtectRoute/ProtectRoute';

import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { checkTokenExpiration } from './utils/tokenUtils';



function AppContent() {
  const location = useLocation();

  // Checking if token has expired (every 5 seconds)
  useEffect(() => {
    const interval = setInterval(checkTokenExpiration, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Don't show Menu on login page */}
      {location.pathname !== '/login' && <Menu />}
      
      <div className="mainContainer">
        <Routes>

          {/* ********Login Page******** */}
          <Route path="/login" element={<Login />} />

          {/* ********Dashboard Page******** */}
          <Route 
            path="/" 
            element={
              <ProtectRoute>
                <Dashboard />
              </ProtectRoute>
            } 
          />

          {/* ********Summary Page******** */}
          <Route 
            path="/summary" 
            element={
              <ProtectRoute>
                <Summary />
              </ProtectRoute>
            } 
          />

          {/* ********Reports Page******** */}
          <Route 
            path="/reports" 
            element={
              <ProtectRoute>
                <Reports />
              </ProtectRoute>
            } 
          />

        </Routes>
      </div>

      {/* Don't show Footer on login page */}
      {location.pathname !== '/login' && <Footer />}
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

