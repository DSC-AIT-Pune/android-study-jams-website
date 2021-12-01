import React from "react";
import "../styles/css/home.css";
import rulebookSvg from "../styles/images/rulebookSvg.svg";

const Speakers = () => {
  return (
    <div className="speakers-section">
      <div className="speakerPage" id="speakers">
        <div className="speakerText speakerText1">
          <h1 className="speakerintroheading">Chandresh Singh</h1>
          <p style={{ fontSize: "18px" }}>Instructor</p>
          <p className="detailintro">
            He is the instructor for Android Study Jams 2021, where he will
            guide you in the journey of Android Development and make you
            understand the topics with work experience in Android and Web
            platforms having a great passion for technology and innovations.{" "}
          </p>

          <button>
          <a
            href="https://www.linkedin.com/in/chandresh-singh-dev/"
             style={{ color:"#142f40"}}
             target="_blank"
          >
            Know More </a> <img src={rulebookSvg} alt="" />
          </button>
        </div>
        <div className="speakerSvg">
          <div className="circle1">
            <div className="circle2">
              <div className="circle4"></div>
              <div className="circle3"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="speakerPage reverse">
        <div className="speakerText speakerText1">
          <h1 className="speakerintroheading">Rohit Kumar </h1>
          <p style={{ fontSize: "18px" }}>Instructor</p>
          <p className="detailintro">
            He is the instructor for Android Study Jams 2021, where he will
            guide you in the journey of UI/UX Design and Android Development and
            make you understand the topics.
          </p>

          <button onClick={() => {}}>
          <a
            href="https://www.linkedin.com/in/rohitkumar-yadav/"
             style={{ color:"#142f40"}}
             target="_blank"
          >
            Know More </a> <img src={rulebookSvg} alt="" />
          </button>
        </div>
        <div className="speakerSvg">
          <div className="circle1">
            <div className="circle2 speaker3">
              <div className="circle4"></div>
              <div className="circle3"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="speakerPage" id="speakers">
        <div className="speakerText speakerText1">
          <h1 className="speakerintroheading">Samik choudhury</h1>
          <p style={{ fontSize: "18px" }}>Facilitator</p>
          <p className="detailintro">
            He is currently in second year, He likes to develop solution to real
            world problems through programming or by creating an application. He
            has been participant of Android Study Jams 2020 from where he
            kickstarted his journey of Android Development.{" "}
          </p>

          <button>
          <a
            href="https://www.linkedin.com/in/samik15/"
             style={{ color:"#142f40"}}
             target="_blank"
             
          >
            Know More </a> <img src={rulebookSvg} alt="" />
          </button>
        </div>
        <div className="speakerSvg">
          <div className="circle1">
            <div className="circle2 speaker2">
              <div className="circle4"></div>
              <div className="circle3"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Speakers;
