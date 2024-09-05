// src/components/Header.js
import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <nav>
      <NavLink to="/" activeClassName="active">Rockets</NavLink>
      <NavLink to="/missions" activeClassName="active">Missions</NavLink>
      <NavLink to="/profile" activeClassName="active">My Profile</NavLink>
    </nav>
  );
};

export default Header;
