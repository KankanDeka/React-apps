import React, { Component } from "react"
import "../css/profile.css"
class Profile extends Component {
    render() {
        return (
            <div id="A">
                <div id="AB"><AB /></div>
                <div id="AC"><AC /></div>
                <div id="AD"><AD /></div>
            </div>

        );
    }
}

function AB() {
    return (
        <div>
            <h1>Activity</h1>
            <ul>
            <li><button>Profile</button></li>
            <li><button>Security</button></li>
            <li><button>Payments</button></li>
            <li><button>Privacy</button></li>

            </ul>
        </div>
    );
}

function AC() {
    return (
        <div>
            <h1>Activity</h1>
            <ul>
                <li>Profile</li>

            </ul>
        </div>
    );
}
function AD() {
    return (
        <div>
            <h1>Trends</h1>
            <ul>
                <li>Profile</li>
                <li>History</li>
                <li>Payments</li>

            </ul>
        </div>
    );
}



export default Profile;