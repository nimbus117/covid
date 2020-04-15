import React from 'react';
import PropTypes from 'prop-types';
import DataTable from '../DataTable';
import { CountriesObj, CountryRow, HeaderValue } from '../../types';

const createTableData = (countriesData: CountriesObj): CountryRow[] => {
  const data = [];
  for (const [key, value] of Object.entries(countriesData)) {
    const latest = value[value.length - 1];
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
    sortType: 'string',
    sortOrder: 'asc',
  },
  {
    title: 'Confirmed',
    id: 'confirmed',
    sortType: 'number',
    sortOrder: 'desc',
    initialSort: true,
  },
  {
    title: 'Deaths',
    id: 'deaths',
    sortType: 'number',
    sortOrder: 'desc',
  },
  {
    title: 'Recovered',
    id: 'recovered',
    sortType: 'number',
    sortOrder: 'desc',
  },
];

type DataViewsProps = {
  countriesData: CountriesObj;
};

const DataViews = ({ countriesData }: DataViewsProps): JSX.Element => {
  return (
    <div>
      <DataTable
        headerValues={tableHeaderValues()}
        data={createTableData(countriesData)}
      />
    </div>
  );
};

DataViews.propTypes = {
  countriesData: PropTypes.object,
};

export default DataViews;
