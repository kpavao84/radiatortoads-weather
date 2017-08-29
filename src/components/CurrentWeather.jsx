import React from 'react';
import ReactSkycons from './ReactSkycons';

const CurrentWeather = (props => (
  <div className="currentWeather">
    <CurrentIcon icon={props.icon} />
    {props.temperature}° {props.summary}
  </div>
));

const CurrentIcon = (props => (
  <div style={iconStyle} className="currentIcon">
    <ReactSkycons icon={props.icon.toUpperCase().replace('-', '_')} color="black" />
  </div>
));

const iconStyle = {
  width: '15%',
  height: '15%',
};



export default CurrentWeather;
