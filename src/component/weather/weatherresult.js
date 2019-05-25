import React from "react"
import "../../css/weather.css"
function WeatherResult(props) {
    let { city, temperature, country, humidity, description, error } = props
    return (
        <div id="resultBox">
            <div id="resultText">
                <p>Location : {city}  {country}</p>
                <p>Temperature : {temperature}</p>
                <p>Humidity : {humidity}</p>
                <p>Condition: {description}</p>
                <p>{error}</p>

                {/* {city && country && <p>Location : {city}  {country}</p>}
                {temperature && <p>Temperature : {temperature}</p>}
                {humidity && <p>Humidity : {humidity}</p>}
                {description && <p>Condition: {description}</p>}
                {error && <p>{error}</p>} */}
            </div>
        </div>

    );

}
export default WeatherResult;