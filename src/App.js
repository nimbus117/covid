import React, { useState, useEffect } from 'react';
import { get } from './Utils/Request';
import SimpleTable from './components/SimpleTable';
import './App.css';

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    (async () =>
      setCountries(
        (await get('https://pomber.github.io/covid19/timeseries.json')) || [],
      ))();
  });

  return <SimpleTable countries={countries}></SimpleTable>;
}

export default App;
