import React from 'react';
import { useSelector } from 'react-redux';
import RocketsItem from './RocketsItem';  // Assuming you have this component for rockets

const MyProfile = () => {
  // Extract and filter data from Redux state
  const rockets = useSelector((state) => state.rockets.rocketData.filter(rocket => rocket.reserved));
  const missions = useSelector((state) => state.missions.missions.filter(mission => mission.reserved));
  const dragons = useSelector((state) => state.dragons.dragons.filter(dragon => dragon.reserved));

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-[100px] p-4">
      {/* Reserved Rockets Section */}
      <div className="rocket-card">
        <h2 className="text-xl font-bold mb-4">My Rockets</h2>
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

      {/* Joined Missions Section */}
      <div className="mission-card">
        <h2 className="text-xl font-bold mb-4">My Missions</h2>
        {missions.length > 0 ? (
          <ul className="profile-card border border-gray-800 rounded-lg p-4">
            {missions.map((mission) => (
              <li key={mission.mission_id} className="border-b border-gray-600 py-2">
                {mission.mission_name}
              </li>
            ))}
          </ul>
        ) : (
          <p>No reserved missions.</p>
        )}
      </div>

      {/* Reserved Dragons Section */}
      <div className="dragon-card">
        <h2 className="text-xl font-bold mb-4">My Dragons</h2>
        {dragons.length > 0 ? (
          <ul className="profile-card border border-gray-800 rounded-lg p-4">
            {dragons.map((dragon) => (
              <li key={dragon.id} className="border-b border-gray-600 py-2">
                {dragon.name}
              </li>
            ))}
          </ul>
        ) : (
          <p>No reserved dragons.</p>
        )}
      </div>
    </div>
  );
};

export default MyProfile;
