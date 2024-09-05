// src/components/Rockets.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { reserveRocket, cancelRocket } from '../redux/rocketsSlice';

const Rockets = () => {
  const rockets = useSelector((state) => state.rockets);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Available Rockets</h2>
      {rockets.map((rocket) => (
        <div key={rocket.id}>
          <h3>{rocket.rocket_name}</h3>
          <p>{rocket.description}</p>
          <button
            onClick={() => rocket.reserved ? dispatch(cancelRocket(rocket.id)) : dispatch(reserveRocket(rocket.id))}
          >
            {rocket.reserved ? 'Cancel Reservation' : 'Reserve Rocket'}
          </button>
          {rocket.reserved && <span>Reserved</span>}
        </div>
      ))}
    </div>
  );
};

export default Rockets;
