import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/css/navbar.css";

import kotlinHero from "../styles/images/gdscLogo.svg";
import android from "../styles/images/android.svg";
import more from "../styles/images/more.svg";
import home from "../styles/images/home.svg";
import calender from "../styles/images/calender.svg";
import socreboard from "../styles/images/socreboard.svg";
import contact from "../styles/images/contact.svg";
import up from "../styles/images/up.svg";

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
          <NavLink to="/Schedule" className="navbar-links">
            Schedule
          </NavLink>
          <NavLink to="/speakers" className="navbar-links">
            Speakers
          </NavLink>
          <NavLink to="/treasure" className="navbar-links">
            Treasure
          </NavLink>
          <NavLink to="/login" className="navbar-links">
            Login/singIN
          </NavLink>
        </div>
        <div className="mobileNavbar">
          <img src={more} alt="" />
          <div className="columnNavbar">
            <a className="home" href="">
              <img src={home} alt="" />
            </a>
            <a className="calender" href="">
              <img src={calender} alt="" />
            </a>

            <a className="contact" href="">
              <img src={contact} alt="" />
            </a>
            <a className="Scoreboard" href="">
              <img src={socreboard} alt="" />
            </a>
            <a className="close" href="">
              <img className="upArrow" src={up} alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
