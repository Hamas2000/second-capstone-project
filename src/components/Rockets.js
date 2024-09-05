// src/components/Rockets.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRockets } from '../redux/rockets/rocketsSlice';

const Rockets = () => {
  const dispatch = useDispatch();
  const { rockets, loading, error } = useSelector((state) => state.rockets);

  useEffect(() => {
    dispatch(fetchRockets());
  }, [dispatch]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h2>Rockets</h2>
      {rockets.map((rocket) => (
        <div key={rocket.id}>
          <h3>{rocket.name}</h3>
          <p>{rocket.description}</p>
          <img src={rocket.images[0]} alt={rocket.name} width="300" />
        </div>
      ))}
    </div>
  );
};

export default Rockets;
