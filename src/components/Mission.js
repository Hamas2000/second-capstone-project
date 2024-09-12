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
    <tr className="border-b border-gray-300">
      {}
      <td className="py-4 px-6 font-bold text-gray-800 border-r border-gray-300">{mission.mission_name}</td>

      {}
      <td className="py-4 px-6 text-gray-700 border-r border-gray-300">{mission.description}</td>

      {}
      <td className="py-4 px-6 whitespace-nowrap">
        {isActive ? (
          <div className="flex items-center space-x-2">
            <span className="text-green-700 font-semibold">Active Member</span>
            <button
              onClick={handleLeaveClick}
              className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
            >
              Leave Mission
            </button>
          </div>
        ) : (
          <div className="flex items-center space-x-2">
            <span className="text-gray-500 font-semibold">Not a Member</span>
            <button
              onClick={handleJoinClick}
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
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


