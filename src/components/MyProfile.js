<<<<<<< traveler
// src/components/MyProfile.js

import React from 'react';
=======
import React from 'react'; 
>>>>>>> developments
import { useSelector } from 'react-redux';

const MyProfile = () => {
  const { rocketData } = useSelector((state) => state.rockets);
  const filterRockets = rocketData.filter((rocket) => rocket.reserved);
  const missionData = useSelector((state) => state.missions.missions);
  const filterMissions = missionData.filter((mission) => mission.reserved);

<<<<<<< traveler
  const solidShadow = '0px 4px 8px rgba(77, 191, 187, 0.7)'; // Solid shadow with the color #4dbfbb

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-[100px] profile-grid">
      <div
        className="mission-card bg-gray-200 text-black p-5 border border-gray-400" // Changed to bg-gray-200
=======
  const solidShadow = '0px 4px 8px rgba(77, 191, 187, 0.7)';
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-[100px] profile-grid">
      <div
        className="mission-card bg-transparent text-black p-5 border border-gray-400"
>>>>>>> developments
        style={{ boxShadow: solidShadow }}
      >
        <h2 className="text-xl font-bold mb-4">My Missions</h2>
        <ul className="profile-card border border-gray-400 rounded-lg p-4" style={{ boxShadow: solidShadow }}>
          {filterMissions.length > 0 ? (
            filterMissions.map((mission) => (
              <li key={mission.mission_id} className="border-b border-gray-300 py-2">{mission.mission_name}</li>
            ))
          ) : (
            <li>No reserved missions</li>
          )}
        </ul>
      </div>
      <div
<<<<<<< traveler
        className="rocket-card bg-gray-200 text-black p-5 border border-gray-400" // Changed to bg-gray-200
=======
        className="rocket-card bg-transparent text-black p-5 border border-gray-400"
>>>>>>> developments
        style={{ boxShadow: solidShadow }}
      >
        <h2 className="text-xl font-bold mb-4">My Rockets</h2>
        <ul className="profile-card border border-gray-400 rounded-lg p-4" style={{ boxShadow: solidShadow }}>
          {filterRockets.length > 0 ? (
            filterRockets.map((rocket) => (
              <li key={rocket.id} className="border-b border-gray-300 py-2">{rocket.name}</li>
            ))
          ) : (
            <li>No reserved rockets</li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default MyProfile;
