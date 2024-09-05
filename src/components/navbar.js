import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo Section */}
        <div className="flex items-center">
          {/* Add your logo image */}
          <img src="/images/logo.png" alt="Project Logo" className="h-12 w-12 mr-3" />
          <h1 className="text-2xl font-bold">Space Travelers' Hub</h1>
        </div>

        {/* Navigation Links */}
        <nav className="flex space-x-6">
          <NavLink
            to="/rockets"
            className={({ isActive }) =>
              isActive
                ? 'text-blue-500 font-medium border-b-2 border-blue-500'
                : 'text-gray-700 hover:text-blue-500 font-medium'
            }
          >
            Rockets
          </NavLink>
          <NavLink
            to="/missions"
            className={({ isActive }) =>
              isActive
                ? 'text-blue-500 font-medium border-b-2 border-blue-500'
                : 'text-gray-700 hover:text-blue-500 font-medium'
            }
          >
            Missions
          </NavLink>
          <NavLink
            to="/profile"
            className={({ isActive }) =>
              isActive
                ? 'text-blue-500 font-medium border-b-2 border-blue-500'
                : 'text-gray-700 hover:text-blue-500 font-medium'
            }
          >
            My Profile
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
