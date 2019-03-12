import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import Square from '../../figures/square/square';
import Line from '../../figures/line/line';
import L from '../../figures/L/L';
import T from '../../figures/T/T';
import Z from '../../figures/Z/Z';
import './play.css';

class play extends Component{
    state={
        key: 0
    }

    componentDidMount(){
        var node=ReactDOM.findDOMNode(this);
        var elem=node.getElementsByClassName("anim");
        var pos=0;
        var that =this;
        var set=setInterval(function(){
            if(pos==500)
            {
                pos=0;
                clearInterval(set);
                that.setState({key: 1});
            }
            pos+=20;
            elem[0].style.top=pos+"px";
        },1000);
        setTimeout(() => {
            
        },0);
    }
    randomization=()=>{
        var x=Math.floor(Math.random()*5);
        var y;
        if(x==0)
        y=<Square/>
        if(x==1)
        y=<Line/>
        if(x==2)
        y=<T/>
        if(x==3)
        y=<L/>
        if(x==4)
        y=<Z/>
        return y;
    }
    render(){
        var randomElement=this.randomization();
        return(
            <div className="play">
                <div className="anim" style={{top: "20px"}}>
                    {randomElement}
                </div>
            </div>
        )
    }
}

export default play;
/*var play=(props)=>{
    return(

    )
}*/