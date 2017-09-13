import React from 'react';
import CurrentWeather from './CurrentWeather';

const Weather = (props => (
  <div id="weather">
    <CurrentWeather
      icon={iconName(props)}
      temperature={props.weather.currently.temperature}
      summary={props.weather.currently.summary}
    />
    <HourlyWeather weather={props.weather.hourly} />
    <DailyWeather weather={props.weather.daily} />
  </div>
));

const HourlyWeather = (props => (
  <div id="hourly-weather">
    <p>
      {props.weather.summary}
    </p>
  </div>
));

const DailyWeather = (props => (
  <div id="daily-weather">
    <p>
      {props.weather.summary}
    </p>
  </div>
));

// convert the icon name from the api to the one ReactSkycons needs
function iconName(props) {
  return props.weather.currently.icon.toUpperCase().replace('-', '_');
}

export default Weather;
