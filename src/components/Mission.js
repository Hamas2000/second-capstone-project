<<<<<<< HEAD
import React from 'react';

const Mission = ({ mission, onJoin, onLeave }) => {
  const { mission_id, mission_name, description, joined } = mission;

  return (
    <div className="border p-4 rounded-lg shadow-lg">
      <h2 className="text-xl font-semibold mb-2">{mission_name}</h2>
      <p className="mb-4">{description}</p>
      {joined ? (
        <button
          onClick={() => onLeave(mission_id)}
          className="bg-red-500 text-white py-2 px-4 rounded"
        >
          Leave Mission
        </button>
      ) : (
        <button
          onClick={() => onJoin(mission_id)}
          className="bg-blue-500 text-white py-2 px-4 rounded"
        >
          Join Mission
        </button>
      )}
      {joined && <p className="text-green-500">Active Member</p>}
      {!joined && <p className="text-gray-500">Not a member</p>}
    </div>
  );
};

export default Mission;
=======
import React, { useState } from 'react'; 

const Mission = ({ mission, onJoin, onLeave }) => {
  const [isActive, setIsActive] = useState(mission.reserved);

  const handleJoinClick = () => {
    onJoin();
    setIsActive(true);
  };

  const handleLeaveClick = () => {
    onLeave();
    setIsActive(false);
  };

  return (
    <tr className="border-b border-gray-300 bg-custom-bg text-custom-text">
      <td className="py-4 px-6 font-bold text-custom-text border-r border-gray-300">
        {mission.mission_name}
      </td>

      <td className="py-4 px-6 text-justify text-20px text-custom-text border-r border-gray-300">
        {mission.description}
      </td>

      <td className="py-4 px-6 whitespace-nowrap">
        {isActive ? (
          <div className="flex items-center space-x-2">
            <span className="text-green-700 font-semibold" class="active">Active Member</span>
            <button
              onClick={handleLeaveClick}
              className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition" class="leave"
            >
              Leave Mission
            </button>
          </div>
        ) : (
          <div className="flex items-center space-x-2">
            <span className="text-gray-500 font-semibold" class="member">Not a Member</span>
            <button
              onClick={handleJoinClick}
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition" class="join"
            >
              Join Mission
            </button>
          </div>
        )}
      </td>
    </tr>
  );
};

export default Mission; 


>>>>>>> e5c12ac64ff6cedd0b3884d3caff04f9c7cd7c67
