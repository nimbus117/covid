import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './DataTable.css';
import sort from '../../utils/sort';
import { CountryRow, HeaderValue, TableDataSorter } from '../../types';

const idPrefix = 'dataTable-';

const headerRow = (
  headerValues: HeaderValue[],
  sorter: TableDataSorter,
): JSX.Element => (
  <tr>
    {headerValues.map((hv) => (
      <th id={idPrefix + hv.id} onClick={sorter} key={hv.id}>
        {hv.title}
      </th>
    ))}
  </tr>
);

const dataRows = (
  data: CountryRow[],
  headerValues: HeaderValue[],
): JSX.Element[] =>
  data.map((d, idx) => (
    <tr key={idx}>
      {headerValues.map((hv) => (
        <td key={hv.id}>{d[hv.id as keyof CountryRow]}</td>
      ))}
    </tr>
  ));

const sortTableData = (tableData: any, setTableData: any): TableDataSorter => (
  event: any,
): void => {
  const dataId = event.target.id.replace(new RegExp(idPrefix), '');
  setTableData(sort(tableData, dataId));
};

type DataTableProps = {
  data: CountryRow[];
  headerValues: HeaderValue[];
};

const DataTable = ({ data, headerValues }: DataTableProps): JSX.Element => {
  const [tableData, setTableData] = useState(data);

  const sorter = sortTableData(tableData, setTableData);

  return (
    <table>
      <thead>{headerRow(headerValues, sorter)}</thead>
      <tbody>{dataRows(tableData, headerValues)}</tbody>
    </table>
  );
};

DataTable.propTypes = {
  data: PropTypes.array,
  headerValues: PropTypes.array,
};

export default DataTable;
