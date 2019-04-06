import React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import TransactionsContainer from '../../containers/TransactionsContainer';

const theme = createMuiTheme({
  typography: { useNextVariants: true },
});

const App = () => (
  <MuiThemeProvider theme={theme}>
    <TransactionsContainer />
  </MuiThemeProvider>
);

export default App;
