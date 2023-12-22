// src/components/DataTable.js
import React from 'react';
import { Table } from 'react-bootstrap';

const DataTable = ({ data }) => {
  if (!data || data.length === 0) {
    return null;
  }

  return (
    <div>
      <h3>Query Result:</h3>
      <Table striped bordered hover>
        <thead>
          <tr>
            {Object.keys(data[0]).map((key) => (
              <th key={key}>{key}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              {Object.values(row).map((value, colIndex) => (
                <td key={colIndex}>{value}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default DataTable;
