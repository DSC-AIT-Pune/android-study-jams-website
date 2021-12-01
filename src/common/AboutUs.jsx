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
          For more info, contact us on our social media handles and explore more
          resources from our community.{" "}
        </p>{" "}
      </div>
      <div className="links">
        <div className="linkContainer">
          <a href="https://www.facebook.com/dsc.aitpune" className="linkBox"  target="_blank">
            <img src={facebook} alt="" />
            facebook
          </a>
          <a href="https://www.instagram.com/gdsc_aitpune/" className="linkBox"  target="_blank">
            <img src={instagram} alt="" />
            Instagram
          </a>
          <a href="https://discord.com/invite/56sCubbrtp" className="linkBox"  target="_blank">
            <img src={discord} alt="" />
            Discord
          </a>

          <a
            href="https://www.linkedin.com/company/gdsc-aitpune/"
            className="linkBox"
            target="_blank"
          >
            {" "}
            <img src={linkedIn} alt="" />
            LinkedIn
          </a>
          <a href="https://github.com/DSC-AIT-Pune" className="linkBox"  target="_blank">
            <img src={github} alt="" />
            Github
          </a>
        </div>
      </div>
      <div className="made">
        <p>
          Made with <span style={{color:"red"}}>❤️</span> by GDSC AIT Pune{" "}
        </p>
      </div>
    </div>
  );
};

export default Contact;
