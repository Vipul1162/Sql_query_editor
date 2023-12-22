// Importing necessary modules and components from React and AceEditor library
import React, { useState } from 'react';
import AceEditor from 'react-ace';

// Importing required ACE editor configurations and extensions
import 'ace-builds/src-noconflict/mode-sql';
import 'ace-builds/src-noconflict/theme-terminal';
import 'ace-builds/src-noconflict/ext-language_tools';
import 'ace-builds/src-noconflict/ext-beautify';

// Functional component for SQL Query Editor using AceEditor
const QueryEditor = () => {
  // State variable to manage the content of the query editor
  const [query, setQuery] = useState('');

  // Rendering the QueryEditor component
  return (
    <div>
      {/* Heading for the Query Editor section */}
      <h2>SQL Query Editor:</h2>

      {/* AceEditor component for editing SQL queries with specific configurations */}
      <AceEditor
        mode="sql" // Setting the editor mode to SQL
        theme="terminal" // Setting the editor theme to terminal-like
        onChange={(value) => setQuery(value)} // Handling changes in the editor content
        value={query} // Setting the current value of the editor to the state variable
        name="query-editor" // Assigning a unique name to the editor
        editorProps={{ $blockScrolling: true }} // Editor properties to block unnecessary scrolling warnings
        height="300px" // Setting the height of the editor
        width="100%" // Setting the width of the editor
        fontSize={14} // Setting the font size of the editor content
        enableBasicAutocompletion={true} // Enabling basic autocompletion
        enableLiveAutocompletion={true} // Enabling live autocompletion
      />

      {/* 
        Commented out button that could be used to execute the query.
        This button is currently not being used in the application.
      */}
      {/* <button onClick={handleExecuteQuery}>Run Query</button> */}
    </div>
  );
};

// Exporting the QueryEditor component for use in other parts of the application
export default QueryEditor;
