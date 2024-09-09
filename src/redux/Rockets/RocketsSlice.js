// src/redux/rockets/RocketsSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchRockets = createAsyncThunk('rockets/fetchRockets', async () => {
  const response = await fetch('https://api.spacexdata.com/v4/rockets');
  return response.json();
});

const rocketsSlice = createSlice({
  name: 'rockets',
  initialState: {
    rockets: [],
    reservedRockets: [],
    status: 'idle',
    error: null,
  },
  reducers: {
    reserveRocket: (state, action) => {
      state.reservedRockets.push(action.payload);
    },
    // Other reducers can go here
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRockets.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchRockets.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.rockets = action.payload;
      })
      .addCase(fetchRockets.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { reserveRocket } = rocketsSlice.actions;
export default rocketsSlice.reducer;
