import React from 'react';

const WeatherItem = ({ city, country, temp, feelsLike, description, icon, humidity, windSpeed }) => {
  const iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;
  const niceDescription = description ? description.charAt(0).toUpperCase() + description.slice(1) : '';

  return (
    <div className="weather-item-card">
      <h2>{city}, {country}</h2>

      <div className="current-info">
        <img src={iconUrl} alt={description} />
        <p className="temperature">{Math.round(temp)}°C</p>
      </div>

      <p className="description-text">
        Condición: <strong>{niceDescription}</strong>
      </p>

      <div className="details-grid">
        <p>
          <span style={{display:'inline-flex', alignItems:'center', gap:8}}>
            <svg width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden>
              <path d="M14 14.76V5a2 2 0 10-4 0v9.76a4 4 0 104 0z" />
            </svg>
            <span>Sensación térmica: <strong>{Math.round(feelsLike)}°C</strong></span>
          </span>
        </p>

        <p>
          <span style={{display:'inline-flex', alignItems:'center', gap:8}}>
            <svg width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden>
              <path d="M12 2C8 6 6 9 6 12a6 6 0 0012 0c0-3-2-6-6-10z" />
            </svg>
            <span>Humedad: <strong>{humidity}%</strong></span>
          </span>
        </p>

        <p>
          <span style={{display:'inline-flex', alignItems:'center', gap:8}}>
            <svg width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden>
              <path d="M3 12h13a3 3 0 100-6 3 3 0 00-3 3" />
              <path d="M3 16h9a3 3 0 100-6 3 3 0 00-3 3" />
            </svg>
            <span>Viento: <strong>{windSpeed} m/s</strong></span>
          </span>
        </p>
      </div>

    </div>
  );
};

export default WeatherItem;