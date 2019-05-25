import React, { Component } from "react"
import Titles from './titles'
import Form from './form'
import WeatherResult from "./weatherresult"
import "../../css/weather.css"
const API_KEY = "58be97bc143ea0a39feaa5a8f5ea8251"

class Weather extends Component {
    state = {
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: undefined,
    }
    getWeather = async (e) => {
        e.preventDefault();
        const city = e.target.elements.city.value;
        const country = e.target.elements.country.value;
        const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
        const data = await api_call.json();
        console.log(data);
        if (city && country) {
            this.setState({
                temperature: data.main.temp,
                city: data.name,
                country: data.sys.country,
                humidity: data.main.humidity,
                description: data.weather[0].description,
                error: ""
            });
        } else {
            this.setState({
                temperature: undefined,
                city: undefined,
                country: undefined,
                humidity: undefined,
                description: undefined,
                error: "",
            });
        }
    }
    render() {
        let { city, temperature, country, humidity, description, error } = this.state
        return (
            <div id="maindiv">
                <Titles />
                <div id="formdiv">
                    <Form getWeather={this.getWeather} />
                </div>
                <div id="resultdiv">
                    <WeatherResult
                        temperature={temperature}
                        city={city}
                        country={country}
                        humidity={humidity}
                        description={description}
                        error={error}

                    />
                </div>
            </div>

        );
    }
}
export default Weather;