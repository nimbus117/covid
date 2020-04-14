import React from 'react';
import PropTypes from 'prop-types';
import './DataTable.css';

const DataTable = (props) => {
  console.log(props);
  return (
    <table>
      <thead>
        <tr>
          {props.headerValues.map((th) => (
            <th key={th.id}>{th.title}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {props.data.map((tr, idx) => (
          <tr key={idx}>
            {props.headerValues.map((td) => (
              <td key={td.id}>{tr[td.id]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

DataTable.propTypes = {
  data: PropTypes.array,
  headerValues: PropTypes.array,
};

export default DataTable;
