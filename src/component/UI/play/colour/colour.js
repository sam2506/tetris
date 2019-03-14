import React from 'react';
import './colour.css';
import SquareCol from '../../../figures/squarecol/squarecol';

var colour=(props)=>{

    var colouration=props.matrix.map((igkeyr,index1)=>{
        return igkeyr.map((igkeyc,index2)=>{
            return <SquareCol 
            shape={igkeyc} 
            topp={index1} 
            leftt={index2}
            key={index1*10000+index2}
            />
        });
    });
    return(
        <div className="colour">
            {colouration}
        </div>
    );
};

export default colour;