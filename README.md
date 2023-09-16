# Bank Transactions React App

This is a simple React application that allows users to manage their bank transactions. Users can view a table of all transactions, add new transactions, filter transactions by description, and sort transactions alphabetically by category or description.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Starting JSON Server](#starting-json-server)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features

- View a table of all transactions with details like date, description, category, and amount.
- Add new transactions, including date, description, category, and amount.
- Filter transactions by typing into the search bar. Only transactions with a description matching the search term are displayed.
- Sort transactions alphabetically by category or description.
- Delete transactions, which removes them from the table.

## Getting Started

Follow these instructions to get the project up and running on your local machine.

### Prerequisites

- Node.js and npm installed on your machine.

### Installation

1. Clone the repository to your local machine.

```bash
git clone <repository-url>
```

2. Navigate to the project directory.

```bash
cd bank-transactions-react-app
```

3. Install the required dependencies.

```bash
npm install
```

### Starting JSON Server

To fetch data for the application, we are using JSON Server. You can start JSON Server with the following steps:

1. Open a new terminal window.

2. Navigate to the project's root directory.

```bash
cd bank-transactions-react-app
```

3. Start JSON Server using the provided JSON data file (db.json).

```bash
json-server --watch db.json --port 3001
```

JSON Server will now be running on port 3001 and will provide the API for fetching and managing transactions data.

## Usage

1. Start the React development server.

```bash
npm start
```

2. Open your web browser and go to `http://localhost:3000` to access the application.

3. You can now interact with the application, add new transactions, filter transactions, and sort them as needed.

## Contributing

Contributions are welcome! If you'd like to contribute to this project, please follow these steps:

1. Fork the repository.

2. Create a new branch for your feature or bug fix.

3. Make your changes and test them thoroughly.

4. Commit your changes and push them to your fork.

5. Create a pull request to merge your changes into the main repository.

Please make sure to follow the code style and conventions used in the project.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

Feel free to customize this README to include additional information or specific project details as needed.