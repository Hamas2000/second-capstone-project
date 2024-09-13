import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { joinMission, leaveMission } from '../redux/missions/missionsSlice';
import { reserveRocket, unreserveRocket } from '../redux/Rockets/RocketsSlice';
import Mission from './Mission';

const Rockets = () => {
  const dispatch = useDispatch();
  const rocketData = useSelector((state) => state.rockets.rocketData);
  const missionData = useSelector((state) => state.missions.missions);

  const handleJoin = (missionId) => {
    dispatch(joinMission(missionId));
  };

  const handleLeave = (missionId) => {
    dispatch(leaveMission(missionId));
  };

  const handleReserve = (rocketId) => {
    dispatch(reserveRocket(rocketId));
  };

  const handleUnreserve = (rocketId) => {
    dispatch(unreserveRocket(rocketId));
  };

  return (
    <div className="rocket-container">
      <h2 className="text-2xl font-bold mb-4">Rockets</h2>
      <ul className="rocket-list">
        {rocketData.map((rocket) => (
          <li key={rocket.id} className="rocket-item">
            <div className="rocket-details">
              <h3 className="rocket-name">{rocket.name}</h3>
              <button
                className={`rocket-button ${rocket.reserved ? 'unreserve' : 'reserve'}`}
                onClick={() => {
                  rocket.reserved ? handleUnreserve(rocket.id) : handleReserve(rocket.id);
                }}
                type="button"
              >
                {rocket.reserved ? 'Cancel Reservation' : 'Reserve Rocket'}
              </button>
            </div>
          </li>
        ))}
      </ul>
      <h2 className="text-2xl font-bold mb-4 mt-10">Missions</h2>
      <table className="mission-table">
        <thead>
          <tr>
            <th className="py-2">Mission Name</th>
            <th className="py-2">Description</th>
            <th className="py-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {missionData.map((mission) => (
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

export default Rockets;
