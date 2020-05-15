import React, { useState } from "react";
import axios from "axios";

import { Link } from "react-router-dom";
//import { Button, Container } from "@material-ui/core";
import { Container, Button, Row, Col } from "react-bootstrap";

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
    <Container fluid className="d-flex align-items-center min-vh-100">
      <Container className="d-flex align-items-center flex-column mw-50 box">
        {setup === "" && (
          <Button color="secondary" onClick={handleClick}>
            Wanna hear a juicy programmer joke?
          </Button>
        )}
        <h3 className="mb-3">{setup}</h3>
        <h2>{punchline}</h2>
        {punchline !== "" ? (
          <div className="d-flex justify-content-center">
            <div class="m-3">
              <Button
                variant="primary"
                size="sm"
                onClick={handleSecondJokeClick}
              >
                Gimme more!
              </Button>
            </div>
            <div class="m-3">
              {/* <Button
                as={Link}
                className="twitter-share-button"
                href={`https://twitter.com/intent/tweet?text=${setup}%20${punchline}`}
                data-size="large"
                variant="primary"
                size="sm"
              >
                Tweet
              </Button> */}
              <a
                className="twitter-share-button"
                href={`https://twitter.com/intent/tweet?text=${setup}%20${punchline}`}
                data-size="large"
              >
                Tweet
              </a>
            </div>
            <div class="m-3">
              <Button
                as={Link}
                className="addJoke"
                to="/addjoke"
                variant="primary"
                size="sm"
              >
                Nah, I know a better joke
              </Button>
            </div>
          </div>
        ) : null}
      </Container>
    </Container>
  );
}
