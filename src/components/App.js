import React from "react";

class App extends React.Component {
  render() {
    return (
      <div>
        <div className="timer-container">
          <h2 className="timer-title">
            <span>Online </span>
            Stopwatch
          </h2>

          <div className="timer-col">
            <div className="timer-hours">0</div>
            <div className="timer-label">Hour</div>
          </div>
          <div className="timer-col">
            <div className="timer-minutes">0</div>
            <div className="timer-label">Minute</div>
          </div>
          <div className="timer-col">
            <div className="timer-seconds">0</div>
            <div className="timer-label">Seconds</div>
          </div>
        </div>

        <div className="timer-container">
          <div className="timer-button">
            <button className="btn btn-success">Start</button>
          </div>
          <div className="timer-button">
            <button className="btn btn-danger">Stop</button>
          </div>
          <div className="timer-button">
            <button className="btn btn-secondary">Interval</button>
          </div>
          <div className="timer-button">
            <button className="btn btn-warning">Clear</button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
