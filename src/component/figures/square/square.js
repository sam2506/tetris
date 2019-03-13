import React from 'react';
import './square.css';

var square=(props)=>{
    return(
        <div className="s">
            <div className="squares"></div>
            <div className="squares"></div>
            <div className="squares" style={{top: "20px",left: "-20px"}}></div>
            <div className="squares" style={{top:"20px",left:"-60px"}}></div>
        </div>
    );
}

export default square;