// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import rocketReducer from './rockets/RocketsSlice'; // Ensure this path is correct
import missionReducer from './missions/missionSlice';

const store = configureStore({
  reducer: {
    rockets: rocketReducer,
    missions: missionReducer,
  },
});

export default store;
