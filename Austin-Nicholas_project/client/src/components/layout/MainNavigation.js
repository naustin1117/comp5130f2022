import classes from "./MainNavigation.module.css";
import React, {useState} from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './MainNavigationElements';
import { useAuth } from "../contexts/AuthContext"
import { useHistory } from 'react-router-dom'

function GuestGreeting(props){
  return(
    <>
      <NavLink to="/Signup" activeStyle>
        Sign Up 
      </NavLink>
      <NavLink to="/Signin" activeStyle>
        Sign In
      </NavLink>
    </>
  );
}
function UserGreeting(props){
  return(
    <>
      <NavLink to="/NewListing" activeStyle>
        Create Listing
      </NavLink>
      <NavLink to="/" activeStyle onClick={props.handleLogout}>
        Log Out
      </NavLink>
    </>
  );
}

function Greeting(props){
  const currentUser = props.currentUser;
  console.log(currentUser);
  if (currentUser != null) {
    return <UserGreeting 
    email={currentUser.email}
    handleLogout={props.handleLogout}/>
  }
  return <GuestGreeting />
}

function MainNavigation() {
  const { currentUser, logout} = useAuth()
  const [error,setError] = useState("")


  async function handleLogout(){
    setError('')

    try {
      await logout()
    } catch {
      setError("Failed to log out")
    }
  }
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <NavLink to='/' activeStyle>
          Used PC Parts
        </NavLink>
      </div>
      <nav>
        <NavMenu>
          <Greeting currentUser={currentUser} handleLogout={handleLogout}/>
        </NavMenu>
      </nav>
    </header>
  );
}
export default MainNavigation;
