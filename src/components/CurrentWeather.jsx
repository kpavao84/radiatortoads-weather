import React from 'react';

const CurrentWeather = (props => (
  <div className="currentWeather">
    <p>
      {props.icon} {props.temperature}˚ {props.summary}
    </p>
  </div>
));

export default CurrentWeather;
