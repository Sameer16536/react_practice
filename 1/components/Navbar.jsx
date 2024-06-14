import React from 'react';
import { Link } from 'react-router-dom';
import './css/navbar.css';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to='/'>Landing</Link>
        </li>
        <li>
          <Link to='/dashboard'>Dashboard</Link>
        </li>
        <li>
          <Link to='/about'>About Us</Link>
        </li>
        <li>
          <Link to='/contact'>Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
