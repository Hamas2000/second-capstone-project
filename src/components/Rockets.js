// src/components/Rockets.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setRockets } from '../redux/rocketsSlice'; // Redux actions
import Rocket from './Rocket'; // Separate component for rendering individual rockets

const Rockets = () => {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rockets.rockets); // Access rockets from Redux store
  const reservedRockets = useSelector((state) => state.rockets.reservedRockets);

  useEffect(() => {
    const fetchRockets = async () => {
      const response = await fetch('https://api.spacexdata.com/v4/rockets');
      const data = await response.json();
      dispatch(setRockets(data));
    };
    fetchRockets();
  }, [dispatch]);

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
              reserved={reservedRockets.includes(rocket.id)}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Rockets;
