import React, { Component } from "react"
import "../../css/weather.css"

class Form extends Component {
    render() {
        return (
            <div id="form">
                <form onSubmit={this.props.getWeather}>
                    <p> <input id="inputbox" type="text" name="city" placeholder="City Name" /></p>
                    <p> <input id="inputbox" type="text" name="country" placeholder="Country Name" /></p>
                    <button id="formButton">Get Weather</button>
                </form>
            </div>

        );
    }
}
export default Form;