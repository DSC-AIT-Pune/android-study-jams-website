import React from "react";
import "../styles/css/aboutUs.css";
import facebook from "../styles/images/facebook.svg";
import instagram from "../styles/images/instagram.svg";
import discord from "../styles/images/discord.svg";
import linkedIn from "../styles/images/linkedIn.svg";
import github from "../styles/images/github.svg";

const Contact = () => {
  return (
    <div className="footer">
      <div className="about-us">
        <h1>Contact</h1>
        <p>
          for more info get in contact with our social media handles and explore
          more resoureces from our community daly{" "}
        </p>{" "}
      </div>
      <div className="links">
        <div className="linkContainer">
          <a href="https://google.com" className="linkBox">
            <img src={facebook} alt="" />
            facebook
          </a>
          <a href="https://google.com" className="linkBox">
            <img src={instagram} alt="" />
            Instagram
          </a>
          <a href="https://google.com" className="linkBox">
            <img src={discord} alt="" />
            Discord
          </a>

          <a href="https://google.com" className="linkBox">
            {" "}
            <img src={linkedIn} alt="" />
            LinkedIn
          </a>
          <a href="https://google.com" className="linkBox">
            <img src={github} alt="" />
            Github
          </a>
        </div>
      </div>
      <div className="made">
        <p>
          Made with  ❤️ 
		  {/* &#128148; */}
		    by GDSC AIT Pune{" "}
        </p>
      </div>
    </div>
  );
};

export default Contact;
