import React from 'react';
import logo from './logo.svg';  // You may keep this if you're using the logo elsewhere
import './App.css';  // Your custom styles
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';  // Import Navbar component
import Rockets from './components/Rockets';  // Import Rockets component
import Missions from './components/Missions';  // added new....//
import MyProfile from './components/MyProfile';  

function App() {
  return (
    <Router>
      <div className="App">
        {/* Add Navbar */}
        <Navbar />

        <header className="App-header">
          {/* Define Routes */}
          <Routes>
            <Route path="/rockets" element={<Rockets />} />
            <Route path="/missions" element={<Missions />} />
            <Route path="/profile" element={<MyProfile />} />
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
