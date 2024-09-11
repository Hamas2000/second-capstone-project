<<<<<<< HEAD
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getDataFromServer } from '.redux/Rockets/Rockets';
import Missions from './components/Missions';
import MyProfile from './components/MyProfile';
import { getDataFromServer } from './redux/Rockets/RocketsSlice';
import './index.css';
import Navbar from './components/Navbar';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDataFromServer());
  }, [dispatch]);

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Rockets />} />
          <Route path="/missions" element={<Missions />} />
          <Route path="/myprofile" element={<MyProfile />} />
        </Routes>
      </Router>
    </div>
=======
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
>>>>>>> a0219063efbb94b00e1a99faff8aeaa1256ecc8c
  );
}

export default App;


