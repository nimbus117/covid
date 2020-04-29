import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import { CountryRow, HeaderValue, HeaderId } from '../../types';
import DataTableHeader from './DataTableHeader';
import DataTableBody from './DataTableBody';
import './DataTable.css';

const sort = (
  data: CountryRow[],
  sortBy: HeaderId,
  sortAsc: true | false,
): CountryRow[] => {
  return data
    .concat()
    .sort(
      (a: CountryRow, b: CountryRow): number =>
        (a[sortBy] > b[sortBy] ? 1 : a[sortBy] < b[sortBy] ? -1 : 0) *
        (sortAsc ? 1 : -1),
    );
};

type DataTableProps = {
  data: CountryRow[];
  headerValues: HeaderValue[];
};

const DataTable = ({ data, headerValues }: DataTableProps): JSX.Element => {
  const initialSortHeader = headerValues.find((hv) => hv.id === 'confirmed');
  const [sortValue, setSortValue] = useState(initialSortHeader);
  const [filterValue, setFilterValue] = useState('');

  const requestSort = (headerValue: HeaderValue): void => {
    const newValue = { ...headerValue };
    newValue.sortAsc =
      headerValue.id === sortValue?.id
        ? !sortValue.sortAsc
        : headerValue.sortAsc;
    setSortValue(newValue);
  };

  const filteredData: CountryRow[] = filterValue
    ? data.filter((x) =>
        x.country.toLowerCase().includes(filterValue.toLowerCase()),
      )
    : data;

  const sortedData = useMemo(
    () =>
      sort(
        filteredData,
        sortValue?.id as HeaderId,
        sortValue?.sortAsc as true | false,
      ),
    // turn numbers into comma seperated strings
    [filteredData, sortValue],
  );

  return (
    <div id="data-table">
      <input
        type="text"
        placeholder="Filter country..."
        value={filterValue}
        onChange={(e) => setFilterValue(e.target.value)}
      />
      <table>
        <DataTableHeader
          headerValues={headerValues}
          requestSort={requestSort}
        />
        <DataTableBody data={sortedData} headerValues={headerValues} />
      </table>
    </div>
  );
};

DataTable.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  headerValues: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default DataTable;
