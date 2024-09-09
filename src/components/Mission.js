import React from 'react';

const Mission = ({ mission, onJoin, onLeave }) => {
  const { mission_id, mission_name, description, joined } = mission;

  return (
    <div className="border p-4 rounded-lg shadow-lg">
      <h2 className="text-xl font-semibold mb-2">{mission_name}</h2>
      <p className="mb-4">{description}</p>
      {joined ? (
        <button
          onClick={onLeave}
          className="bg-red-500 text-white py-2 px-4 rounded"
        >
          Leave Mission
        </button>
      ) : (
        <button
          onClick={onJoin}
          className="bg-blue-500 text-white py-2 px-4 rounded"
        >
          Join Mission
        </button>
      )}
    </div>
  );
};

export default Mission;
