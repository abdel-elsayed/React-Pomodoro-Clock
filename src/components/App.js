import React from "react";
import '../App.css';
import Break from "./Break.js";
import Session from "./Session.js";
import Timer from "./Timer.js";

class App extends React.Component {
  constructor(){
      super();

      this.state = {
        break: 5,
        session: 25,
        timerMinute: 25,
        isPlay: false
      }
  

  this.onIncreaseBreakLength = this.onIncreaseBreakLength.bind(this);
  this.onDecreaseBreakLength = this.onDecreaseBreakLength.bind(this);
  this.onIncreaseSessionLength = this.onIncreaseSessionLength.bind(this);
  this.onDecreaseSessionLength = this.onDecreaseSessionLength.bind(this);
  this.onUpdateTimerMinute = this.onUpdateTimerMinute.bind(this);
  this.onToggleInterval = this.onToggleInterval.bind(this);
  this.onReset = this.onReset.bind(this);
  this.onPlay = this.onPlay.bind(this);
}

onIncreaseBreakLength(){
  this.setState((prevState) => {
    return{
      break: prevState.break + 1
    }
  });
}

onDecreaseBreakLength(){
  this.setState((prevState) => {
    return{
      break: prevState.break - 1
    }
  });
}

onIncreaseSessionLength(){
  this.setState((prevState) => {
    return{
      session: prevState.session + 1,
      timerMinute: prevState.session + 1
    }
  });
}

onDecreaseSessionLength(){
  this.setState((prevState) => {
    return{
      session: prevState.session - 1,
      timerMinute: prevState.session - 1
    }
  });
}

onUpdateTimerMinute(){
  this.setState((prevState) => {
    return{
      timerMinute: prevState.timerMinute - 1
    }
  });
}

onToggleInterval(isSession){
  if(isSession){
    this.setState({
      timerMinute: this.state.session
    })
  }else{
    this.setState({
      timerMinute: this.state.break
    })
  }
}

onReset(){
  this.setState({
    timerMinute: this.state.session
  })
}

onPlay(isPlay){
  this.setState({
    isPlay: isPlay
  })
}

  render() {
    return (
    <main>
      <h2>Pomodoro clock</h2>
      <section className ="break-session-container">
        <Break 
          isPlay = {this.state.isPlay}
          break={this.state.break} 
          increaseBreak={this.onIncreaseBreakLength} 
          decreaseBreak={this.onDecreaseBreakLength}/>
        <Session 
          isPlay = {this.state.isPlay}
          session={this.state.session}
          increaseSession={this.onIncreaseSessionLength}
          decreaseSession={this.onDecreaseSessionLength}/>
      </section>
      <Timer  
        isPlay = {this.state.isPlay}
        timerMinute = {this.state.timerMinute}
        break = {this.state.break}
        UpdateTimerMinute = {this.onUpdateTimerMinute}
        onToggleInterval = {this.onToggleInterval}
        resetTimer={this.onReset}
        onPlay={this.onPlay}/>
    </main>
  );
  }
}

export default App;
