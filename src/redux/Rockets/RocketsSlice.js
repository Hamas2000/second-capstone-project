// src/redux/rockets/RocketsSlice.js
import { createSlice } from '@reduxjs/toolkit';

const rocketsSlice = createSlice({
  name: 'rockets',
  initialState: {
    rockets: [],             // This will hold the list of rockets
    reservedRockets: [],     // This will hold the IDs of reserved rockets
  },
  reducers: {
    setRockets: (state, action) => {
      state.rockets = action.payload; // Set rockets with fetched data
    },
    reserveRocket: (state, action) => {
      const rocketId = action.payload; // Get the rocket ID from action payload
      if (!state.reservedRockets.includes(rocketId)) {
        state.reservedRockets.push(rocketId); // Add rocket ID to reserved if not already reserved
      }
    },
    cancelReservation: (state, action) => {
      const rocketId = action.payload; // Get the rocket ID from action payload
      state.reservedRockets = state.reservedRockets.filter(id => id !== rocketId); // Remove rocket ID from reserved
    },
  },
});

// Export actions to be used in components
export const { setRockets, reserveRocket, cancelReservation } = rocketsSlice.actions;

// Export the reducer to be used in the store
export default rocketsSlice.reducer;
