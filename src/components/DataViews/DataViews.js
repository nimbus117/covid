import React from 'react';
import PropTypes from 'prop-types';
import DataTable from '../DataTable';

const createTableData = (countriesData) => {
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

const tableHeaderValues = [
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

const DataViews = (props) => {
  return (
    <div>
      <DataTable
        headerValues={tableHeaderValues}
        data={createTableData(props.countriesData)}
      />
    </div>
  );
};

DataViews.propTypes = {
  countriesData: PropTypes.object,
};

export default DataViews;
