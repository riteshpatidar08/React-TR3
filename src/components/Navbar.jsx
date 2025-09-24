import React from 'react';
import { Link } from 'react-router-dom';
function Navbar() {
  const navlinks = [
    { to: '/', title: 'Home' },
    { to: '/services', title: 'Services' },
    { to: '/about-us', title: 'About us' },
  ];
  return (
    <header>
      <nav className="flex gap-6">
        {/* <Link className="text-3xl font-bold" to="/">
          Home
        </Link>
        <Link className="text-3xl font-bold" to="/services">
          Service
        </Link>
        <Link className="text-3xl font-bold" to="/about-us">
          About
        </Link> */}

        {navlinks.map((nav) => (
          <Link className="text-3xl font-bold" to={nav.to}>
            {nav.title}
          </Link>
        ))}
      </nav>
    </header>
  );
}

export default Navbar;
