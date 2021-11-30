import React from 'react';
import "../styles/css/home.css";
import rulebookSvg from "../styles/images/rulebookSvg.svg";


const Speakers = () => {
	return (
		<div className="speakers-section">
			 <div className="speakerPage" id="speakers">
        <div className="speakerText speakerText1">
          <h1 className="speakerintroheading">Chandresh Singh</h1>
          <p className="detailintro">
          He is a full stack developer with work experience in Android and Web platforms having a great passion for technology and innovations. His latest Android app provides users with reliable environmental data based on their location with many different features for a sustainable tomorrow. Currently, he is Tech Lead at Solvabit where he design and integrate android apps that combine seamlessly with client processes...          </p>

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
          <h1 className="speakerintroheading">Samik Choudhury </h1>
          <p className="detailintro">
          He is currently in second year, He likes to develop solution to real world problems through programming or by creating an application. He has been participant of Android Study Jams 2020 from where he kickstarted his journey of Android Development....
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
        
      </div>
		</div>
	);
};

export default Speakers;
