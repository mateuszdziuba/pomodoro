import React from 'react';
import Buttons from './Buttons';
import Title from './Title';

const initialSeconds = 25 * 60;

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { seconds: initialSeconds, status: 'default', time: {} };
    this.interval = null;
    this.startTimer = this.startTimer.bind(this);
    this.countDown = this.countDown.bind(this);
    this.resetTimer = this.resetTimer.bind(this);
  }

  secondsToTime(secs) {
    let divisorMinutes = secs % (60 * 60);
    let minutes = Math.floor(divisorMinutes / 60).toLocaleString(undefined, {
      minimumIntegerDigits: 2
    });

    let divisorSeconds = divisorMinutes % 60;
    let seconds = Math.ceil(divisorSeconds).toLocaleString(undefined, {
      minimumIntegerDigits: 2
    });

    let obj = {
      minutes,
      seconds
    };
    return obj;
  }
  
  componentDidMount() {
    let timeLeft = this.secondsToTime(this.state.seconds);
    this.setState({ time: timeLeft });
  }

  startTimer() {
    if (
      (this.state.status === 'default' || this.state.status === 'pause') &&
      this.state.seconds > 0
    ) {
      this.interval = setInterval(this.countDown, 1000);
      this.setState({ status: 'resume' });
    } else {
      clearInterval(this.interval);
      this.setState({ status: 'pause' });
    }
  }

  resetTimer() {
    clearInterval(this.interval);
    this.setState({
      seconds: initialSeconds,
      status: 'default',
      time: this.secondsToTime(initialSeconds)
    }); 
  }

  countDown() {
    let seconds = this.state.seconds - 1;
    this.setState({
      time: this.secondsToTime(seconds),
      seconds
    });
    if (seconds === 0) {
      clearInterval(this.interval);
      this.setState({ status: 'finished' });
    }
  }

  render() {
    const { minutes, seconds } = this.state.time;
    return (
      <div className="container has-text-centered has-text-danger">
        <Title status={this.state.status} />
        <span id="timer">
          {minutes} : {seconds}
        </span>
        <Buttons
          status={this.state.status}
          startTimer={this.startTimer}
          resetTimer={this.resetTimer}
        />
      </div>
    );
  }
}

export default Timer;
