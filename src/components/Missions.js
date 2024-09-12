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
<<<<<<<<< Temporary merge branch 1
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
=========
    <div className="overflow-x-auto">
      <table className="min-w-full border-collapse">
        <thead className="bg-gray-200">
          <tr>
            <th className="border px-2 sm:px-4 py-2 text-xs sm:text-sm text-left">Mission</th>
            <th className="border px-2 sm:px-4 py-2 text-xs sm:text-sm text-left">Description</th>
            <th className="border px-2 sm:px-4 py-2 text-xs sm:text-sm text-left">Status</th>
            <th className="border px-2 sm:px-4 py-2 text-xs sm:text-sm text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {missions.map((mission) => (
            <Mission
              key={mission.mission_id} // Use unique mission ID as key
              id={mission.mission_id}
              mission={mission.mission_name}
              description={mission.description}
              reserved={mission.reserved}
            />
          ))}
        </tbody>
      </table>
>>>>>>>>> Temporary merge branch 2
    </div>
  );
};

export default Missions;
>>>>>>>>> Temporary merge branch 2
