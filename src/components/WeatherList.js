import React from 'react';
import WeatherItem from './WeatherItem';
import ForecastList from './ForecastList';

const WeatherList = ({ data, forecast }) => {
  if (!data || !data.main || !data.weather) return null;

  const weatherProps = {
    city: data.name,
    country: data.sys && data.sys.country,
    temp: data.main.temp,
    feelsLike: data.main.feels_like,
    description: data.weather[0].description,
    icon: data.weather[0].icon,
    humidity: data.main.humidity,
    windSpeed: data.wind && data.wind.speed,
  };

  return (
    <div className="weather-list-container">
      <h3>Datos de Clima Actual</h3>
      <WeatherItem {...weatherProps} />
      {forecast && <ForecastList forecast={forecast} />}
    </div>
  );
};

export default WeatherList;