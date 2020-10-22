import React from 'react';
import './App.css';
import Particles from "./Particles";
import theme from "./theme";
import { ThemeProvider } from '@material-ui/core/styles';
import Menu from './AppBar';
import Hello from './Hello';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
      >
      <Particles /> 
      </div>
      <div className="App">
        <Menu />
        <Hello />
      </div>
    </ThemeProvider>
  );
}

export default App;
