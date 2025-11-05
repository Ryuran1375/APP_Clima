import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import WeatherList from './components/WeatherList';
import MusicRecommender from './components/MusicRecommender';
import './App.css';

const API_KEY = 'e51c5068390588ada28ebae61a2f7b6a';
const INITIAL_CITY = 'Reynosa, MX';

function App() {
  const [city, setCity] = useState(INITIAL_CITY);
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchWeather = async (cityName) => {
    if (!cityName) return;

    setIsLoading(true);
    setError(null);
    
    const normalizedCity = cityName.replace(/\s*,\s*/, ',');
    const encodedCity = encodeURIComponent(normalizedCity);
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodedCity}&appid=${API_KEY}&units=metric&lang=es`;

    try {
      const response = await fetch(url);
      if (!response.ok) {
        if (response.status === 401) {
          throw new Error('Error de autenticación: clave API inválida.');
        } else if (response.status === 404) {
          throw new Error('Ciudad no encontrada. Intenta con otro nombre.');
        } else {
          throw new Error(`Error de la API: ${response.status} ${response.statusText}`);
        }
      }

      const data = await response.json();
      setWeatherData(data);
      setForecastData(null);
    } catch (err) {
      setError(err.message);
      setWeatherData(null);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchForecast = async (cityName) => {
    if (!cityName) return;

    const normalizedCity = cityName.replace(/\s*,\s*/, ',');
    const encodedCity = encodeURIComponent(normalizedCity);
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${encodedCity}&appid=${API_KEY}&units=metric&lang=es`;

    try {
      const response = await fetch(url);
      if (!response.ok) {
        if (response.status === 401) {
          throw new Error('Error de autenticación: clave API inválida.');
        } else if (response.status === 404) {
          throw new Error('Forecast no encontrado para la ciudad solicitada.');
        } else {
          throw new Error(`Error de la API (forecast): ${response.status} ${response.statusText}`);
        }
      }

      const data = await response.json();
      setForecastData(data);
    } catch (err) {
      setError(err.message);
      setForecastData(null);
    }
  };

  useEffect(() => {
    fetchWeather(city);
    fetchForecast(city);
  }, [city]); 

  const weatherDescription = weatherData?.weather?.[0]?.description || 'desconocido';

  return (
    <div className="container">
      <h1>My Weather</h1>
      
      <Header onSearch={setCity} currentCity={city} />

      {isLoading && <p className="loading-message">Cargando clima de {city}...</p>}
      {error && <p className="error-message">Error: {error}</p>}
      
      {weatherData && !isLoading && (
        <>
          <WeatherList data={weatherData} forecast={forecastData} />
          <MusicRecommender weatherDescription={weatherDescription} />
        </>
      )}
    </div>
  );
}

export default App;
