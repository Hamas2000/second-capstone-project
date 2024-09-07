import { createSlice } from '@reduxjs/toolkit';

// Initial state
const initialState = {
  rockets: [],
};

// Slice
const rocketsSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {
    setRockets: (state, action) => {
      state.rockets = action.payload;
    },
    reserveRocket: (state, action) => {
      state.rockets = state.rockets.map((rocket) => 
        rocket.id === action.payload 
          ? { ...rocket, reserved: true } 
          : rocket
      );
    },
    cancelReservation: (state, action) => {
      state.rockets = state.rockets.map((rocket) => 
        rocket.id === action.payload 
          ? { ...rocket, reserved: false } 
          : rocket
      );
    },
  },
});

export const { setRockets, reserveRocket, cancelReservation } = rocketsSlice.actions;
export default rocketsSlice.reducer;