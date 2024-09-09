import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between">
        <NavLink
          to="/"
          className="text-white text-lg font-semibold"
          activeClassName="underline"
        >
          Rockets
        </NavLink>
        <NavLink
          to="/missions"
          className="text-white text-lg font-semibold"
          activeClassName="underline"
        >
          Missions
        </NavLink>
        <NavLink
          to="/profile"
          className="text-white text-lg font-semibold"
          activeClassName="underline"
        >
          My Profile
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
