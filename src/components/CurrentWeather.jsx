import React from 'react';
import ReactSkycons from './ReactSkycons';

const CurrentWeather = (props => (
  <div className="currentWeather">
    <ReactSkycons icon={props.icon.toUpperCase().replace('-', '_')} color="black" />
    {props.temperature}° {props.summary}
  </div>
));

export default CurrentWeather;
