import React from 'react';
import {NavLink} from 'react-router-dom';
import "../styles/css/navbar.css";

import kotlinHero from "../styles/images/kotlin-hero.svg";
import android from "../styles/images/android.svg";

const Navbar = () => {
	return (
		<div className="navbar">
			<div className="navbar-items">
			    <div className="navbar-logo-container">
			        <NavLink to="/">
                      <img className="navbar-logo" src={kotlinHero} alt="logo"/>
                    </NavLink>
			    </div>
			    <div className="navbar-title-container">
			        <div className="navbar-title">
			            <a className="navbar-title-link" href = "https://gdscait.org/">
			                GDSC AIT
		                </a> | Android Study Jams 2021
		            </div>
			    </div>
			    <div className="navbar-links-container">
			        <img className="android-logo" src={android} alt="android"/>
	                <NavLink to="/" className="navbar-links">
	                    Home
	                </NavLink>
					<NavLink to="#schedule" className="navbar-links">
						Schedule
					</NavLink>
					<NavLink to="#speakers" className="navbar-links">
						Speakers
					</NavLink>
					<NavLink to="#treasure" className="navbar-links">
                        Treasure
                    </NavLink>
					<NavLink to="#contact" className="navbar-links">
						Contact Us
					</NavLink>
			    </div>
		    </div>
		</div>
	);
};

export default Navbar;
