import React, { useState } from "react";
import axios from "axios";
// import { Button, Container } from "@material-ui/core";
import { Container, Button, Row, Col } from "react-bootstrap";

export default function AddAJoke() {
  const [setup, setSetup] = useState("");
  const [punchline, setPunchline] = useState("");
  console.log("SEETYO", setup);

  const cleanForm = () => {
    alert("We just added your juicy joke! ");
    setSetup("");
    setPunchline("");
  };

  const addJoke = (setup, punchline) => {
    console.log("addjoke is fired");
    console.log("before post req", setup, punchline);
    let apiUrl = "http://localhost:4001";
    axios.post(`${apiUrl}/jokes`, { setup, punchline }).then(cleanForm);
    console.log("setup", setup, "punchline", punchline);
  };

  function submitForm(event) {
    event.preventDefault();
    console.log("HANDLE SUBMIT FIRED");
    addJoke(setup, punchline);
  }

  return (
    <div>
      <h5>Add A Joke</h5>
      <form className="form">
        <div>
          <label>Setup: </label>
          <input
            value={setup}
            type="text"
            required
            onChange={event => setSetup(event.target.value)}
          ></input>
        </div>
        <div>
          <label>Punchline: </label>
          <input
            value={punchline}
            type="text"
            required
            onChange={event => setPunchline(event.target.value)}
          ></input>
        </div>
        <div>
          <Button
            size="small"
            variant="contained"
            color="primary"
            onClick={submitForm}
          >
            Submit!
          </Button>
        </div>
      </form>
    </div>
  );
}
