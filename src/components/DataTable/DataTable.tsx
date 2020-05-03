import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import { CountryRow, HeaderValue, HeaderId } from '../../types';
import { sortObjectsArray } from '../../utils/utils';
import DataTableHeader from './DataTableHeader';
import DataTableBody from './DataTableBody';
import './DataTable.css';

type DataTableProps = {
  data: CountryRow[];
  headerValues: HeaderValue[];
};

const DataTable = ({ data, headerValues }: DataTableProps): JSX.Element => {
  const initialSortHeader = headerValues.find((hv) => hv.id === 'confirmed');
  const [sortValue, setSortValue] = useState(initialSortHeader);
  const [filterValue, setFilterValue] = useState('');

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

  const sortedAndFilteredData = useMemo(
    () =>
      sortObjectsArray(
        filterValue
          ? data.filter((x) =>
              x.country.toLowerCase().includes(filterValue.toLowerCase()),
            )
          : data,
        sortValue?.id as HeaderId,
        sortValue?.sortAsc as true | false,
      ),
    // turn numbers into comma seperated strings
    [data, filterValue, sortValue],
  );

  return (
    <div id="data-table">
      <input
        type="text"
        placeholder="Filter country..."
        value={filterValue}
        onChange={(e): void => setFilterValue(e.target.value)}
      />
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
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  headerValues: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default DataTable;
