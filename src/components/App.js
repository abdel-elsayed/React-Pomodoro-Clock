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
        timerMinute: 25
      }
  }
  render() {
    return (
    <main>
      <h2>Pomodoro clock</h2>
      <section className ="break-session-container">
        <Break break={this.state.break}/>
        <Session session={this.state.session}/>
      </section>
      <Timer timerMinute={this.state.timerMinute}/>
    </main>
  );
  }
}

export default App;
