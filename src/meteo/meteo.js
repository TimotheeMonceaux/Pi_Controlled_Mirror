import React, { Component } from 'react';
import './meteo.css';
import config from './config.json';

class Meteo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loaded: false,
            name: "",
            description: "",
            icon: [],
            temp: "",
            min: "",
            max: ""
        }
    }

    componentDidMount() {
        this.refresh();
        this.intervalID = setInterval(
            () => this.refresh(),
            1000 * 3600
        );
    }

    componentWillUnmount() {
        clearInterval(this.intervalID);
    }

    refresh() {
        fetch('http://api.openweathermap.org/data/2.5/weather?id='+config.cityid+'&units=metric&lang=fr&appid='+config.apikey)
        .then(response => response.json())
        .then(data => this.setState({
            loaded: true,
            name: data.name,
            description: data.weather[0].description,
            icon: [<img src={"http://openweathermap.org/img/w/"+data.weather[0].icon+".png"} alt="Weather Icon" className="meteo-img" />],
            temp: data.main.temp,
            min: data.main.temp_min,
            max: data.main.temp_max
        }))
    }

    render() {
        if (!this.state.loaded)
            return(<p>Loading...</p>);
        return (<div className="meteo">{this.state.icon} <span className="meteo-text">{this.state.name+': '+this.state.description+' - '+this.state.temp+'°C ('+this.state.min+'°C - '+this.state.max+'°C)'}</span></div>)
    }
}

export default Meteo;