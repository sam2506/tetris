import React from 'react';
import './line.css';

var Line=(props)=>{
    return(
        <div className="line" >
            <div className="squareline" style={{borderRight:"None",width:"18px"}}></div>
            <div className="squareline" style={{borderRight:"None",width:"18px"}}></div>
            <div className="squareline" style={{borderRight:"None",width:"18px"}}></div>
            <div className="squareline" ></div>
        </div>
    );
}

export default Line;