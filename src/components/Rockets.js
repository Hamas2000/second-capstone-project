import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRockets } from '../redux/rockets/RocketsSlice'; // Ensure the path is correct
import Rocket from './Rocket'; // Component to render individual rockets

const Rockets = () => {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rockets.rockets); // Get rockets from Redux store
  const reservedRockets = useSelector((state) => state.rockets.reservedRockets); // Get reserved rockets
  const status = useSelector((state) => state.rockets.status); // Get loading status
  const error = useSelector((state) => state.rockets.error); // Get error message

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchRockets()); // Dispatch action to fetch rockets
    }
  }, [dispatch, status]);

  if (status === 'loading') {
    return <div>Loading...</div>; // Show loading indicator
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>; // Show error message
  }

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border-collapse">
        <thead className="bg-gray-200">
          <tr>
            <th className="border px-2 sm:px-4 py-2 text-xs sm:text-sm text-left">Rocket</th>
            <th className="border px-2 sm:px-4 py-2 text-xs sm:text-sm text-left">Description</th>
            <th className="border px-2 sm:px-4 py-2 text-xs sm:text-sm text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {rockets.map((rocket) => (
            <Rocket
              key={rocket.id}
              id={rocket.id}
              name={rocket.name}
              description={rocket.description}
              reserved={reservedRockets.includes(rocket.id)} // Check if the rocket is reserved
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Rockets; // Export the component
