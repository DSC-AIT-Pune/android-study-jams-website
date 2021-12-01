import React from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import "../styles/css/navbar.css";

import kotlinHero from "../styles/images/gdscLogo.svg";
import android from "../styles/images/android.svg";
import more from "../styles/images/more.svg";
import home from "../styles/images/home.svg";
import calender from "../styles/images/calender.svg";
import scoreboard from "../styles/images/scoreboard.svg";
import contact from "../styles/images/contact.svg";
import up from "../styles/images/up.svg";
import BottomNavBar from "./BottomNavbar";
import person from "../styles/images/person.svg"


const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-items">
        <div className="navbar-logo-container">
          <NavLink to="/">
            {/* <img className="navbar-logo" src={kotlinHero} alt="logo"/> */}
            <img className="navbar-logo" src={kotlinHero} alt="logo" />
          </NavLink>
        </div>
        <div className="navbar-title-container">
          <div className="navbar-title">
            <a className="navbar-title-link" href="https://gdscait.org/">
              GDSC AIT
            </a>
          </div>
        </div>
        <div className="navbar-links-container">
          {/* <img className="android-logo" src={android} alt="android"/> */}
          <NavLink to="/" className="navbar-links">
            Home
          </NavLink>
          <NavLink to="/schedule" className="navbar-links">
            Schedule
          </NavLink>
          <NavLink to="/speakers" className="navbar-links">
            Speakers
          </NavLink>
          <NavLink to="/hackathon" className="navbar-links">
            Hackathon
          </NavLink>
          <NavLink to="/login" className="navbar-links" style={{ backgroundColor: "#13bb5e"}}>
            Login <img src={person} alt="" />
          </NavLink>
        </div>
        <div className="mobileNavbar">
          
          <div className="columnNavbar">
            <Link className="home" to="/">
              <img src={home} alt="" />
            </Link>
            <Link className="calender" to="/schedule">
              <img src={calender} alt="" />
            </Link>

            <Link className="contact" to="/speakers">
              <img src={contact} alt="" />
            </Link>
            <Link className="Scoreboard" to="/hackathon">
              <img src={scoreboard} alt="" />
            </Link>
            {/* <Link className="close" to="/login">
              <img className="upArrow" src={person} alt="" />
            </Link> */}
          </div> 
          
        </div>
      </div>
    </div>
  );
};

export default Navbar;
