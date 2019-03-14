import React from 'react';
import './bottom.css';

var bottom=(props)=>{
    return(
        <div className="bottom">
            <button onClick={props.moveleft} className="btn">Left</button>
            <button onClick={props.moveright} className="btn">Right</button>
            <button className="btn">+90deg</button>
            <button className="btn">-90deg</button>
            <button className="btn">Down</button>
        </div>
    )
}

export default bottom;