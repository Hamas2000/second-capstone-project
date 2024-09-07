import React from 'react';

const RocketsItem = ({ rocket, onReserve, onCancel }) => {
  const { id, rocket_name, description, flickr_images, reserved } = rocket;

  return (
    <div className="border p-4 rounded-lg shadow-lg">
      <img src={flickr_images[0]} alt={rocket_name} className="w-full h-48 object-cover rounded-t-lg mb-4" />
      <h2 className="text-xl font-semibold mb-2">{rocket_name}</h2>
      <p className="mb-4">{description}</p>
      {reserved ? (
        <button
          onClick={onCancel}
          className="bg-red-500 text-white py-2 px-4 rounded"
        >
          Cancel Reservation
        </button>
      ) : (
        <button
          onClick={onReserve}
          className="bg-blue-500 text-white py-2 px-4 rounded"
        >
          Reserve Rocket
        </button>
      )}
    </div>
  );
};

export default RocketsItem;