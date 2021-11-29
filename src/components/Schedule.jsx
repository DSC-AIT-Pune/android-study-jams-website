import React from 'react';
import Timeline from "../common/Timeline";
import "../styles/css/timeline.css";

const Home = () => {
	return (
		<div className="schedule-section">
			  <div>
      <h1>Schedule </h1>
        <h2>Timeline that shows you where you are !!!!!! </h2>

      </div>
     
      <div className="TimelineContainer">
          <Timeline/>
        </div>
		</div>
	);
};

export default Home;
