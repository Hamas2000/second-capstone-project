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
<<<<<<< HEAD
        <Navbar /> {}
        <header className="App-header">
          <Routes> {}
            <Route path="/" element={<Rockets />} /> {}
            <Route path="/missions" element={<Missions />} /> {}
            <Route path="/profile" element={<MyProfile />} /> {}
=======
        <Navbar />
        <header className="App-header">
          <Routes>
            <Route path="/rockets" element={<Rockets />} />
            <Route path="/missions" element={<Missions />} />
            <Route path="/profile" element={<MyProfile />} />
            <Route path="/" element={<Rockets />} /> {/* Set default route */}
>>>>>>> e5c12ac64ff6cedd0b3884d3caff04f9c7cd7c67
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
