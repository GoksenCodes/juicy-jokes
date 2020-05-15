import React from "react";
import "./App.css";
import HomePage from "./HomePage";
import { Switch, Route, Router } from "react-router-dom";
import AddAJoke from "./AddAJoke";

function App() {
  return (
    <div className="App">
      <h2>JUICY JOKES</h2>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/addjoke" component={AddAJoke} />
      </Switch>
    </div>
  );
}

export default App;
