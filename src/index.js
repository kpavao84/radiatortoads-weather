import React from 'react';
import ReactDOM from 'react-dom';

const MockWeather = require('./mock-response.json');

class Weather extends React.Component {
  render() {
    return (
      <div className="weather">
        <h1>Weather</h1>
        <CurrentWeather weather={this.props.weather} />
        <MinutelyWeather weather={this.props.weather} />
        <HourlyWeather weather={this.props.weather} />
        <DailyWeather weather={this.props.weather} />
      </div>
    );
  }
}

class CurrentWeather extends React.Component {
  render() {
    return (
      <div className="currentWeather">
        <p>
          {this.props.weather["currently"]["summary"]} -- {this.props.weather["currently"]["temperature"]}
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
          {this.props.weather["minutely"]["summary"]}
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
          {this.props.weather["hourly"]["summary"]}
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
          {this.props.weather["daily"]["summary"]}
        </p>
      </div>
    );
  }
}

ReactDOM.render(
  <Weather weather={MockWeather}/>,
  document.getElementById('root')
);
