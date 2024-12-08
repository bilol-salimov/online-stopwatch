import React from "react";

class App extends React.Component {
  state = {
    hour: 0,
    minute: 0,
    second: 0,
    btnDisabled: false,
    interval: "",
  };

  startClicked = () => {
    let timer = setInterval(() => {
      let { second, minute, hour, btnDisabled } = this.state;
      this.setState({
        btnDisabled: true,
      });

      if (second === 59) {
        if (minute === 59) {
          this.setState({
            second: 0,
            minute: 0,
            hour: hour + 1,
          });
        } else {
          this.setState({
            second: 0,
            minute: minute + 1,
          });
        }
      } else {
        this.setState({
          second: second + 1,
        });
      }
    }, 100);
    this.setState({
      interval: timer,
    });
  };

  stopClicked = () => {
    clearInterval(this.state.interval);
    this.setState({
      btnDisabled: false,
    });
  };

  render() {
    const { hour, minute, second, btnDisabled } = this.state;
    return (
      <div>
        <div className="timer-container">
          <h2 className="timer-title">
            <span>Online </span>
            Stopwatch
          </h2>

          <div className="timer-col">
            <div className="timer-hours">{hour}</div>
            <div className="timer-label">Hour</div>
          </div>
          <div className="timer-col">
            <div className="timer-minutes">{minute}</div>
            <div className="timer-label">Minute</div>
          </div>
          <div className="timer-col">
            <div className="timer-seconds">{second}</div>
            <div className="timer-label">Seconds</div>
          </div>
        </div>

        <div className="timer-container">
          <div className="timer-button">
            <button
              onClick={this.startClicked}
              className="btn btn-success"
              disabled={btnDisabled}
            >
              Start
            </button>
          </div>
          <div className="timer-button">
            <button
              onClick={this.stopClicked}
              className="btn btn-danger"
              disabled={!btnDisabled}
            >
              Stop
            </button>
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
