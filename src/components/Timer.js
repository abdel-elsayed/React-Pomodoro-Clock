import React from "react";

class Timer extends React.Component{
    constructor(){
        super();
        this.state = {
            isSession: true,
            timerSecond: 0,
            intervalID: 0
        };
        this.start = this.start.bind(this);
        this.stop = this.stop.bind(this);
        this.restart = this.restart.bind(this);
        this.decreaseTimer = this.decreaseTimer.bind(this);

    }

    start(){
        let intervalID = setInterval(this.decreaseTimer, 1000);
        this.props.onPlay(true);
        this.setState({
            intervalID: intervalID
        })
        alert("Timer is going to Start!!\nPlease press ok to confirm");
    }

    decreaseTimer(){
        switch(this.state.timerSecond){
            case 0:
                if(this.props.timerMinute === 0){
                    if(this.state.isSession){
                        this.setState({
                            isSession: false
                        });
                        this.props.onToggleInterval(this.state.isSession);
                    }
                    else{
                        this.setState({
                            isSession: true
                        });
                        this.props.onToggleInterval(this.state.isSession);
                    }
                }else{
                this.props.UpdateTimerMinute()
                this.setState({
                    timerSecond: 59
                })
            }
                break;
            default:
                this.setState((prevState) =>{
                    return{
                        timerSecond: prevState.timerSecond - 1
                    }
                })
                break;
        }
    
    }
    stop(){
        clearInterval(this.state.intervalID);
        this.props.onPlay(false);
    }

    restart(){
        this.stop();
        this.props.resetTimer();
        this.props.onPlay(false);
        this.setState({
            timerSecond: 0,
            isSession: true
        })

    }

    render(){
        return (
            <section className="timer-card">
                <section className="timer-container">
                    <h4>{this.state.isSession===true ? "Session Time" : "Break"}</h4>
                    <span className="timer">{this.props.timerMinute}</span>
                    <span className="timer">:</span>
                    <span className="timer">
                        {this.state.timerSecond === 0 ? "00" :
                        this.state.timerSecond < 10 ? "0" + 
                        this.state.timerSecond : this.state.timerSecond}
                    </span>
                </section>
                <section className="timer-actions">
                    <button disabled={this.props.isPlay === true ? "disabled" : ""} onClick={this.start}>Start</button>
                    <button onClick={this.stop}>Stop</button>
                    <button onClick={this.restart}>Restart</button>   
                </section>
            </section>
        )
    }

}

export default Timer;