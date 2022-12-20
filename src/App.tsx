
import React from "react";
import Routes from "./router";
import { GlobalStyle } from './styles/index';

import "./App.css";
import { ModalFundo } from "./components/ModalFundo/styled";

function App() {
  return (
    <div className="App">
       <Routes />
      <GlobalStyle/>
    </div>
  );
}

export default App;
