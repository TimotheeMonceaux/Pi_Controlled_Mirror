import React, { Component } from 'react';
import './clock.css';
import moment from 'moment';
import 'moment/locale/fr.js';

class Clock extends Component {
    constructor(props) {
        super(props);
        let m = moment();
        this.state = {
            date: m.format("D MMMM YYYY"),
            time: m.format("HH:mm"),
            sec: m.format("ss")
        }
    }

    componentDidMount() {
        this.intervalID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.intervalID);
    }

    tick() {
        let m = moment();
        this.setState({
            date: m.format("D MMMM YYYY"),
            time: m.format("HH:mm"),
            sec: m.format("ss")
        })
    }

    render() {
        return (
            <div className="clock">
                <div className="clock-top"><b>{this.state.time}</b> : {this.state.sec}</div>
                <div className="clock-bottom"><b>{this.state.date}</b></div>
            </div>)
    }
}

export default Clock;