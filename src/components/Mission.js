import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { join, leave } from '../redux/missions/missionSlice';

// Component to display and manage mission details
const Mission = (props) => {
  const {
    mission, description, id, reserved,
  } = props;
  const dispatch = useDispatch();

  const handleJoin = () => {
    dispatch(join(id));
  };

  const handleLeave = () => {
    dispatch(leave(id));
  };

  return (
    <div className="border p-4 rounded-lg shadow-lg">
      <h2 className="text-xl font-semibold mb-2">{mission}</h2>
      <p className="mb-4">{description}</p>
      {reserved ? (
        <button
          onClick={handleLeave}
          className="bg-red-500 text-white py-2 px-4 rounded"
        >
          Leave Mission
        </button>
      ) : (
        <button
          onClick={handleJoin}
          className="bg-blue-500 text-white py-2 px-4 rounded"
        >
          Join Mission
        </button>
      )}
    </div>
  );
};

// PropTypes for type checking
Mission.propTypes = {
  id: PropTypes.string.isRequired,
  reserved: PropTypes.bool.isRequired,
  mission: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Mission;

