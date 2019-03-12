import React from 'react';
import './L.css';

var L=(props)=>{
    return(
        <div className="L">
            <div className="squarel" style={{borderRight:"None",width:"18px"}}></div>
            <div className="squarel" ></div>
            <div className="squarel" style={{top: "-20px",left: "-38px",borderBottom:"None"}}></div>
            <div className="squarel" style={{top:"-40px",left:"-58px",borderBottom:"None"}}></div>
        </div>
    );
}

export default L;