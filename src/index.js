import React from 'react';
import ReactDOM from 'react-dom';

const MockWeather = require('./mock-response.json');

class Weather extends React.Component {
  render() {
    return (
      <div className="weather">
        <h1>Weather</h1>
        <CurrentWeather weather={this.props.weather["currently"]} />
        <MinutelyWeather weather={this.props.weather["minutely"]} />
        <HourlyWeather weather={this.props.weather["hourly"]} />
        <DailyWeather weather={this.props.weather["daily"]} />
      </div>
    );
  }
}

class CurrentWeather extends React.Component {
  render() {
    return (
      <div className="currentWeather">
        <p>
          {this.props.weather["summary"]} -- {this.props.weather["temperature"]}
        </p>
      </div>
    );
  }
}

class MinutelyWeather extends React.Component {
  render() {
    return (
      <div className="minutelyWeather">
        <p>
          {this.props.weather["summary"]}
        </p>
      </div>
    );
  }
}

class HourlyWeather extends React.Component {
  render() {
    return (
      <div className="hourlyWeather">
        <p>
          {this.props.weather["summary"]}
        </p>
      </div>
    );
  }
}

class DailyWeather extends React.Component {
  render() {
    return (
      <div className="dailyWeather">
        <p>
          {this.props.weather["summary"]}
        </p>
      </div>
    );
  }
}

ReactDOM.render(
  <Weather weather={MockWeather}/>,
  document.getElementById('root')
);
