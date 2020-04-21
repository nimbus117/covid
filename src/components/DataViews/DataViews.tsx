import React from 'react';
import PropTypes from 'prop-types';
import DataTable from '../DataTable/DataTable';
import { CountriesObj, CountryRow, HeaderValue } from '../../types';

const createTableData = (
  countriesData: CountriesObj,
  dataAge = 1,
): CountryRow[] => {
  const data = [];
  for (const [key, value] of Object.entries(countriesData)) {
    const latest = value[value.length - dataAge];
    data.push({
      country: key,
      confirmed: latest.confirmed,
      deaths: latest.deaths,
      recovered: latest.recovered,
    });
  }
  return data;
};

const tableHeaderValues = (): HeaderValue[] => [
  {
    title: 'Country',
    id: 'country',
    sortAsc: true,
  },
  {
    title: 'Confirmed',
    id: 'confirmed',
    sortAsc: false,
  },
  {
    title: 'Deaths',
    id: 'deaths',
    sortAsc: false,
  },
  {
    title: 'Recovered',
    id: 'recovered',
    sortAsc: false,
  },
];

type DataViewsProps = {
  countriesData: CountriesObj;
};

const DataViews = ({ countriesData }: DataViewsProps): JSX.Element => {
  return (
    <DataTable
      headerValues={tableHeaderValues()}
      data={createTableData(countriesData)}
    />
  );
};

DataViews.propTypes = {
  countriesData: PropTypes.object,
};

export default DataViews;
