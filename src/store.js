// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import rocketsReducer from './redux/rocketsSlice';
import missionsReducer from './redux/missionsSlice';

const store = configureStore({
  reducer: {
    rockets: rocketsReducer,
    missions: missionsReducer,
  },
});

export default store;
