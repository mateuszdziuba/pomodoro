import React from 'react';

class Buttons extends React.Component {
  render() {
    const { status, start, reset } = this.props;

    let button1, button2;
    let symbol = <i className="far fa-play-circle" />;
    
    if (status === 'resume') {
      symbol = <i className="far fa-pause-circle" />;
    } 

    if (status !== 'finished') {
      button1 = (
        <button onClick={start} className="button is-danger is-large">
          {symbol}
        </button>
      );
    }

    if (status !== 'default') {
      button2 = (
        <button onClick={reset} className="button is-danger is-large">
          <i className="fas fa-undo" />
        </button>
      );
    }

    return (
      <div>
        {button1}
        {button2}
      </div>
    );
  }
}

export default Buttons;
