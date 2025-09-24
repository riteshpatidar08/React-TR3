import React from 'react';

function Navbar() {
  return (
    <header>
      <nav className="flex gap-6">
        <a className="text-3xl font-bold" href="">
          Home
        </a>
        <a className="text-3xl font-bold" href="">
          Service
        </a>
        <a className="text-3xl font-bold" href="">
          About
        </a>
      </nav>
    </header>
  );
}

export default Navbar;
