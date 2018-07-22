import React, { Component } from 'react';
import './App.css';
import XKCD from './xkcd/xkcd.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <XKCD />
      </div>
    );
  }
}

export default App;
