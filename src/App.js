/* eslint-disable no-unused-vars */
import React from "react";

// components
import Header from "./components/Header";
import Home from "./components/Home";
//styles
import { GlobalStyle } from "./GlobalStyles";
console.log(process.env);
function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <GlobalStyle />
    </div>
  );
}

export default App;
