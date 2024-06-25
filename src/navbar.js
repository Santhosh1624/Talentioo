// src/Navbar.js

import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';  // Import CSS for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">MyApp</Link>
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/signup">Sign Up</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/todolist">Todo List</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
