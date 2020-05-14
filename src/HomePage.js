import React, { useState } from "react";
import axios from "axios";
import Joke from "./components/Joke";

export default function HomePage() {
  const [setup, setSetup] = useState("");
  const [punchline, setPunchline] = useState("");

  function handleResponse(response) {
    console.log("handleResponse FIRED");
    console.log("response from API", response);
    setSetup(response.data[0].setup);
    setPunchline(response.data[0].punchline);
    console.log("SETUP", setup, "PUNCHLINE", punchline);
  }

  const fetchRandomJoke = () => {
    console.log("FETCH FIRED");
    let apiUrl = `https://official-joke-api.appspot.com/jokes/programming/random`;
    axios.get(apiUrl).then(handleResponse);
  };

  const handleClick = event => {
    event.preventDefault();
    console.log("Show me a Joke fired!");
    fetchRandomJoke();
  };

  return (
    <div>
      <button onClick={handleClick}>Wanna hear a juicy programmer joke?</button>
      <h6>{setup}</h6>
      <h6>{punchline}</h6>
    </div>
  );
}
