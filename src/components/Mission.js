import React, { useState } from 'react'; 
import PropTypes from 'prop-types';

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

      <td className="py-4 px-6 text-justify text-10px text-custom-text text-smaller-weight border-r border-gray-300">
        {mission.description}
      </td>

      <td className="py-4 px-6 whitespace-nowrap">
        {isActive ? (
          <div className="flex items-center space-x-2">
            <span className="text-green-700 font-semibold">Active Member</span>
            <button
              type="button"
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
              type="button"
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
