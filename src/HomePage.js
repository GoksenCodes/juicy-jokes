import React from "react";
import axios from "axios";
import Joke from "./components/Joke";

export default function homepage() {
  function handleResponse(response) {
    console.log("handleResponse FIRED");
    console.log("response from API", response);
    const setup = response.data[0].setup;
    const punchline = response.data[0].punchline;
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
      <Joke />
    </div>
  );
}
