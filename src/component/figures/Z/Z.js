import React from 'react';
import './Z.css';

var z=(props)=>{
    return(
        <div className="z">
            <div className="squarez" style={{top: "20px"}}></div>
            <div className="squarez" style={{top: "20px"}}></div>
            <div className="squarez" style={{left: "-20px",}}></div>
            <div className="squarez" style={{top:"40px",left: "-60px"}}></div>
        </div>
    );
}

export default z;