import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setMissions, joinMission, leaveMission } from '../redux/missions/missionSlice';
import Mission from './Mission';

const Missions = () => {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.missions.missions);

  useEffect(() => {
    const fetchMissions = async () => {
      const response = await fetch('https://api.spacexdata.com/v3/missions');
      const data = await response.json();
      // Add 'joined' property to missions
      const missionsWithJoinStatus = data.map((mission) => ({
        ...mission,
        joined: false,
      }));
      dispatch(setMissions(missionsWithJoinStatus));
    };

    fetchMissions();
  }, [dispatch]);

  const handleJoin = (id) => {
    dispatch(joinMission(id));
  };

  const handleLeave = (id) => {
    dispatch(leaveMission(id));
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Missions</h1>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {missions.map((mission) => (
          <Mission
            key={mission.mission_id}
            mission={mission}
            onJoin={handleJoin}
            onLeave={handleLeave}
          />
        ))}
      </div>
    </div>
  );
};

export default Missions; 

