# React TypeScript User Table App

A simple Single Page Application (SPA) built using React, TypeScript, and Bootstrap to display a table with user data fetched from an API. The app allows sorting and searching functionalities and shows 10 records per page.

## Getting Started

### Prerequisites

Make sure you have Node.js and npm installed on your machine.

### Installation

1. Clone this repository to your local machine.
2. Navigate to the project directory.
3. Install the dependencies.

### Running the App

Run the development server with the following command:

```npm start```

or

```yarn start```


The app will be accessible at `http://localhost:3000` in your browser.

## Features

- Displays a table with user data fetched from the API `https://jsonplaceholder.typicode.com/posts`.
- Allows sorting of the data in ascending/descending order by clicking on the table headers.
- Implements pagination, showing 10 records per page.
- Utilizes Bootstrap for styling and responsive design.

## Components

The app is distributed into several components:

- `App.tsx`: The main component responsible for fetching data and rendering the `Table` component.
- `Table.tsx`: The component that renders the user data table, handles pagination, sorting, and searching.
- `TableRow.tsx`: Represents each row in the table.

## Dependencies

- React (Frontend Library)
- TypeScript (Type Checking)
- Axios (HTTP Client)
- Bootstrap (CSS Framework)






