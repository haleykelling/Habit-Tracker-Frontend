import React from 'react';
import {Link} from 'react-router-dom';
import '../App.css';


const Welcome = () => {
    return (
        <div>
            <h1 className="app-name">Right Track</h1>
            <h2 className="description-of-app">your personal habit tracker</h2>
            <div className="quote-block">
                <p className="quote">“ We are what we repeatedly do. Excellence, then, is not an act, but a habit. ”</p>
                <p className="aristotle">-Aristotle</p>
            </div>
            <Link to="/login"><button className="call-to-action">Start Tracking</button></Link>
        </div>
    );
}

export default Welcome;
