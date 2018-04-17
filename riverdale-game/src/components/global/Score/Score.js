import React from "react";
import "./Score.css";

//  this is a static component 
//  it's the child of friend card component 
//  it is just rendering score and top score 

const Score = props => (
    <div className = "score">
        <p> Score: {props.score} </p>
        <p> Top Score: {props.topScore} </p>
    </div>
)

export default Score;