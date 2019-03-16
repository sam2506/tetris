import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import Square from '../../figures/square/square';
import Line from '../../figures/line/line';
import L from '../../figures/L/L';
import T from '../../figures/T/T';
import Z from '../../figures/Z/Z';
import Colour from './colour/colour';
import Bottom from '../bottombar/bottom/bottom';
import Sidebar from '../sidebar/sidebar';
import './play.css';

const NUMBERING={
    0: 'squaress',
    1: 'liness',
    2: 'Tss',
    3: 'Lss',
    4: 'Zss'
}

var x,deg=0,pause=0,sidebar,randomElement,posit=0,start=0,set,gameover=null,pos;
class play extends Component{
    state={
        matrix:[[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]],
        score: 0,
        linesCleared: 0,
        newFigure: 1
    }
    componentDidMount(){
        var node=ReactDOM.findDOMNode(this);
        var elem=node.getElementsByClassName("anim");
        var flag=0,flag1=0;
        pos=0;
        start=1;
        var that=this;
        set=setInterval(function(){
            if(posit!==2)
            {
                if(posit===1)
                {
                    posit=0;
                    clearInterval(set);
                    var scores=that.state.score;
                    var newfigure=that.state.newFigure;
                    var tempMat=that.state.matrix;
                    newfigure=1;
                    var linesClear=that.state.linesCleared;
                    var cnt=0;
                    for(var i=0;i<=26;i++)
                    {
                        cnt=0;
                        for(var j=0;j<tempMat[i].length;j++)
                        {
                            if(tempMat[i][j]!==undefined)
                            {
                                cnt++;
                            }
                        }
                        if(cnt===23)
                        {
                            tempMat.splice(i,1);
                            tempMat.unshift([]);
                            linesClear++;
                            scores+=10;
                        }
                    }
                    pos=0;
                    var random=Math.floor(Math.random()*20)*20;
                    elem[0].style.top="20px";
                    elem[0].style.left=random+"px";
                    elem[0].style.transform='rotate('+0+'deg)';
                    deg=0;
                    that.setState({newFigure: 1,score: scores,linesCleared: linesClear});
                    that.componentDidMount();
                }
                else
                {
                    var left=elem[0].style.left;
                    var top=elem[0].style.top;
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
                    if(currentPosition[0].top===520)
                        flag1=1;
                    if(currentPosition[1].top===520)
                        flag1=1;
                    if(currentPosition[2].top===520)
                        flag1=1;
                    if(currentPosition[3].top===520)
                        flag1=1;
                    if((pos===520 || flag===1 || flag1===1))
                    {
                        elem[0].style.top="20px";
                        pos=0;
                        tempMat[(currentPosition[0].top)/20][(currentPosition[0].left)/20]=NUMBERING[x];
                        tempMat[(currentPosition[1].top)/20][(currentPosition[1].left)/20]=NUMBERING[x];
                        tempMat[(currentPosition[2].top)/20][(currentPosition[2].left)/20]=NUMBERING[x];
                        tempMat[(currentPosition[3].top)/20][(currentPosition[3].left)/20]=NUMBERING[x];
                        clearInterval(set);
                        var scores=that.state.score;
                        var newfigure=that.state.newFigure;
                        newfigure=1;
                        var linesClear=that.state.linesCleared;
                        var cnt=0;
                        for(var i=0;i<=26;i++)
                        {
                            cnt=0;
                            for(var j=0;j<tempMat[i].length;j++)
                            {
                                if(tempMat[i][j]!==undefined)
                                {
                                    cnt++;
                                }
                            }
                            if(cnt===23)
                            {
                                tempMat.splice(i,1);
                                tempMat.unshift([]);
                                linesClear++;
                                scores+=10;
                            }
                        }
                        var random=Math.floor(Math.random()*20)*20;
                        elem[0].style.left=random+"px";
                        elem[0].style.transform='rotate('+0+'deg)';
                        deg=0;
                        that.setState({matrix: tempMat,score: scores,linesCleared: linesClear,newFigure: newfigure});
                        that.componentDidMount();
                    }
                    if(pause===0)
                        pos+=20;
                    elem[0].style.top=pos+"px";
                }
            }
        },400);
    }
    pauseGame=()=>{
        if(pause===0)
            pause=1;
        else
            pause=0;
        var newfigure=this.state.newFigure;
        newfigure=0;
        this.setState({newFigure: newfigure});
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
            if(degree===270)
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
            if(degree===90)
            {
                a={
                    top: bottop,
                    left: botleft+60
                }
                b={
                    top: bottop+20,
                    left: botleft+60
                }
                c={
                    top: bottop+40,
                    left: botleft+60
                }
                d={
                    top: bottop+60,
                    left: botleft+60
                }
            }
            if(degree===-180 || degree===180)
            {
                a={
                    top: bottop+60,
                    left: botleft
                }
                b={
                    top: bottop+60,
                    left: botleft+20
                }
                c={
                    top: bottop+60,
                    left: botleft+40
                }
                d={
                    top: bottop+60,
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
            if(degree===90 || degree===-270)
            {
                a={
                    top: bottop,
                    left: botleft+60
                }
                b={
                    top: bottop+20,
                    left: botleft+60
                }
                c={
                    top: bottop+40,
                    left: botleft+60
                }
                d={
                    top: bottop+20,
                    left: botleft+40
                }
            }
            if(degree===-90 || degree===270)
            {
                a={
                    top: bottop+60,
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
            if(degree===180 || degree===-180)
            {
                a={
                    top: bottop+40,
                    left: botleft+40
                }
                b={
                    top: bottop+60,
                    left: botleft+20
                }
                c={
                    top: bottop+60,
                    left: botleft+60
                }
                d={
                    top: bottop+60,
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
            if(degree===90 || degree===-270)
            {
                a={
                    top: bottop,
                    left: botleft+60
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
                    left: botleft+20
                }
            }
            if(degree===-90 || degree===270)
            {
                a={
                    top: bottop+60,
                    left: botleft
                }
                b={
                    top: bottop+60,
                    left: botleft+20
                }
                c={
                    top: bottop+60,
                    left: botleft+40
                }
                d={
                    top: bottop+40,
                    left: botleft+40
                }
            }
            if(degree===180 || degree===-180)
            {
                a={
                    top: bottop+20,
                    left: botleft+40
                }
                b={
                    top: bottop+20,
                    left: botleft+60
                }
                c={
                    top: bottop+40,
                    left: botleft+60
                }
                d={
                    top: bottop+60,
                    left: botleft+60
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
            if(degree===90 || degree===-270)
            {
                a={
                    top: bottop,
                    left: botleft+20
                }
                b={
                    top: bottop,
                    left: botleft+40
                }
                c={
                    top: bottop+20,
                    left: botleft+40
                }
                d={
                    top: bottop+20,
                    left: botleft+60
                }
            }
            if(degree===-90 || degree===270)
            {
                a={
                    top: bottop+40,
                    left: botleft
                }
                b={
                    top: bottop+40,
                    left: botleft+20
                }
                c={
                    top: bottop+60,
                    left: botleft+20
                }
                d={
                    top: bottop+60,
                    left: botleft+40
                }
            }
            if(degree===180 || degree===-180)
            {
                a={
                    top: bottop+20,
                    left: botleft+60
                }
                b={
                    top: bottop+40,
                    left: botleft+40
                }
                c={
                    top: bottop+40,
                    left: botleft+60
                }
                d={
                    top: bottop+60,
                    left: botleft+40
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
        if(start===1)
        {
            var node=ReactDOM.findDOMNode(this);
            var elem=node.getElementsByClassName("anim");
            var left=elem[0].style.left;
            var top=elem[0].style.top;
            var tempPos=this.marker(x,deg,top,left);
            var tempMat=this.state.matrix;
            var flag=0;
            for(var i=0;i<=3;i++)
            {
                if(tempMat[(tempPos[i].top)/20][(tempPos[i].left)/20]!==undefined)
                {
                    flag=1;
                    break;
                }
            }
            if(flag===0)
                return y;
            else
            {
                posit=2;
                clearInterval(set);
                return y=-1;
            }
        }
    else
        return y;
    }
    moveLeft=()=>{
        var node=ReactDOM.findDOMNode(this);
        var elem=node.getElementsByClassName("anim");
        var left=elem[0].style.left;
        var top=elem[0].style.top;
        var tempPos=this.marker(x,deg,top,left);
        var flag=0,flag1=0;
        for(var i=0;i<=3;i++)
        {
            if(tempPos[i].left<20)
            {
                flag=1;
                break;
            }
        }
        if(flag===0)
        {
            var tempMat=this.state.matrix;
            if(tempMat[(tempPos[0].top)/20][(tempPos[0].left-20)/20]!==undefined)
                flag1=1;
            if(tempMat[(tempPos[1].top)/20][(tempPos[1].left-20)/20]!==undefined)
                flag1=1;
            if(tempMat[(tempPos[2].top)/20][(tempPos[2].left-20)/20]!==undefined)
                flag1=1;
            if(tempMat[(tempPos[3].top)/20][(tempPos[3].left-20)/20]!==undefined)
                flag1=1;
            if(flag1===0)
            {
                var newNumber=this.parseStr(left);
                newNumber-=20;
                elem[0].style.left=newNumber+"px";
            }
        }
    }
    moveRight=()=>{
        var node=ReactDOM.findDOMNode(this);
        var elem=node.getElementsByClassName("anim");
        var left=elem[0].style.left;
        var top=elem[0].style.top;
        var tempPos=this.marker(x,deg,top,left);
        var flag=0,flag1=0;
        for(var i=0;i<=3;i++)
        {
            if(tempPos[i].left>=440)
            {
                flag=1;
                break;
            }
        }
        if(flag===0)
        {
            var tempMat=this.state.matrix;
            if(tempMat[(tempPos[0].top)/20][(tempPos[0].left+20)/20]!==undefined)
                flag1=1;
            if(tempMat[(tempPos[1].top)/20][(tempPos[1].left+20)/20]!==undefined)
                flag1=1;
            if(tempMat[(tempPos[2].top)/20][(tempPos[2].left+20)/20]!==undefined)
                flag1=1;
            if(tempMat[(tempPos[3].top)/20][(tempPos[3].left+20)/20]!==undefined)
                flag1=1;
            if(flag1===0)
            {
                var newNumber=this.parseStr(left);
                newNumber+=20;
                elem[0].style.left=newNumber+"px";
            }
        }
    }
    rotateClock=()=>{
        if(x!==0)
        {
            var node=ReactDOM.findDOMNode(this);
            var elem=node.getElementsByClassName("anim");
            var rotation=deg+90;
            elem[0].style.transform='rotate('+rotation+'deg)';
            deg=(deg+90)%360;
            var left=elem[0].style.left;
            var top=elem[0].style.top;
            top=this.parseStr(top);
            left=this.parseStr(left);
            console.log(left);
            if(x===1)
            {
                if(deg===90)
                {
                    elem[0].style.left=left-60+"px";
                    elem[0].style.top=top-60+"px";
                    pos-=60;
                }
                if(deg===180)
                {
                    if(left===380)
                        elem[0].style.left=left+"px";
                    else
                        elem[0].style.left=left+60+"px";
                }
                if(deg===0)
                {
                    if(left===440)
                        elem[0].style.left=left-60+"px";
                    elem[0].style.top=top+60+"px";
                    pos+=60;
                }
            }
            if(x===2)
            {
                if(deg===90)
                {
                    elem[0].style.left=left-40+"px";
                    elem[0].style.top=top-20+"px";
                    pos-=20;
                }
                if(deg===180)
                {
                    if(left===380)
                        elem[0].style.left=left+"px";
                    else
                        elem[0].style.left=left+20+"px";
                    elem[0].style.top=top-20+"px";
                    pos-=20;
                }
                if(deg===270)
                {
                    elem[0].style.left=left+20+"px";
                }
                if(deg===0)
                {
                    if(left===420)
                        elem[0].style.left=left-20+"px";
                    elem[0].style.top=top+40+"px";
                    pos+=40
                }
            }
            if(x===3)
            {
                if(deg===90 || deg===-270)
                {
                    if(left===420)
                        elem[0].style.left=left-40+"px";
                    else
                    elem[0].style.left=left-20+"px";
                    elem[0].style.top=top+20+"px";
                    pos+=20;
                }
                if(deg===180 || deg===-180)
                {
                    elem[0].style.left=left-20+"px";
                    elem[0].style.top=top-40+"px";
                    pos-=40;
                }
                if(deg===270)
                {
                    if(left===380)
                        elem[0].style.left=left+20+"px";
                    else
                        elem[0].style.left=left+40+"px";
                }
                if(deg===0)
                {
                    elem[0].style.top=top+20+"px";
                    pos+=20;
                }
            }
            if(x===4)
            {
                if(deg===90 || deg===-270)
                {   
                    if(left===420)
                        elem[0].style.left=left-40+"px";
                    else
                        elem[0].style.left=left-20+"px";
                    elem[0].style.top=top+20+"px";
                    pos+=20;
                }
                if(deg===-90 || deg===270)
                {
                    if(left===380)
                        elem[0].style.left=left+20+"px";
                    else
                        elem[0].style.left=left+40+"px";
                }
                if(deg===180 || deg===-180)
                {
                    elem[0].style.left=left-20+"px";
                    elem[0].style.top=top-40+"px";
                    pos-=40;
                }
                if(deg===0 || deg===360)
                {
                    elem[0].style.top=top+20+"px";
                    pos+=20;
                }
            }

        }
    }
    fastDown=()=>{
        if(posit!==2)
        {
            var node=ReactDOM.findDOMNode(this);
            var elem=node.getElementsByClassName("anim");
            var left=elem[0].style.left;
            var top=elem[0].style.top;
            var tempPos=this.marker(x,deg,top,left);
            var tempPos1=tempPos;
            var tempMat=this.state.matrix;
            var minDiff=9999999;
            for(var i=0;i<=3;i++)
            {
                for(var j=(tempPos[i].top)/20;j<=27;j++)
                {
                    if((tempMat[j][(tempPos[i].left)/20]!==undefined) || j===27)
                    {
                        if(minDiff>=(j-1-tempPos[i].top/20))
                            minDiff=(j-1-tempPos[i].top/20);
                        break;
                    }
                }
            }
            console.log(minDiff);
            for(var i=0;i<=3;i++)
                tempPos1[i].top+=minDiff*20;
            tempMat[(tempPos1[0].top)/20][(tempPos1[0].left)/20]=NUMBERING[x];
            tempMat[(tempPos1[1].top)/20][(tempPos1[1].left)/20]=NUMBERING[x];
            tempMat[(tempPos1[2].top)/20][(tempPos1[2].left)/20]=NUMBERING[x];
            tempMat[(tempPos1[3].top)/20][(tempPos1[3].left)/20]=NUMBERING[x];
            randomElement=null;
            this.setState({matrix: tempMat,newFigure: 0});
            posit=1;
        }
    }
    render(){
        if(this.state.newFigure===1)
        {
            randomElement=this.randomization();
            if(randomElement===-1)
            {
                randomElement=undefined;
                gameover=<div style={{position: "fixed",top: "250px",left:"400px",zIndex: "5"}}>
                    <h1>Game over</h1>
                </div>
            }
            else
                gameover=undefined;
        }
        sidebar=<Sidebar 
            score={this.state.score}
            linescleared={this.state.linesCleared}
            pausegame={this.pauseGame}
            pause={pause}/>
        return(
            <div className="play">
                <div className="anim" style={{top: "20px",zIndex: "2"}}>
                    {randomElement}
                </div>
                {gameover}
                <Colour matrix={this.state.matrix}/>
                {sidebar}
                <Bottom 
                fastdown={this.fastDown}
                rotateclock={this.rotateClock}
                moveright={this.moveRight}
                moveleft={this.moveLeft}/>
            </div>
        )
    }
}

export default play;
