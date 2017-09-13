import React from 'react';
import ReactDOM from 'react-dom';
import Weather from './components/Weather';

const MockWeather = require('./mock-response.json');

// convert the icon name from the api to the one ReactSkycons needs
ReactDOM.render(
  <Weather weather={MockWeather} />,
  document.getElementById('root'),
);
