import React from 'react';
import ForecastItem from './ForecastItem';

const ForecastList = ({ forecast }) => {
  if (!forecast || !forecast.list) return null;

  const groups = {};
  forecast.list.forEach((item) => {
    const date = item.dt_txt.split(' ')[0];
    if (!groups[date]) groups[date] = [];
    groups[date].push(item);
  });

  const sortedDates = Object.keys(groups).sort();
  const todayStr = new Date().toISOString().split('T')[0];
  const nextDates = sortedDates.filter((d) => d !== todayStr).slice(0, 5);

  const dailySummaries = nextDates.map((date) => {
    const items = groups[date];
    const temps = items.map((i) => i.main.temp);
    const minTemp = Math.min(...temps);
    const maxTemp = Math.max(...temps);

    const noonItem = items.find((i) => i.dt_txt.includes('12:00:00')) || items[0];
    const description = noonItem.weather && noonItem.weather[0] && noonItem.weather[0].description;
    const icon = noonItem.weather && noonItem.weather[0] && noonItem.weather[0].icon;

    return {
      date,
      minTemp,
      maxTemp,
      description,
      icon,
    };
  });

  return (
    <div className="forecast-list">
      <h3>Pronóstico para los próximos días</h3>
      <div className="forecast-grid">
        {dailySummaries.map((d) => (
          <ForecastItem key={d.date} {...d} />
        ))}
      </div>
    </div>
  );
};

export default ForecastList;
