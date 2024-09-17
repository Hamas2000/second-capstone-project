import React, { useState } from 'react';
import PropTypes from 'prop-types';

function Mission({ mission, onJoin, onLeave }) {
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
      <td className="py-2 px-4 font-bold text-custom-text border-r border-gray-300">
        {mission.mission_name}
      </td>

      <td className="py-2 px-4 text-justify text-sm md:text-base text-custom-text border-r border-gray-300">
        {mission.description}
      </td>

      <td className="py-2 px-4 whitespace-nowrap">
        {isActive ? (
          <div className="flex items-center space-x-2">
            <span className="text-green-700 font-semibold text-sm md:text-base">Active Member</span>
            <button
              type="button"
              onClick={handleLeaveClick}
              className="px-2 py-1 bg-red-700 text-white rounded-md hover:bg-red-800 transition"
            >
              Leave Mission
            </button>
          </div>
        ) : (
          <div className="flex items-center space-x-2">
            <span className="text-gray-500 font-semibold text-sm md:text-base">Not a Member</span>
            <button
              type="button"
              onClick={handleJoinClick}
              className="px-2 py-1"
              style={{ backgroundColor: '#4DBFBB', color: 'white' }}
            >
              Join Mission
            </button>
          </div>
        )}
      </td>
    </tr>
  );
}

Mission.propTypes = {
  mission: PropTypes.shape({
    mission_name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    reserved: PropTypes.bool.isRequired,
  }).isRequired,
  onJoin: PropTypes.func.isRequired,
  onLeave: PropTypes.func.isRequired,
};

export default Mission;
