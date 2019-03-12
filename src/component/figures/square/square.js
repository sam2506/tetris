import React from 'react';
import './square.css';

var square=(props)=>{
    return(
        <div className="s">
            <div className="squares" style={{borderRight:"None"}}></div>
            <div className="squares" ></div>
            <div className="squares" style={{top: "20px",left: "-20px",borderTop:"None"}}></div>
            <div className="squares" style={{top:"20px",left:"-60px",borderTop:"None",borderRight:"None"}}></div>
        </div>
    );
}

export default square;