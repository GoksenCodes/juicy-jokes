import React from "react";
import "./App.css";
import HomePage from "./HomePage";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h2>JUICY JOKES</h2>
      <HomePage />
    </div>
  );
}

export default App;
