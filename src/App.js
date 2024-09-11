import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';  // Import Navbar component
import Rockets from './components/Rockets';  // Import Rockets component
import Missions from './components/Missions';  // Import Missions component
import MyProfile from './components/MyProfile';  // Import MyProfile component
import './App.css';  // Import your custom styles

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar /> {/* Display Navbar on all pages */}
        <header className="App-header">
          <Routes> {/* Define your routes here */}
            <Route path="/" element={<Rockets />} /> {/* Root path route */}
            <Route path="/missions" element={<Missions />} /> {/* Missions path */}
            <Route path="/profile" element={<MyProfile />} /> {/* Profile path */}
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;


