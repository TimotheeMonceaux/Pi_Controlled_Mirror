import React, { Component } from 'react';
import './App.css';
import Clock from './clock/clock.js';
import XKCD from './xkcd/xkcd.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Clock />
        <XKCD />
      </div>
    );
  }
}

export default App;
