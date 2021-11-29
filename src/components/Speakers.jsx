import React from 'react';
import "../styles/css/home.css";
import rulebookSvg from "../styles/images/rulebookSvg.svg";


const Speakers = () => {
	return (
		<div className="speakers-section">
			 <div className="speakerPage" id="speakers">
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
        
      </div>
		</div>
	);
};

export default Speakers;
