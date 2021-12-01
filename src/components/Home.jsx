import React from "react";
import TypedJs from "../common/TypedJs.jsx";
import Schedule from "./Schedule.jsx";
import Speakers from "./Speakers.jsx";
import Treasure from "./Treasure.jsx";
import detailSvg from "../styles/images/detailSvg.svg";
import rulebookSvg from "../styles/images/rulebookSvg.svg";
import { Link } from "react-router-dom";

import "../styles/css/home.css";

import poster from "../styles/images/gdscait-android-study-jams.svg";
import start from "../styles/images/startIcon.svg";
import mobileSvg from "../styles/images/mobileSvg.svg";
import Timeline from "../common/Timeline";
import { useHistory } from "react-router-dom";

const Home = () => {
  const history = useHistory();
  // const handleStart = () =>{
  //   history.push("/login");

  // }

  return (
    <div className="home-section">
      <div className="poster-container">
        <TypedJs
          strings={[
            "Hello and Welcome",
            "Are you excited to",
            "Become an Android Developer",
          ]}
          startDelay={1200}
          backDelay={500}
          typeSpeed={120}
          backSpeed={30}
          className="typedText"
        />
        <img className="poster" src={poster} alt="poster" />
      </div>

      <div className="regPage">
        <div className="regText">
          <p className="p1">Become a </p>
          <p className="p2">Android </p>
          <p className="p3">Developer </p>
          <p className="p4">Android Study Jams</p>
          <button>
            <Link
              to="/login"
              style={{
                color: "#142f40",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              Start Now
            </Link>
            <img src={start} />
          </button>
        </div>
        <div className="regSvg">
          <img src={mobileSvg} />
        </div>
      </div>

      <div className="detailPage">
        <div className="detailSVG">
          <img src={detailSvg} alt="detailSvg" />
        </div>
        <div className="detailText">
          <h1 className="detailintroheading">Android Study Jams </h1>
          <p className="detailintro">
            Android Study Jams is community-organized study groups for people to
            learn how to build Android apps in the Kotlin programming language,
            using the curriculum provided by Google. Android Basics is a series
            of sessions focused specifically on learning how to build Android
            apps without prior Android experience....
          </p>

          <button>
            <a
              href="https://developer.android.com/courses/android-development-with-kotlin/course?utm_source=dac&utm_medium=website&utm_campaign=edu
              "
              style={{ color: "#142f40" }}
            >
              Explore
            </a>{" "}
            <img src={rulebookSvg} alt="" />
          </button>
        </div>
        <div className="detailCircle"></div>
      </div>
      {/* <div className="speakerPage" id="speakers">
        <div className="speakerText">
          <h1 className="speakerintroheading">Samik Choudhary </h1>
          <p className="detailintro">
            This is all about android study jams and how to have to proceed to
            gain knowlege and goodies from Us this is all about android study
            jams and how to have to proceed to gain knowlege and goodies from
            Us...
          </p>

          <button>
            Know More <img src={rulebookSvg} alt="" />
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
        <div className="speakerText">
          <h1 className="speakerintroheading">Samik Choudhary </h1>
          <p className="detailintro">
            This is all about android study jams and how to have to proceed to
            gain knowlege and goodies from Us this is all about android study
            jams and how to have to proceed to gain knowlege and goodies from
            Us...
          </p>

          <button onClick={()=>{}}>
            Know More <img src={rulebookSvg} alt="" />
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
        
      </div> */}
    </div>
  );
};

export default Home;
