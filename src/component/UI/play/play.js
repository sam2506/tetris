import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import Square from '../../figures/square/square';
import Line from '../../figures/line/line';
import L from '../../figures/L/L';
import T from '../../figures/T/T';
import Z from '../../figures/Z/Z';
import Colour from './colour/colour';
import './play.css';

const NUMBERING={
    0: 'squaress',
    1: 'liness',
    2: 'Tss',
    3: 'Lss',
    4: 'Zss'
}

var x,deg=0;
class play extends Component{
    state={
        matrix:[[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]],
    }
    componentDidMount(){
        var node=ReactDOM.findDOMNode(this);
        var elem=node.getElementsByClassName("anim");
        var pos=0,flag=0;
        var that=this;
        var set=setInterval(function(){
            var left=elem[0].style.left;
            var top=elem[0].style.top;
            console.log(top,left);
            var tempMat=that.state.matrix;
            var currentPosition=that.marker(x,deg,top,left);
            if(tempMat[(currentPosition[0].top)/20+1][(currentPosition[0].left)/20]!==undefined)
                flag=1;
            if(tempMat[(currentPosition[1].top)/20+1][(currentPosition[1].left)/20]!==undefined)
                flag=1;
            if(tempMat[(currentPosition[2].top)/20+1][(currentPosition[2].left)/20]!==undefined)
                flag=1;
            if(tempMat[(currentPosition[3].top)/20+1][(currentPosition[3].left)/20]!==undefined)
                flag=1;
            if(pos===500 || flag===1)
            {
                pos=0;
                tempMat[(currentPosition[0].top)/20][(currentPosition[0].left)/20]=NUMBERING[x];
                tempMat[(currentPosition[1].top)/20][(currentPosition[1].left)/20]=NUMBERING[x];
                tempMat[(currentPosition[2].top)/20][(currentPosition[2].left)/20]=NUMBERING[x];
                tempMat[(currentPosition[3].top)/20][(currentPosition[3].left)/20]=NUMBERING[x];
                //console.log(tempMat);
                clearInterval(set);
                that.setState({matrix: tempMat});
                that.componentDidMount();
            }
            pos+=20;
            elem[0].style.top=pos+"px";
        },1000);
    }
    parseStr=(string)=>{
        var newString="";
        for(var i=0;i<string.length;i++)
        {
            if(string[i]==='p')
                break;
            newString+=string[i];
        }
        return +newString;
    }
    marker=(shape,degree,bottop,botleft)=>{
        var a,b,c,d;
        bottop=this.parseStr(bottop);
        botleft=this.parseStr(botleft);
        if(shape===0)
        {
            a={
                top: bottop,
                left: botleft
            }
            b={
                top: bottop,
                left: botleft+20
            }
            c={
                top: bottop+20,
                left: botleft
            }
            d={
                top: bottop+20,
                left: botleft+20
            }
           
        }
        if(shape===1)
        {
            if(degree===0 || degree===360 || degree===-360)
            {
                a={
                    top: bottop,
                    left: botleft
                }
                b={
                    top: bottop,
                    left: botleft+20
                }
                c={
                    top: bottop,
                    left: botleft+40
                }
                d={
                    top: bottop,
                    left: botleft+60
                }
            }
            if(degree===-90 || degree===90 || degree===270 || degree===-270)
            {
                a={
                    top: bottop,
                    left: botleft
                }
                b={
                    top: bottop+20,
                    left: botleft
                }
                c={
                    top: bottop+40,
                    left: botleft
                }
                d={
                    top: bottop+60,
                    left: botleft
                }
            }
            if(degree===-180 || degree===180)
            {
                a={
                    top: bottop,
                    left: botleft
                }
                b={
                    top: bottop,
                    left: botleft+20
                }
                c={
                    top: bottop,
                    left: botleft+40
                }
                d={
                    top: bottop,
                    left: botleft+60
                }
            }
        }
        if(shape===2)
        {
            if(degree===0 || degree===360 || degree===-360)
            {
                a={
                    top: bottop,
                    left: botleft
                }
                b={
                    top: bottop,
                    left: botleft+20
                }
                c={
                    top: bottop+20,
                    left: botleft+20
                }
                d={
                    top: bottop,
                    left: botleft+40
                }
            }
            if(degree===90)
            {
                a={
                    top: bottop+20,
                    left: botleft
                }
                b={
                    top: bottop,
                    left: botleft+20
                }
                c={
                    top: bottop+20,
                    left: botleft+20
                }
                d={
                    top: bottop+40,
                    left: botleft+20
                }
            }
            if(degree===-90)
            {
                a={
                    top: bottop,
                    left: botleft
                }
                b={
                    top: bottop+20,
                    left: botleft
                }
                c={
                    top: bottop+40,
                    left: botleft
                }
                d={
                    top: bottop+20,
                    left: botleft+20
                }
            }
            if(degree===180 || degree===-180)
            {
                a={
                    top: bottop,
                    left: botleft+20
                }
                b={
                    top: bottop+20,
                    left: botleft+20
                }
                c={
                    top: bottop+20,
                    left: botleft
                }
                d={
                    top: bottop+20,
                    left: botleft+40
                }
            }
           
        }
        if(shape===3)
        {
            if(degree===0 || degree===360 || degree===-360)
            {
                a={
                    top: bottop,
                    left: botleft
                }
                b={
                    top: bottop+20,
                    left: botleft
                }
                c={
                    top: bottop+40,
                    left: botleft
                }
                d={
                    top: bottop+40,
                    left: botleft+20
                }
            }
            if(degree===90)
            {
                a={
                    top: bottop,
                    left: botleft
                }
                b={
                    top: bottop,
                    left: botleft+20
                }
                c={
                    top: bottop,
                    left: botleft+40
                }
                d={
                    top: bottop+20,
                    left: botleft
                }
            }
            if(degree===-90)
            {
                a={
                    top: bottop+20,
                    left: botleft
                }
                b={
                    top: bottop+20,
                    left: botleft+20
                }
                c={
                    top: bottop+20,
                    left: botleft+40
                }
                d={
                    top: bottop,
                    left: botleft+40
                }
            }
            if(degree===180 || degree===-180)
            {
                a={
                    top: bottop,
                    left: botleft
                }
                b={
                    top: bottop,
                    left: botleft+20
                }
                c={
                    top: bottop+20,
                    left: botleft+20
                }
                d={
                    top: bottop+40,
                    left: botleft+20
                }
            }
            
        }
        if(shape===4)
        {
            if(degree===0 || degree===360 || degree===-360)
            {
                a={
                    top: bottop,
                    left: botleft+20
                }
                b={
                    top: bottop+20,
                    left: botleft
                }
                c={
                    top: bottop+20,
                    left: botleft+20
                }
                d={
                    top: bottop+40,
                    left: botleft
                }
            }
            if(degree===90 || degree===-90)
            {
                a={
                    top: bottop,
                    left: botleft
                }
                b={
                    top: bottop,
                    left: botleft+20
                }
                c={
                    top: bottop+20,
                    left: botleft+20
                }
                d={
                    top: bottop+20,
                    left: botleft+40
                }
            }
            if(degree===180 || degree===-180)
            {
                a={
                    top: bottop,
                    left: botleft+20
                }
                b={
                    top: bottop+20,
                    left: botleft
                }
                c={
                    top: bottop+20,
                    left: botleft+20
                }
                d={
                    top: bottop+40,
                    left: botleft
                }
            }
           
            
        }
        return [a,b,c,d];
    }
    randomization=()=>{
        x=Math.floor(Math.random()*5);
        var y;
        if(x===0)
            y=<Square/>
        if(x===1)
            y=<Line/>
        if(x===2)
            y=<T/>
        if(x===3)
            y=<L/>
        if(x===4)
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
                <Colour matrix={this.state.matrix}/>
            </div>
        )
    }
}

export default play;
