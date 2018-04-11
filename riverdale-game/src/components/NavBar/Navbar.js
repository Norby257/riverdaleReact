import React from "react";
import "./Navbar.css"
// import { Link } from "react-router-dom";
//  this might be dynamic later 
//  but keeping it static for now 
const NavBar = () => (
  //  can adjust this boostrap one to whichever style looks best with the app
  <nav className ="navbar navbar-expand-lg navbar-light bg-light">
  <div>
      <ul className="navbar-nav">
        <li>
            Clicky Game
            </li>
          </ul>
      </div>
  </nav>
)

export default NavBar;