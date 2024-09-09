import { configureStore } from '@reduxjs/toolkit';
import rocketsReducer from './Rockets/RocketsSlice'; // Correct path
import missionsReducer from './missions/missionSlice'; // Ensure this path is correct

const store = configureStore({
  reducer: {
    rockets: rocketsReducer,
    missions: missionsReducer,
  },
});

export default store;
