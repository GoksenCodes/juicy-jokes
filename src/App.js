import React from "react";
import "./App.css";
import HomePage from "./HomePage";
import { Switch, Route, Router, NavLink } from "react-router-dom";
import AddAJoke from "./AddAJoke";
import Navbar from "react-bootstrap/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Navbar.Brand as={NavLink} to="/">
          Juicy Jokes
        </Navbar.Brand>
      </Navbar>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/addjoke" component={AddAJoke} />
      </Switch>
    </div>
  );
}

export default App;
