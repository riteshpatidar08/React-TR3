import React from 'react';
import { Link } from 'react-router-dom';
function Navbar() {
  return (
    <header>
      <nav className="flex gap-6">
        <Link className="text-3xl font-bold" to="/">
          Home
        </Link>
        <Link className="text-3xl font-bold" to="/services">
          Service
        </Link>
        <Link className="text-3xl font-bold" to="/about-us">
          About
        </Link>
      </nav>
    </header>
  );
}

export default Navbar;
