import React, { Component } from 'react';
import './meteo.css';
import config from './config.json';
import './weather-icons/css/weather-icons.min.css';
import mapping from './weather-icons/mapping.json';

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
            description: this.firstLetterToUpperCase(data.weather[0].description),
            icon: [<i key="meteo-icon" className={mapping[data.weather[0].icon]}></i>],
            temp: data.main.temp,
            min: data.main.temp_min,
            max: data.main.temp_max
        }))
    }

    render() {
        if (!this.state.loaded)
            return(<p>Loading...</p>);
        return (
        <div className="meteo">
            <div className="meteo-top">
                <b>{this.state.name}</b> : {this.state.description}
            </div>
            <div className="meteo-bottom">
                {this.state.icon} <b>{this.state.temp +'°C'}</b> {'('+this.state.min+' - '+this.state.max+')'}
            </div>
        </div>)
    }

    firstLetterToUpperCase(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
}

export default Meteo;