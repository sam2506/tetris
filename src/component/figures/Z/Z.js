import React from 'react';
import './Z.css';

var z=(props)=>{
    return(
        <div className="z">
            <div className="square" style={{borderRight:"None",width:"18px"}}></div>
            <div className="square" ></div>
            <div className="square" style={{top: "-20px",left: "-20px",borderBottom:"None"}}></div>
            <div className="square" style={{top:"20px",left:"-58px",borderTop:"None"}}></div>
        </div>
    );
}

export default z;