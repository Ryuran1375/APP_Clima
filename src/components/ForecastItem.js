import React from 'react';

const ForecastItem = ({ date, minTemp, maxTemp, description, icon }) => {
  const iconUrl = icon ? `https://openweathermap.org/img/wn/${icon}@2x.png` : null;
  const niceDescription = description ? description.charAt(0).toUpperCase() + description.slice(1) : '';

  const dt = new Date(date + 'T12:00:00');
  const options = { weekday: 'short', month: 'short', day: 'numeric' };
  const niceDate = dt.toLocaleDateString(undefined, options);

  return (
    <div className="forecast-item">
      <h4>{niceDate}</h4>
      {iconUrl && <img src={iconUrl} alt={description} />}
      <p style={{ marginTop: 6 }}><strong>{niceDescription}</strong></p>
      <p style={{ marginTop: 8 }}>Min: {Math.round(minTemp)}°C</p>
      <p>Max: {Math.round(maxTemp)}°C</p>
    </div>
  );
};

export default ForecastItem;
