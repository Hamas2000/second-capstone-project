import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Define async thunk for fetching missions data
export const fetchMissions = createAsyncThunk(
  'missions/fetchMissions',
  async () => {
    const response = await fetch('https://api.spacexdata.com/v3/missions');
    return response.json();
  }
);

// Initial state
const initialState = {
  missions: [],
};

// Create slice
const missionsSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {
    setMissions: (state, action) => {
      state.missions = action.payload;
    },
    joinMission: (state, action) => {
      state.missions = state.missions.map((mission) =>
        mission.mission_id === action.payload
          ? { ...mission, joined: true }
          : mission
      );
    },
    leaveMission: (state, action) => {
      state.missions = state.missions.map((mission) =>
        mission.mission_id === action.payload
          ? { ...mission, joined: false }
          : mission
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMissions.fulfilled, (state, action) => {
      state.missions = action.payload;
    });
  },
});

// Export actions and reducer
export const { setMissions, joinMission, leaveMission } = missionsSlice.actions;
export default missionsSlice.reducer;
