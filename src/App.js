import React from "react";
import "./App.css";
import Landing from "./components/Landing";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Landing />
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
