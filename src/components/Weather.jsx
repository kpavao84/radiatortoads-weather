import React from 'react';
import CurrentWeather from './CurrentWeather';

const Weather = (props => (
  <div className="weather">
    <h1>Weather</h1>
    <CurrentWeather
      icon={iconName(props)}
      temperature={props.weather.currently.temperature}
      summary={props.weather.currently.summary}
    />
    <MinutelyWeather weather={props.weather.minutely} />
    <HourlyWeather weather={props.weather.hourly} />
    <DailyWeather weather={props.weather.daily} />
  </div>
));

const MinutelyWeather = (props => (
  <div className="minutelyWeather">
    <p>
      {props.weather.summary}
    </p>
  </div>
));

const HourlyWeather = (props => (
  <div className="hourlyWeather">
    <p>
      {props.weather.summary}
    </p>
  </div>
));

const DailyWeather = (props => (
  <div className="dailyWeather">
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
