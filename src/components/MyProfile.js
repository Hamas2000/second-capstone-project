import React from 'react';
import { useSelector } from 'react-redux';
import RocketsItem from './RocketsItem';

const MyProfile = () => {
  const rockets = useSelector((state) => state.rockets.rockets.filter(rocket => rocket.reserved));
  const missions = useSelector((state) => state.missions.missions.filter(mission => mission.joined));

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">My Profile</h1>
      <div>
        <h2 className="text-xl font-semibold mb-2">Reserved Rockets</h2>
        {rockets.length > 0 ? (
          <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {rockets.map((rocket) => (
              <RocketsItem key={rocket.id} rocket={rocket} />
            ))}
          </div>
        ) : (
          <p>No reserved rockets.</p>
        )}
      </div>
      <div className="mt-4">
        <h2 className="text-xl font-semibold mb-2">Joined Missions</h2>
        {missions.length > 0 ? (
          <ul>
            {missions.map((mission) => (
              <li key={mission.mission_id} className="border p-4 rounded-lg shadow-lg mb-2">
                <h3 className="text-lg font-semibold">{mission.mission_name}</h3>
                <p>{mission.description}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No joined missions.</p>
        )}
      </div>
    </div>
  );
};

export default MyProfile;
