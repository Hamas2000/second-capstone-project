import React from 'react';
import PropTypes from 'prop-types';

const RocketsItem = ({ 
  id, 
  name, 
  image, 
  description, 
  reserved 
}) => (
  <li className="rocket-item border border-gray-300 p-4 rounded-md">
    <img src={image} alt={name} className="w-full h-40 object-cover mb-2" />
    <h3 className="text-lg font-semibold">{name}</h3>
    <p className="text-gray-600">{description}</p>
    <button
      type="button"
      className={`mt-2 px-4 py-2 rounded-md ${reserved ? 'bg-red-500' : 'bg-blue-500'} text-white`}
    >
      {reserved ? 'Cancel Reservation' : 'Reserve Rocket'}
    </button>
  </li>
);

RocketsItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  reserved: PropTypes.bool.isRequired,
};

export default RocketsItem;
