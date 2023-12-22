import React, { useState } from 'react';
import QueryEditor from './components/QueryEditor';
import DataTable from './components/DataTable';
import TableData1 from './components/TableData1';
import TableData2 from './components/TableData2';
import TableData3 from './components/TableData3';
import TableData4 from './components/TableData4';
import TableData5 from './components/TableData5';
import TableData6 from './components/TableData6';
import TableData7 from './components/TableData7';


import './App.css';

// Function to execute a query (Dummy logic in this example)
const executeQuery = (query, data) => {
  return 'Query executed successfully!';
};

const App = () => {
  // State variables initialization
  const [result, setResult] = useState('');
  const [selectedQuery, setSelectedQuery] = useState(1);
  const [showTable, setShowTable] = useState(false);
  const [showEnv, setShowEnv] = useState(true);
  const [randresult, setRandResult] = useState('');
  const [whichEnv, setWhichEnv] = useState('Manual Queries 👉');
  
  // Handle the execution of a selected query
  const handleExecuteQuery = () => {
    const data = queryOptions[selectedQuery - 1].component();
    setResult(executeQuery(queryOptions[selectedQuery - 1].name, data));
    setShowTable(true);
    handleRandomQuery();
  };

  // Handle change in the selected query
  const handleQueryChange = (e) => {
    setSelectedQuery(parseInt(e.target.value, 10));
    setShowTable(false);
    setResult('Please Click on the run button');
  };

  // Predefined query options
  const queryOptions = [
    { id: 1, name: 'SELECT * FROM Users', component: TableData1 },
    { id: 2, name: 'SELECT * FROM Products', component: TableData2 },
    { id: 3, name: 'SELECT * FROM Cities', component: TableData3 },
    { id: 4, name: 'SELECT * FROM Companies', component: TableData4 },
    { 
      id: 5, 
      name: 'SELECT Users.name AS userName, Users.age, Cities.name AS city FROM Users INNER JOIN Cities ON Users.cityId = Cities.id', 
      component: TableData5 
    },
    { id: 6, name: 'SELECT * FROM Order_Details', component: TableData6 },
    { id: 7, name: 'SELECT * FROM Orders', component: TableData7 },

  ];

  // Toggle between the coding environment and manual queries
  const handleEnv = () => {
    setShowEnv(!showEnv);
    setShowTable(false);
    setResult('');
    if (showEnv) setWhichEnv('👈 Coding IDE');
    else setWhichEnv('Manual Queries 👉');
  };

  // Get a random query result
  const handleRandomQuery = () => {
    const randomQueryComponent = queryOptions[Math.floor(Math.random() * queryOptions.length)].component();
    setRandResult(randomQueryComponent);
  };

  return (
    <div className="App">
      {/* Toggle button for switching between coding environment and manual queries */}
      <div className='envbtn'>
        <button onClick={handleEnv}>{whichEnv}</button>
      </div>

      {/* Render QueryEditor component if showEnv is true */}
      {showEnv && (<QueryEditor/>)}

      {/* Render query options and manual query execution UI if showEnv is false */}
      {!showEnv && (
        <>
          <div>
            <label>Select a Query:</label>
            <select onChange={handleQueryChange} value={selectedQuery}>
              {queryOptions.map((option) => (
                <option key={option.id} value={option.id}>
                  {option.name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <h4>{result}</h4>
          </div>
        </>
      )}

      {/* Button to execute selected query */}
      <div className='container'>
        <button onClick={handleExecuteQuery}>Run Query</button>
      </div>

      {/* Display DataTable component if showTable is true */}
      {!showEnv && showTable && (
        <div>
          <DataTable data={queryOptions[selectedQuery - 1].component()} />
        </div>
      )}

      {/* Display DataTable component for random query result if showEnv and showTable are true */}
      {showEnv && showTable && (
        <div>
          <h4>Query Executed</h4>
          <DataTable data={randresult} />
        </div>
      )}
    </div>
  );
};

export default App;
