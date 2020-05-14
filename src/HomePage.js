import React, { useState } from "react";
import axios from "axios";

export default function HomePage() {
  const [setup, setSetup] = useState("");
  const [punchline, setPunchline] = useState("");

  function handleResponse(response) {
    console.log("handleResponse FIRED");
    console.log("response from API", response);
    setSetup(response.data.newJoke.setup);
    const oneSecond = 1000;
    const fiveSeconds = oneSecond * 5;
    setTimeout(function() {
      setPunchline(response.data.newJoke.punchline);
    }, fiveSeconds);
  }

  const fetchRandomJoke = () => {
    console.log("FETCH FIRED");
    let apiUrl = "http://localhost:4001";
    axios.get(`${apiUrl}/jokes`).then(handleResponse);
  };

  const handleClick = event => {
    event.preventDefault();
    console.log("Show me a Joke fired!");
    fetchRandomJoke();
  };

  const handleSecondJokeClick = event => {
    event.preventDefault();
    setSetup("");
    setPunchline("");
    fetchRandomJoke();
  };

  return (
    <div>
      <button onClick={handleClick}>Wanna hear a juicy programmer joke?</button>
      <h6>{setup}</h6>
      <h6>{punchline}</h6>
      {punchline !== "" ? (
        <button onClick={handleSecondJokeClick}>Gimme more!</button>
      ) : null}
      <a
        className="twitter-share-button"
        href={`https://twitter.com/intent/tweet?text=${setup}%20${punchline}`}
        data-size="large"
      >
        Tweet
      </a>
    </div>
  );
}
