import { createSlice } from '@reduxjs/toolkit';

// Initial state
const initialState = {
  missions: [],
};

// Slice
const missionSlice = createSlice({
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
});

export const { setMissions, joinMission, leaveMission } = missionSlice.actions;
export default missionSlice.reducer;
