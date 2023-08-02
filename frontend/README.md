# CSV Searcher Frontend

The frontend part of the CSV Searcher project is built with Vite and React. It allows users to interact with the CSV data by searching and exploring its contents.

## Getting Started

1.  Clone the repository:

    ```bash
    git clone https://github.com/LeomaiaJr/CSV-Data-Explorer.git
    cd CSV-Data-Explorer/frontend
    ```

2.  Create a `.env` file:

    Before running the frontend, create a `.env` file in the root of the `frontend` directory. You can use the provided `.env.example` file as a template. The `.env` file allows you to set environment variables that the frontend can access during development.

    ```plaintext
    # .env
    VITE_API_URL=http://localhost:8080
    ```

    The default value for `VITE_API_URL` is `http://localhost:8080`.

3.  Install dependencies:

    ```bash
    npm install
    ```

4.  Run the development server:

    ```bash
    npm run dev
    ```

5.  Open your browser and visit [http://127.0.0.1:5173/](http://127.0.0.1:5173/) to access the application.

## Environment Variables

The following environment variable is used in the frontend:

- `VITE_API_URL`: The URL of the backend API. This variable specifies the base URL that the frontend uses to make API requests to the backend. By default, it is set to `http://localhost:8080`, assuming the backend is running on that address. If your backend is running on a different URL or port, update this variable in the `.env` file.

## Storybook

The frontend includes a Storybook setup for visualizing and testing individual React components in isolation. To explore the components, you can run the Storybook server using the following command:

```bash
npm run storybook
```

The Storybook server will start on [http://localhost:6006](http://localhost:6006), where you can view and interact with the components.

## Tests

The frontend includes unit tests to ensure the reliability of the application. The tests are implemented using Vitest. To run the tests, use the following command:

```bash
npm run test
```

The test runner will execute the test suites and provide the results in the terminal.

## Features

- A search bar to search for data within the loaded CSV file.
- Ability to load a CSV file and display its data as cards.
- Responsive design for both desktop and mobile devices.
- Clear and user-friendly error handling.

## Tech Stack

- Vite: The build tool and development server.
- React: The frontend JavaScript library for building UI components.
- Material-UI: A popular React UI framework for consistent styling.
- Axios: A HTTP client for making API requests to the backend.
