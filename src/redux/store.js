import { configureStore } from '@reduxjs/toolkit';
import rocketReducer from './Rockets/RocketsSlice';  // Updated path to match your file structure
import missionReducer from './missions/missionSlice';  // Updated path to match your file structure

const store = configureStore({
  reducer: {
    rockets: rocketReducer,
    missions: missionReducer,
  },
});

export default store;
