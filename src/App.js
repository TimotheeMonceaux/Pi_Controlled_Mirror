import React, { Component } from 'react';
import './App.css';
import Clock from './clock/clock.js';
import XKCD from './xkcd/xkcd.js';
import Meteo from './meteo/meteo.js';
import News from './news/news.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-row">
          <Clock />
          <Meteo />
        </div>
        <div className="App-row">
          <News />
        </div>
        <XKCD />
      </div>
    );
  }
}

export default App;
