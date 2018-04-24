import React from 'react';

class Buttons extends React.Component {
  render() {
    const { startTimer, resetTimer, status } = this.props;
    return (
      <div>
        {status === 'default' || status === 'pause' ? (
          <button
            id="start"
            onClick={startTimer}
            className="button is-danger is-large"
          >
            <i className="far fa-play-circle" />
          </button>
        ) : status === 'resume' ? (
          <button
            id="pause"
            onClick={startTimer}
            className="button is-danger is-large"
          >
            <i className="far fa-pause-circle" />
          </button>
        ) : (
          ''
        )}
        {status !== 'default' ? (
          <button
            id="reset"
            onClick={resetTimer}
            className="button is-danger is-large"
          >
            <i className="fas fa-undo" />
          </button>
        ) : (
          ''
        )}
      </div>
    );
  }
}

export default Buttons;
