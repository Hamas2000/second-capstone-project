import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo-react.png';

function Navbar() {
  return (
    <header className="bg-white shadow h-24">
      <div className="container mx-auto px-4 flex justify-between items-center h-full">
        <div className="flex items-center ml-1">
          <img src={logo} className="h-16 w-16" alt="Space Travelers Hub logo" />
          <h1 className="text-2xl font-bold ml-2">Space Travelers Hub</h1>
        </div>
        <nav>
          <ul className="flex space-x-8 list-none">
            {['/', '/missions', '/profile'].map((path) => (
              <li key={path} className="relative flex items-center group">
                <NavLink
                  to={path}
                  className={({ isActive }) => `inline-block ${isActive ? 'font-semibold' : 'text-gray-700'} hover:text-orange-600 hover:underline`} 
                >
                  {path === '/' ? 'Rockets' : path.charAt(1).toUpperCase() + path.slice(2)}
                </NavLink>
                <span className="ml-2 h-6 border-l-2 border-transparent transition-all duration-300 group-hover:border-orange-600" />
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
