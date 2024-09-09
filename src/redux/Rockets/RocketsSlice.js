import { createSlice } from '@reduxjs/toolkit';

const rocketsSlice = createSlice({
  name: 'rockets',
  initialState: {
    rockets: [],
    status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
  },
  reducers: {
    setRockets: (state, action) => {
      state.rockets = action.payload;
    },
  },
});

export const { setRockets } = rocketsSlice.actions;

// Async thunk to fetch rockets from an API
export const fetchRockets = () => async (dispatch) => {
  try {
    const response = await fetch('https://api.spacexdata.com/v4/rockets');
    const data = await response.json();
    dispatch(setRockets(data));
  } catch (error) {
    console.error('Failed to fetch rockets', error);
  }
};

export default rocketsSlice.reducer;
