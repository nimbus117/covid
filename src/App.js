import React, { useState, useEffect } from 'react';
import { get } from './utils/requests';
import DataViews from './components/DataViews';
import './App.css';

const addWorld = (data) => {
  const all = [];

  for (const [, value] of Object.entries(data)) {
    all.push(value);
  }

  const world = all.flat().reduce((acc, cur) => {
    acc[cur.date] = acc[cur.date]
      ? {
          confirmed: acc[cur.date].confirmed + cur.confirmed,
          deaths: acc[cur.date].deaths + cur.deaths,
          recovered: acc[cur.date].recovered + cur.recovered,
        }
      : {
          confirmed: cur.confirmed,
          deaths: cur.deaths,
          recovered: cur.recovered,
        };
    return acc;
  }, {});

  data.World = [];
  for (const [key, value] of Object.entries(world)) {
    data.World.push({ date: key, ...value });
  }

  return data;
};

const App = () => {
  const [countriesData, setCountriesData] = useState(null);

  const getTimeSeries = () => {
    (async () =>
      setCountriesData(
        addWorld(await get('https://pomber.github.io/covid19/timeseries.json')),
      ))();
  };

  useEffect(getTimeSeries, []);

  return (
    <div>
      {countriesData ? (
        <DataViews countriesData={countriesData} />
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default App;
