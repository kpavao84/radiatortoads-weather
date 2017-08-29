import React from 'react';

const CurrentWeather = (props => (
  <div className="currentWeather">
    <p>
      {props.weather.summary} -- {props.weather.temperature}
    </p>
  </div>
));

export default CurrentWeather;
