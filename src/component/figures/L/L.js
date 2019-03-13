import React from 'react';
import './L.css';

var L=(props)=>{
    return(
        <div className="L">
            <div className="squarel" ></div>
            <div className="squarel" style={{top: "20px",left: "-20px"}}></div>
            <div className="squarel" style={{top: "40px",left: "-40px",}}></div>
            <div className="squarel" style={{top:"40px",left:"-40px"}}></div>
        </div>
    );
}

export default L;