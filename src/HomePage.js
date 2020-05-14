import React from "react";
import Joke from "./components/Joke";

export default function homepage() {
  const displayJoke = event => {
    event.preventDefault();
    console.log("Show me a Joke!");
  };
  return (
    <div>
      <button onClick={displayJoke}>Wanna hear a juicy programmer joke?</button>
      <Joke />
    </div>
  );
}
