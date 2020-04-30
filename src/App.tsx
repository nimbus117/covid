import React from 'react';
import DataViews from './components/DataViews/DataViews';
import Loading from './components/Loading/Loading';
import './App.css';
import { CountriesObj } from './types';
import { useFetch } from './hooks/useFetch';
import { addWorld } from './utils/addWorld';

const App = (): JSX.Element => {
  // https://httpstat.us/400
  const { isLoading, data, error } = useFetch(
    'https://pomber.github.io/covid19/timeseries.json',
  );

  if (isLoading) return <Loading />;

  if (error) return <div>{error}</div>;

  return <DataViews countriesData={addWorld(data as CountriesObj)} />;
};

export default App;
