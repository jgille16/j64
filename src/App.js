import './App.css';

import Menu from './components/Menu/Menu';
import Dashboard from './pages/Dashboard/Dashboard';
import Footer from './components/Footer/Footer';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Menu/>
      <div className="mainContainer">
        <Routes>
          
          <Route path="/" element={<Dashboard/>}></Route>

        </Routes>
      </div>
      <Footer/>
    </Router>
  );
}

export default App;
