import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  rocketData: [],
};

const rocketsSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {
    reserveRocket: (state, action) => {
      const rocketId = action.payload;
      const rocket = state.rocketData.find((rocket) => rocket.id === rocketId);
      if (rocket) {
        rocket.reserved = true;
      }
    },
    unreserveRocket: (state, action) => {
      const rocketId = action.payload;
      const rocket = state.rocketData.find((rocket) => rocket.id === rocketId);
      if (rocket) {
        rocket.reserved = false;
      }
    },
    // Other reducers...
  },
});

export const { reserveRocket, unreserveRocket } = rocketsSlice.actions;

export default rocketsSlice.reducer;
