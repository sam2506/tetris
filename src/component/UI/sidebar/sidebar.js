import React from 'react';
import './sidebar.css';

var sidebar=(props)=>{
    var score=props.score;
    var linesCleared=props.linescleared;
    if(props.pause===1)
        var name="Resume";
    else
        var name="Pause";
    return(
        <div className="sidebar">
            <h1>Tetris</h1>
            <div className="div1">
                <h3>Score</h3>
                <h2>{score}</h2>
            </div>
            <div className="div2">
                <h3>Lines Cleared</h3>
                <h2>{linesCleared}</h2>
            </div>  
            <div className="div3">
                <button onClick={props.pausegame}>{name}</button>
            </div>
        </div>
    )
}

export default sidebar;
