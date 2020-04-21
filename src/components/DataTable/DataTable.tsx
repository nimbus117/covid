import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { CountryRow, HeaderValue, HeaderId, SortEvent } from '../../types';
import DataTableHeader from './DataTableHeader';
import DataTableBody from './DataTableBody';

const idPrefix = 'dataTable-';

const sortTableData = (
  tableData: CountryRow[],
  property: HeaderId,
  sortAsc: true | false,
): CountryRow[] => {
  const sortDescending = (a: CountryRow, b: CountryRow): number =>
    a[property] > b[property] ? -1 : a[property] < b[property] ? 1 : 0;

  const sortAscending = (a: CountryRow, b: CountryRow): number =>
    a[property] > b[property] ? -1 : a[property] < b[property] ? 1 : 0;

  const sorter = sortAsc ? sortAscending : sortDescending;

  return tableData.concat().sort(sorter);
};

const sortDirection = (
  headerValues: HeaderValue[],
  headerId: HeaderId,
): true | false => {
  const attributeName = 'sortAsc';
  const sortElement = document.getElementById(idPrefix + headerId);
  const defaultSortAsc = headerValues.find((hv) => hv.id.match(headerId))
    ?.sortAsc;
  const currentSort = sortElement?.getAttribute(attributeName);

  return true;
};

type DataTableProps = {
  data: CountryRow[];
  headerValues: HeaderValue[];
};

const DataTable = ({ data, headerValues }: DataTableProps): JSX.Element => {
  const initialSortId = 'confirmed';
  const [tableData, setTableData] = useState(
    sortTableData(
      data,
      initialSortId,
      sortDirection(headerValues, initialSortId),
    ),
  );

  const sorter = (event: SortEvent): void => {
    const dataId = event.target.id.replace(
      new RegExp(idPrefix),
      '',
    ) as HeaderId;
    setTableData(sortTableData(tableData, dataId, false));
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
