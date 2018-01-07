import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import classes, { Active } from './NavLevels.css';

class NavLevels extends Component {
  state = {
    level: 1
  }

  render() {
    return (
      <nav className={classes.NavLevels}>
        <ul>
          <li>
            <NavLink 
              to="/"
              exact
              activeClassName={Active}>
              Home
            </NavLink>
          </li>
          <li><NavLink 
              to="/works"
              activeClassName={Active}>
              Works
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/about"
              activeClassName={Active}>
              About
            </NavLink>
          </li>
        </ul>
      </nav>
    )
  }
}
 
export default NavLevels;