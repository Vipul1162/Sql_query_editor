// Importing necessary modules and components from React and react-bootstrap library
import React from 'react';
import { Table } from 'react-bootstrap';

// Functional component for displaying data in a table format
const DataTable = ({ data }) => {
  // If no data is provided or the data array is empty, return null to display nothing
  if (!data || data.length === 0) {
    return null;
  }

  // Rendering the DataTable component to display the provided data in a table format
  return (
    <div>
      {/* Heading to denote the section where query results will be displayed */}
      <h3>Query Result:</h3>

      {/* Using the Table component from react-bootstrap with specific styles */}
      <Table striped bordered hover>
        {/* Table header section */}
        <thead>
          <tr>
            {/* Dynamically generating table headers based on keys of the first data row */}
            {Object.keys(data[0]).map((key) => (
              <th key={key}>{key}</th> // Each header corresponds to a key from the data object
            ))}
          </tr>
        </thead>
        {/* Table body section */}
        <tbody>
          {/* Looping through each data row to generate table rows */}
          {data.map((row, index) => (
            <tr key={index}>
              {/* Looping through each value in the data row to generate table cells */}
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

// Exporting the DataTable component for use in other parts of the application
export default DataTable;
