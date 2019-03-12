import React,{Component} from 'react';
import Play from '../../component/UI/play/play';

class tetris extends Component{
    state={
        score: 0,
        linesRemoved: 0,
        pause: false
    }
    render(){
        return(
            <div>
                <Play/>
            </div>
        );
    }
}

export default tetris;
