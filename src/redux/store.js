import { configureStore } from '@reduxjs/toolkit';
<<<<<<< HEAD
import rocketReducer from './Rockets/RocketsSlice';
import missionReducer from './missions/missionSlice';
=======
import rocketReducer from './Rockets/RocketsSlice';  // Updated path to match your file structure
import missionReducer from './missions/missionSlice';  // Updated path to match your file structure
>>>>>>> a0219063efbb94b00e1a99faff8aeaa1256ecc8c

const store = configureStore({
  reducer: {
    rockets: rocketReducer,
    missions: missionReducer,
  },
});

<<<<<<< HEAD
export default store;
=======
export default store;
>>>>>>> a0219063efbb94b00e1a99faff8aeaa1256ecc8c
