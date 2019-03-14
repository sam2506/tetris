import React from 'react';
import './squarecol.css';

var squarecol=(props)=>{
    var figure="k "+props.shape;
    var top=(props.topp)*20+"px";
    var left=(props.leftt)*20+260+"px";
    console.log(left);
    return(
        <div className={figure} style={{position:'fixed',top: top,left: left}}></div>
    );
}

export default squarecol;