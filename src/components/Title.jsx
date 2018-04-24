import React from 'react';

class Title extends React.Component {
  render() {
    const { status } = this.props;
    let title;
    switch (status) {
      case 'resume':
        title = 'You are onto something!';
        break;
      case 'pause':
        title = 'You are not quite done, keep going!';
        break;
      case 'finished':
        title = 'You are done, begin again!';
        break;
      default:
        title = 'Let the countdown begin!';
        break;
    }

    return (
      <div>
        <h2 className="title is-4 has-text-danger">{title}</h2>
      </div>
    );
  }
}

export default Title;
