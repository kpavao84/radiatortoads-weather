import React from 'react';
import ReactDOM from 'react-dom';
import Weather from './components/Weather';

const MockWeather = require('./mock-response.json');

ReactDOM.render(
  <Weather weather={MockWeather} />,
  document.getElementById('root'),
);
