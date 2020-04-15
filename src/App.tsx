import React, { useState, useEffect } from 'react';
import { get } from './utils/requests';
import DataViews from './components/DataViews';
import './App.css';
import { CountriesObj, CountryValue } from './types';

const addWorld = (data: CountriesObj): CountriesObj => {
  const all: CountryValue[][] = [];

  for (const key in data) {
    const values = data[key];
    all.push(values);
  }

  const world = all.flat().reduce((acc: any, cur: any) => {
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
    data.World.push({ date: key, ...(value as CountryValue) });
  }

  return data;
};

const App = (): JSX.Element => {
  const [countriesData, setCountriesData] = useState<CountriesObj | null>(null);

  const getTimeSeries = (): void => {
    (async (): Promise<void> =>
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
