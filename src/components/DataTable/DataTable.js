import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './DataTable.css';
import sort from '../../utils/sort';

const idPrefix = 'dataTable-';

const headerRow = (headerValues, sorter) => (
  <tr>
    {headerValues.map((hv) => (
      <th id={idPrefix + hv.id} onClick={sorter} key={hv.id}>
        {hv.title}
      </th>
    ))}
  </tr>
);

const dataRows = (data, headerValues) =>
  data.map((d, idx) => (
    <tr key={idx}>
      {headerValues.map((hv) => (
        <td key={hv.id}>{d[hv.id]}</td>
      ))}
    </tr>
  ));

const tableSorter = (tableData, setTableData) => (event) => {
  const dataId = event.target.id.replace(new RegExp(idPrefix), '');
  setTableData(sort(tableData, dataId));
};

const DataTable = (props) => {
  const [tableData, setTableData] = useState(props.data);

  const sorter = tableSorter(tableData, setTableData);

  return (
    <table>
      <thead>{headerRow(props.headerValues, sorter)}</thead>
      <tbody>{dataRows(tableData, props.headerValues)}</tbody>
    </table>
  );
};

DataTable.propTypes = {
  data: PropTypes.array,
  headerValues: PropTypes.array,
};

export default DataTable;
