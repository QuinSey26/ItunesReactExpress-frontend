import React from "react";
import { Link } from "react-router-dom";

//Import styling for navbar
import "./navbar.css";

// The NavBar component displays a navigation bar with links to different pages.
function NavBar() {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/search">Search</Link>
        </li>
        <li>
          <Link to="/favorites">Favorites</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
