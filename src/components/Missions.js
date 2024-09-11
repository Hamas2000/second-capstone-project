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
      dispatch(setMissions(data.map((mission) => ({ ...mission, reserved: false }))));
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
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6" id="mission">Missions</h1>
      <table className="min-w-full bg-white border border-gray-300 rounded-md shadow">
        <thead className="bg-gray-100 border-b border-gray-300">
          <tr>
            <th className="py-4 px-6 text-left font-bold text-gray-800 border-r border-gray-300">Mission</th>
            <th className="py-4 px-6 text-left font-bold text-gray-800 border-r border-gray-300">Description</th>
            <th className="py-4 px-6 text-left font-bold text-gray-800">Status</th>
          </tr>
        </thead>
        <tbody>
          {missions.map((mission) => (
            <Mission
              key={mission.mission_id}
              mission={mission}
              onJoin={() => handleJoin(mission.mission_id)}
              onLeave={() => handleLeave(mission.mission_id)}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Missions;
