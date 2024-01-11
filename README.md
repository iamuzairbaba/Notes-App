# Notes-App
Notes app to keep track of things you need reminding about.
Used ReactJS and Material UI.
Stored and Watched Data using JSON_SERVER
# ReactJS Material-UI Starter with Json-server

This project serves as a boilerplate for building React applications with Material-UI components. Additionally, it includes Json-server for simulating a backend API. This combination is useful for prototyping and developing applications that require a front-end and a simple server for data storage.

## Getting Started

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/iamuzairbaba/Notes-App.git
    ```

2. Navigate to the project directory:

    ```bash
    cd Notes-App
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

### Running the Application

1. Start the Json-server for mock data:

    ```bash
    json-server --watch data/db.json --port 8000

    ```

2. In a new terminal, start the React application:

    ```bash
    npm start
    ```

This will launch the React application in development mode. Open [http://localhost:3000](http://localhost:3000) in your browser to view it.

### Building for Production

To build the application for production:

```bash
npm run build
