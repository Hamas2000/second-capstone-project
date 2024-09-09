import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Rockets from './components/Rockets';
import Missions from './components/Missions';
import MyProfile from './components/MyProfile';
import { fetchRockets } from './redux/rocketsSlice'; // Import the correct action from the Redux slice
import './index.css';
import Navbar from './components/Navbar';

function App() {
  const dispatch = useDispatch();

  // Fetch rockets data from the server when the app loads
  useEffect(() => {
    dispatch(fetchRockets()); // Dispatch the action to fetch data from the server
  }, [dispatch]);

  return (
    <div className="App">
      <Router>
        <Navbar /> {/* Navigation bar */}
        <Routes>
          <Route path="/" element={<Rockets />} /> {/* Rockets component */}
          <Route path="/missions" element={<Missions />} /> {/* Missions component */}
          <Route path="/myprofile" element={<MyProfile />} /> {/* MyProfile component */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
