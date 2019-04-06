## Available Scripts

In the project directory, you can run:

### `yarn`

Installs all the dependencies

### `yarn start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.<br>
Open [http://localhost:3004/api/transactions](http://localhost:3004/api/transactions) to view the rest api<br>

The page will reload if you make edits.<br>
You will also see any lint errors in the console.<br>

### `yarn build`

Bundles the application for production

### `yarn lint`

Launches the linter with airbnb style guide in interactive watch mode.

### `yarn pretty`

Formats the code

### `yarn test`

Launches the test runner in interactive watch mode.

### TODO

- Set Typography, the title should be an h1 to be ADA compliant
- Use memoization to sort the list
- There is no error handling for failed requests
- Format the monetary amounts
- Balances, Savings and Forecast really should not be calculated in every render
- Unit Tests
- There is some gnarly defaulting logic (||[] or ||0) that can be removed, for now it's to avoid a NaN to display while waiting for the values to load
