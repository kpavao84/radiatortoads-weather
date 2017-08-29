import React from 'react';
import CurrentWeather from './CurrentWeather';

const Weather = (props => (
  <div className="weather">
    <h1>Weather</h1>
    <CurrentWeather
      icon={props.weather.currently.icon}
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

export default Weather;
