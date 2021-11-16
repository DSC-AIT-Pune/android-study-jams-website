import React from 'react';
import TypedJs from "../common/TypedJs.jsx";
import Schedule from "./Schedule.jsx";
import Speakers from "./Speakers.jsx";
import Treasure from "./Treasure.jsx";
import "../styles/css/home.css";

import poster from "../styles/images/gdscait-android-study-jams.svg";

const Home = () => {
	return (
		<div className="home-section">
			<div className="poster-container">
				<TypedJs strings={[
                        'Hello and Welcome',
                        'Are you excited to',
                        'Become an Android Developer'
                    ]}
                    startDelay={1200}
                    backDelay={500}
                    typeSpeed={120}
                    backSpeed={30}
				/>
                <img className="poster" src={poster} alt="poster"/>
			</div>
			This is home page.
			<Schedule/>
			<Speakers/>
			<Treasure/>
		</div>
	);
};

export default Home;
