import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { CountryRow, HeaderValue, HeaderId } from '../../types';
import DataTableHeader from './DataTableHeader';
import DataTableBody from './DataTableBody';

const idPrefix = 'dataTable-';

const sortTableData = (
  tableData: CountryRow[],
  property: HeaderId,
  sortOrder: 'asc' | 'desc',
): CountryRow[] => {
  const sortDescending = (a: CountryRow, b: CountryRow): number =>
    a[property] > b[property] ? -1 : a[property] < b[property] ? 1 : 0;

  const sortAscending = (a: CountryRow, b: CountryRow): number =>
    a[property] > b[property] ? -1 : a[property] < b[property] ? 1 : 0;

  const sorter = sortOrder === 'asc' ? sortAscending : sortDescending;

  return tableData.concat().sort(sorter);
};

type DataTableProps = {
  data: CountryRow[];
  headerValues: HeaderValue[];
};

const DataTable = ({ data, headerValues }: DataTableProps): JSX.Element => {
  const [tableData, setTableData] = useState(
    sortTableData(data, 'confirmed', 'desc'),
  );

  const sorter = (event: any): void => {
    const dataId = event.target.id.replace(new RegExp(idPrefix), '');
    setTableData(sortTableData(tableData, dataId, 'desc'));
  };

  return (
    <table>
      <DataTableHeader
        headerValues={headerValues}
        sorter={sorter}
        idPrefix={idPrefix}
      />
      <DataTableBody data={tableData} headerValues={headerValues} />
    </table>
  );
};

DataTable.propTypes = {
  data: PropTypes.array,
  headerValues: PropTypes.array,
};

export default DataTable;
