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

