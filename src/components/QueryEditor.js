// src/components/QueryEditor.js
import React, { useState } from 'react';
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-sql';
import 'ace-builds/src-noconflict/theme-terminal';
import 'ace-builds/src-noconflict/ext-language_tools';
import 'ace-builds/src-noconflict/ext-beautify';

const QueryEditor = () => {
  const [query, setQuery] = useState('');

  // const handleExecuteQuery = () => {
  //   onExecuteQuery(query);
  // };

  return (
    <div>
      <h2>SQL Query Editor:</h2>
      <AceEditor
        mode="sql"
        theme="terminal"
        onChange={(value) => setQuery(value)}
        value={query}
        name="query-editor"
        editorProps={{ $blockScrolling: true }}
        height="300px"
        width="100%"
        fontSize={14}
        enableBasicAutocompletion={true}
        enableLiveAutocompletion={true}
      />
      {/* <button onClick={handleExecuteQuery}>Run Query</button> */}
    </div>
  );
};

export default QueryEditor;
