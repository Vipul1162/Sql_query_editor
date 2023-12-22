// Importing necessary modules from React and react-bootstrap library
import React from 'react';
import { Table } from 'react-bootstrap';

// Functional component TableDisplay that renders a table based on provided data
const TableDisplay = ({ data }) => {
  // If no data is provided or the data array is empty, render nothing
  if (!data || data.length === 0) {
    return null;
  }

  return (
    <div>
      {/* Heading for the table result section */}
      <h3>Query Result:</h3>

      {/* Table component from react-bootstrap with striped, bordered, and hover styles */}
      <Table striped bordered hover>
        {/* Table header section */}
        <thead>
          <tr>
            {/* Looping through the keys of the first data row to create table headers */}
            {Object.keys(data[0]).map((key) => (
              <th key={key}>{key}</th> // Each header corresponds to a key from the data object
            ))}
          </tr>
        </thead>
        {/* Table body section */}
        <tbody>
          {/* Looping through each data row to create table rows */}
          {data.map((row, index) => (
            <tr key={index}>
              {/* Looping through each value in the data row to create table cells */}
              {Object.values(row).map((value, colIndex) => (
                <td key={colIndex}>{value}</td> // Each cell contains a value from the data row
              ))}
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

// Exporting the TableDisplay component for use in other parts of the application
export default TableDisplay;
