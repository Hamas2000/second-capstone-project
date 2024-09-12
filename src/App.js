import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Rockets from './components/Rockets';
import Missions from './components/Missions';
import MyProfile from './components/MyProfile';
import './App.css';
import './components/style.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <header className="App-header">
          <Routes>
            <Route path="/rockets" element={<Rockets />} />
            <Route path="/missions" element={<Missions />} />
            <Route path="/profile" element={<MyProfile />} />
            <Route path="/" element={<Rockets />} /> {/* Set default route */}
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;

