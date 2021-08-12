import logo from './logo.svg';
import './App.css';

import { ThemeProvider, createMuiTheme } from '@material-ui/core';

import Routes from "./routes";

function App() {
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#323751'
      },
      secondary: {
        main: '#ffffff'
      }
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>


  );
}

export default App;
