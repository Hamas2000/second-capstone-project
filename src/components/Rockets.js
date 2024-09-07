import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setRockets, reserveRocket, cancelReservation } from '../redux/rockets/rocketsSlice';
import RocketsItem from './RocketsItem';

const Rockets = () => {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rockets.rockets);

  useEffect(() => {
    const fetchRockets = async () => {
      const response = await fetch('https://api.spacexdata.com/v4/rockets');
      const data = await response.json();
      dispatch(setRockets(data));
    };

    fetchRockets();
  }, [dispatch]);

  const handleReserve = (id) => {
    dispatch(reserveRocket(id));
  };

  const handleCancel = (id) => {
    dispatch(cancelReservation(id));
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Rockets</h1>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {rockets.map((rocket) => (
          <RocketsItem
            key={rocket.id}
            rocket={rocket}
            onReserve={() => handleReserve(rocket.id)}
            onCancel={() => handleCancel(rocket.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default Rockets;