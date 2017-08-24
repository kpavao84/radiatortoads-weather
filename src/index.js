import React from 'react';
import ReactDOM from 'react-dom';

const MockWeather = require('./mock-response.json');

class Weather extends React.Component {
  render() {
    return (
      <div className="weather">
        <h1>Weather</h1>
        <CurrentWeather />
	<MinutelyWeather />
	<HourlyWeather />
	<DailyWeather />
      </div>
    );
  }
}

class CurrentWeather extends React.Component {
  constructor() {
    super();
    this.weather = MockWeather;
  }

  render() {
    return (
      <div className="currentWeather">
        <p>
          {this.weather["currently"]["summary"]} -- {this.weather["currently"]["temperature"]}
        </p>
      </div>
    );
  }
}

class MinutelyWeather extends React.Component {
  constructor() {
    super();
    this.weather = MockWeather;
  }

  render() {
    return (
      <div className="minutelyWeather">
	<p>
	  {this.weather["minutely"]["summary"]}
	</p>
      </div>
    );
  }
}

class HourlyWeather extends React.Component {
  constructor() {
    super();
    this.weather = MockWeather;
  }

  render() {
    return (
      <div className="hourlyWeather">
	<p>
	  {this.weather["hourly"]["summary"]}
	</p>
      </div>
    );
  }
}

class DailyWeather extends React.Component {
  constructor() {
    super();
    this.weather = MockWeather;
  }

  render() {
    return (
      <div className="dailyWeather">
	<p>
	  {this.weather["daily"]["summary"]}
	</p>
      </div>
    );
  }
}

ReactDOM.render(
  <Weather/>,
  document.getElementById('root')
);
