import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { CountriesObj, CountryRow, HeaderValue, HeaderId } from '../../types';
import { sortObjectsArray } from '../../utils/utils';
import DataTableHeader from './DataTableHeader';
import DataTableBody from './DataTableBody';
import './DataTable.css';

const headerValues: HeaderValue[] = [
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

const createTableData = (
  countriesData: CountriesObj,
  dataAge = 1,
): CountryRow[] => {
  const data = [];
  for (const [key, value] of Object.entries(countriesData)) {
    const day = value[value.length - dataAge];
    data.push({
      country: key,
      confirmed: day.confirmed,
      deaths: day.deaths,
      recovered: day.recovered,
    });
  }
  return data;
};

type DataTableProps = {
  data: CountriesObj;
};

const DataTable = ({ data }: DataTableProps): JSX.Element => {
  const initialSortHeader = headerValues.find((hv) => hv.id === 'confirmed');
  const [tableData, setTableData] = useState(createTableData(data));
  const [sortValue, setSortValue] = useState(initialSortHeader);
  const [filterValue, setFilterValue] = useState('');

  const dates = Object.values(data)[0]
    .map((x) => x.date)
    .reverse();

  const handleDateChange = (e: React.FormEvent<HTMLSelectElement>): void =>
    setTableData(createTableData(data, parseInt(e.currentTarget.value)));

  const requestSort = (headerValue: HeaderValue): void => {
    setSortValue(
      (sortValue): HeaderValue => ({
        ...headerValue,
        sortAsc:
          headerValue.id === sortValue?.id
            ? !sortValue.sortAsc
            : headerValue.sortAsc,
      }),
    );
  };

  const sortedAndFilteredData = sortObjectsArray(
    filterValue
      ? tableData.filter((x) =>
          x.country.toLowerCase().includes(filterValue.toLowerCase()),
        )
      : tableData,
    sortValue?.id as HeaderId,
    sortValue?.sortAsc as true | false,
  );

  return (
    <div id="data-table">
      <div id="data-table-filters">
        <input
          type="text"
          placeholder="Filter country..."
          value={filterValue}
          onChange={(e): void => setFilterValue(e.target.value)}
        />
        <select id="test" name="test" onChange={handleDateChange}>
          {dates.map((d, i) => (
            <option key={d} value={i + 1}>
              {new Date(d).toDateString()}
            </option>
          ))}
        </select>
      </div>
      <table>
        <DataTableHeader
          headerValues={headerValues}
          requestSort={requestSort}
          sortValue={sortValue as HeaderValue}
        />
        <DataTableBody
          data={sortedAndFilteredData as CountryRow[]}
          headerValues={headerValues}
        />
      </table>
    </div>
  );
};

DataTable.propTypes = {
  data: PropTypes.object.isRequired,
};

export default DataTable;
