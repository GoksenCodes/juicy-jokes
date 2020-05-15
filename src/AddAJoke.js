import React, { useState } from "react";
import axios from "axios";

export default function AddAJoke() {
  const [setup, setSetup] = useState("");
  const [punchline, setPunchline] = useState("");

  const displayResult = () => {
    return <div>JOKE ADDED!</div>;
  };

  const addJoke = (setup, punchline) => {
    console.log("addjoke is fired");
    console.log("before post req", setup, punchline);
    let apiUrl = "http://localhost:4001";
    axios.post(`${apiUrl}/jokes`, { setup, punchline }).then(displayResult);
    console.log("setup", setup, "punchline", punchline);
  };

  function submitForm(event) {
    event.preventDefault();
    console.log("HANDLE SUBMIT FIRED");
    addJoke();
  }

  return (
    <div>
      <h5>Add A Joke</h5>
      <form>
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
          <button variant="primary" type="submit" onClick={submitForm}>
            Submit!
          </button>
        </div>
      </form>
    </div>
  );
}
