// src/App.js
import React, { useState } from 'react';
import QueryEditor from './components/QueryEditor';
import DataTable from './components/DataTable';
import TableData1 from './components/TableData1';
import TableData2 from './components/TableData2';
import TableData3 from './components/TableData3';
import TableData4 from './components/TableData4';
import TableData5 from './components/TableData5';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const executeQuery = (query, data) => {
  // Dummy logic to execute the SQL query (not implemented in this example)
  return 'Query executed successfully!';
};

const App = () => {
  const [result, setResult] = useState('');
  const [selectedQuery, setSelectedQuery] = useState(1);
  const [showTable, setShowTable] = useState(false);
  const [showEnv, setShowEnv] = useState(true);
  const [randresult, setRandResult] = useState('');
  const [whichEnv, setWhichEnv] = useState('Manual Queries 👉');
  


  const handleExecuteQuery = (query) => {
    const data = queryOptions[selectedQuery - 1].component();
    setResult(executeQuery(query, data));
    setShowTable(true);
    handleRandomQuer()
  };

  const handleQueryChange = (e) => {
    setSelectedQuery(parseInt(e.target.value, 10));
    setShowTable(false); // Reset showTable to false whenever the query option changes
    setResult('Please Click on the run button')
  };

  const queryOptions = [
    { id: 1, name: 'SELECT * FROM Users', component: TableData1 },
    { id: 2, name: 'SELECT * FROM Products', component: TableData2 },
    { id: 3, name: 'SELECT * FROM Cities', component: TableData3 },
    { id: 4, name: 'SELECT * FROM Companies', component: TableData4 },
    { id: 5, name: 'SELECT Users.name AS userName, Users.age, Cities.name AS city FROM Users INNER JOIN Cities ON Users.cityId = Cities.id', component: TableData5 },
  ];

  const handleEnv=()=>{
    setShowEnv(!showEnv);
    setShowTable(false)
    setResult('')
    if(showEnv)
    setWhichEnv('👈 Coding IDE')
    else
    setWhichEnv('Manual Queries 👉')
  }

  let ln=queryOptions.length;
  const handleRandomQuer=()=>{
    let cn= queryOptions[Math.floor(Math.random() * ln)].component()
    setRandResult(cn);
  }

  return (
    <div className="App">
      <div className='envbtn'>
          <button onClick={handleEnv}>{whichEnv}</button>
      </div>
      {showEnv && (<QueryEditor/>)}

      {!showEnv && 
      (<>
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
      </>)}
      <div className='container'>
        <button onClick={handleExecuteQuery}>Run Query</button>
      </div>

      {/* Display the DataTable only if showTable is true */}
      {!showEnv && showTable && (
        <div>
          <DataTable data={queryOptions[selectedQuery - 1].component()} />
        </div>
      )}
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
