# SQL Editor Web Application

## Overview

This repository contains the code for a web-based SQL Editor application built using React. The application allows users to execute predefined SQL queries and view the corresponding results.

## Live Demo

You can access the live version of this application at: [SQL Query Random Editor](https://sql-query-random-editor.netlify.app/)

## Files & Components

- **App.js**: The main React component that orchestrates the application flow.
- **QueryEditor.js**: A component that provides an interface for users to input custom SQL queries.
- **DataTable.js**: A reusable component for displaying table data fetched from predefined SQL queries.
- **TableData1.js to TableData5.js**: Components that simulate fetching data corresponding to predefined SQL queries.
- **index.html**: The main HTML file where the React application is mounted.

## Features

1. **Predefined Queries**: Users can select from a list of predefined SQL queries.
2. **Query Execution**: Upon selecting a query, the application fetches and displays the corresponding data.
3. **Random Query Execution**: An option to execute a random query from the predefined list.
4. **Query Editor**: An interface to input custom SQL queries and execute them (in progress).

## Setup & Usage

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Install the necessary dependencies using `npm install`.
4. Start the development server with `npm start`.
5. Access the application in your browser at `http://localhost:3000`.

## Dependencies

- React.js
- Ace Editor
- Bootstrap (if included)

## Contributions

Contributions are welcome! If you have suggestions or improvements, please open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

