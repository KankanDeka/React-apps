import React, { Component } from "react"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import "../css/navbar.css"
import Home from "./home"
import About from "./about"
import Login from "./login"
import Profile from "./profile"
import Weather from "./weather/weather"

class NavbarMenu extends Component {
    render() {
        return (

            <Router>
                <div>
                    <ul className="ul">
                        <li className="liBrand">
                            <Link to="/"><strong>Home</strong></Link>
                        </li>

                        <li className="li">
                            <Link to="/Login">Login</Link>
                        </li>
                        <li className="li">
                            <Link to="/Profile">Profile</Link>
                        </li>
                        <li className="li">
                            <Link to="/About">About</Link>
                        </li>
                        <li className="li">
                            <Link to="/Weather">Weather</Link>
                        </li>
                    </ul>
                    <hr />
                    <Route exact path="/" component={Home} />
                    <Route path="/About" component={About} />
                    <Route path="/Profile" component={Profile} />
                    <Route path="/Login" component={Login} />
                    <Route path="/Weather" component={Weather} />

                </div>
            </Router>
        );
    }
}

export default NavbarMenu;