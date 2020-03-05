import React from "react";
import "./Score.css";

//stateless component
const Score = props => (
  <div id="scoreBoard">
    <h3 id="score">Score: {props.total} / 15</h3>
    <h3 id="gameStatus">{props.status}</h3>
  </div>
);

export default Score;