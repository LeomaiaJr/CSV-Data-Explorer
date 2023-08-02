# CSV Searcher Backend

The backend part of the CSV Searcher project is implemented with Node.js and Express. It provides endpoints to handle CSV file uploads and search operations on the loaded data.

## Getting Started

1.  Clone the repository:

    ```bash
    git clone https://github.com/LeomaiaJr/CSV-Data-Explorer.git
    cd csv-searcher/backend
    ```

2.  Create a `.env` file:

    Before running the backend server, create a `.env` file in the root of the `backend` directory. You can use the provided `.env.example` file as a template. The `.env` file allows you to set environment variables that the backend can access during development.

    ```plaintext
    # .env
    PORT=8080
    ```

    The default value for `PORT` is `8080`, which specifies the port on which the backend server will run. If you want to use a different port, update the value accordingly.

3.  Install dependencies:

    ```bash
    npm install
    ```

4.  Run the development server:

    ```bash
    npm run dev
    ```

    The backend server will start and listen on the specified port.

## Tests

The backend includes unit tests to ensure the reliability of the API endpoints. The tests are implemented using Jest. To run the tests, use the following command:

```bash
npm run test
```

The test runner will execute the test suites and provide the results in the terminal.

## Sample CSV Test File

Inside the `backend/src/test` folder, you'll find a sample CSV test file (`sample-test.csv`) that you can use to test the CSV upload functionality. This test file contains sample data that will be used for testing the file upload and data processing.

## Environment Variables

The following environment variable is used in the backend:

- `PORT`: The port on which the backend server will run. By default, it is set to `8080`. Update this variable in the `.env` file if you want to use a different port.

## Insomnia Collection

Inside the `backend/docs` folder, you'll find an Insomnia collection (`csv-data-explorer-api-insomnia.json`) that includes a set of requests to interact with the backend API. You can import this collection into Insomnia to test the various API endpoints and perform CRUD operations on the CSV data.

## Tech Stack

- Node.js: The backend JavaScript runtime.
- Express: A web framework for building APIs with Node.js.
- Multer: A middleware for handling file uploads.
- csv-parser: A library for parsing CSV data.
- Cors: Middleware for handling Cross-Origin Resource Sharing.
