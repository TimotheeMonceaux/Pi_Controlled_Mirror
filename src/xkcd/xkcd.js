import React, { Component } from 'react';
import './xkcd.css';
import xkcd from './xkcd.json';

class XKCD extends Component {
  render() {
    return (<div className="xkcd"><img src={xkcd.img} alt={xkcd.alt}/></div>)
  }
}

export default XKCD;