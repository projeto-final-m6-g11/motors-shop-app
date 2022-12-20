import React from "react";
import Routes from "./router";
import { GlobalStyle } from "./styles/index";
import "./App.css";
import FormAnuncio from "./components/FormAnuncio";

function App() {
  return (
    <div className="App">    
       <Routes /> 
       <GlobalStyle/>
    </div>
  );
}

export default App;
