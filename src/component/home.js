import React, { Component } from "react"
import { BrowserRouter as Link } from "react-router-dom"
import homeImg from "../img/home.png"
import "../css/home.css"
class Home extends Component {
    render() {
        return (
            <div>
                <div id="firstdiv">
                    <main>
                        <div id="hometextdiv">
                            <h6 id="homeh6">ARE YOU AWESOME ?</h6>
                            <p id="homep">Yes. You are Really awesome
                        <span className="blue"> !</span></p>
                            <p id="homedesc"> Powerful new creation features for Mac and PC users. </p>
                            <button id="homebtn"><Link to="/">Read More</Link></button>
                        </div>
                        <div id="homeimgdiv">
                            <img id="homebird" src={homeImg} alt="Home Image" />
                        </div>
                    </main>
                </div>
                <div id="seconddiv">
                    <div className="seconddivA AA">
                        <h1>Hello</h1>
                    </div>
                    <div className="seconddivA AB">
                        <h1>Hello</h1>
                    </div>
                </div>
            </div>

        );
    }
}
export default Home;