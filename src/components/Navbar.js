import React from 'react';

export const Navbar = () => (
  <nav className="navbar navbar-dark bg-primary navbar-expand-lg">
    <div className="navbar-brand">
      Github Search
    </div>
    <ul className="navbar-nav">
      <li className="nav-item">
        <a href="/" className="nav-link">Main</a>
      </li>
      <li className="nav-item">
        <a href="/info" className="nav-link">Info</a>
      </li>
    </ul>
  </nav>
);