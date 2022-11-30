import classes from "./MainNavigation.module.css";
import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './MainNavigationElements';

function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <NavLink to='/' activeStyle>
          Used PC Parts 
        </NavLink>
      </div>
      <nav>
        <NavMenu>
          <NavLink to="/Signup" activeStyle>
            Sign Up 
          </NavLink>
          <NavLink to="/Signin" activeStyle>
            Sign In
          </NavLink>
          <NavLink to="/NewListing" activeStyle>
            Create Listing
          </NavLink>
        </NavMenu>
      </nav>
    </header>
  );
}
export default MainNavigation;
