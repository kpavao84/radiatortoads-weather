import React from 'react';
import ReactDOM from 'react-dom';

const MockWeather = require('./mock-response.json');

function Weather(props) {
  return (
    <div className="weather">
      <h1>Weather</h1>
      <CurrentWeather weather={props.weather.currently} />
      <MinutelyWeather weather={props.weather.minutely} />
      <HourlyWeather weather={props.weather.hourly} />
      <DailyWeather weather={props.weather.daily} />
    </div>
  );
}

function CurrentWeather(props) {
  return (
    <div className="currentWeather">
      <p>
        {props.weather.summary} -- {props.weather.temperature}
      </p>
    </div>
  );
}

function MinutelyWeather(props) {
  return (
    <div className="minutelyWeather">
      <p>
        {props.weather.summary}
      </p>
    </div>
  );
}

function HourlyWeather(props) {
  return (
    <div className="hourlyWeather">
      <p>
        {props.weather.summary}
      </p>
    </div>
  );
}

function DailyWeather(props) {
  return (
    <div className="dailyWeather">
      <p>
        {props.weather.summary}
      </p>
    </div>
  );
}

ReactDOM.render(
  <Weather weather={MockWeather} />,
  document.getElementById('root'),
);
