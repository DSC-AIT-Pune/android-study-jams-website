import React from 'react';
import "../styles/css/treasure.css";
import treasure from "../styles/images/Treasure.png";

const Treasure = () => {
	return (
		<div className="treasure-section">
			<img src={treasure} alt="" />
			<p>Coming Soon...</p>
		</div>
	);
};

export default Treasure;
