import { createSlice } from '@reduxjs/toolkit';

<<<<<<< HEAD
// Initial state
=======
>>>>>>> e5c12ac64ff6cedd0b3884d3caff04f9c7cd7c67
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
<<<<<<< HEAD
export default missionSlice.reducer;
=======
export default missionSlice.reducer;


>>>>>>> e5c12ac64ff6cedd0b3884d3caff04f9c7cd7c67
