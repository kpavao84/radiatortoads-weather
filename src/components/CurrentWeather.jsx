import React from 'react';
import ReactSkycons from './ReactSkycons';
import './currentWeather.css';

const CurrentWeather = (props => (
  <div id="current-weather">
    <ReactSkycons className="icon" icon={props.icon} color="#000" />
    {props.temperature}° {props.summary}
  </div>
));

export default CurrentWeather;
