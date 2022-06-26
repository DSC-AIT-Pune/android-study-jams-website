import React from "react";
import { useState } from "react";
import "../styles/css/treasure.css";
import treasure from "../styles/images/Treasure.png";
import poster from "../styles/images/winner.png";
import winner from "../styles/images/winnerCongrats.png";
import firstwinner from "../styles/images/firstWinner.png";
import secondwinner from "../styles/images/secondWinner.png";
import thirdwinner from "../styles/images/thirdWinner.png";

const Treasure = () => {
  const [list, setList] = useState([
    { No: "S.NO", TeamName: "Team Name", status: "Status" },
    { No: 1, TeamName: "Programatically_Entangled", status: "submitted" },
    { No: 2, TeamName: "4L4P", status: "submitted" },
    { No: 3, TeamName: "Exception", status: "submitted" },
    { No: 5, TeamName: "IRENIC_Spirits", status: "submitted" },
    { No: 6, TeamName: "TeaM HunTers", status: "submitted" },
    { No: 7, TeamName: "Abstract Devs", status: "submitted" },
    { No: 8, TeamName: "EMULATORS ", status: "submitted" },
    { No: 9, TeamName: "Alien to Android", status: "submitted" },
    { No: 10, TeamName: "Hackshaw", status: "submitted" },
    { No: 11, TeamName: "Infinity", status: "submitted" },
    { No: 12, TeamName: "Orario", status: "submitted" },
  ]);

  return (
    <div className="treasure-section">
      <div className="banner">
        <div className="poster2">
          <img src={poster} alt="" />
          <h1>APP Dev Contest 2.0</h1>
        </div>
      </div>
      <div className="winnerBanner">
        {/* <span className="winnerHeading">Winners of Android Study Jams </span> */}
        <span className="winnerHeading">
          <img src={winner} alt="sdfsdf" />
        </span>
        <div className="winner2">
          <img src={secondwinner} alt="" />
          <h2>Team Name</h2>
          <h3>Team Leader Name </h3>
          <br></br>
          <h4>Project Link</h4>
        </div>
        <div className="winner1">
          <img src={firstwinner} alt="" />
          <h2>Team Name</h2>
          <h3>Team Leader Name </h3>
          <br></br>
          <h4>Project Link</h4>
        </div>
        <div className="winner3">
          <img src={thirdwinner} alt="" />
          <h2>Team Name</h2>
          <h3>Team Leader Name </h3>
          <br></br>
          <h4>Project Link</h4>
        </div>
      </div>
      <div className="leaderboard">
        <h1>Leaderboard</h1>
        <h1>APP Dev Contest 2.0</h1>

        {list.map((e) => {
          return (
            <div className="listItem">
              <p>{e.No}</p>
              <p>{e.TeamName}</p>
              <p>{e.status}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Treasure;
