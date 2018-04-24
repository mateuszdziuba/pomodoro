import React, { Component } from 'react';
import Timer from './components/Timer';
import './App.css';
import 'bulma/css/bulma.css';

class App extends Component {
  render() {
    return (
      <div className="hero-body ">
        <Timer />
      </div>
    );
  }
}

export default App;
