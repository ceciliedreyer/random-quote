import React, { useState } from "react";
import axios from "axios";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUser, faFolder } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faTumblr } from "@fortawesome/free-brands-svg-icons";
import "./QuoteGenerator.css";
import Quote from "./Quote";
library.add(faUser, faFolder);

export default function QuoteGenerator() {
  const [quote, setQuote] = useState("hello there");

  function handleSearch(response) {
    setQuote(response.data);
  }

  function getQuote(event) {
    event.preventDefault();
    let apiUrl = "https://api.quotable.io/random";
    axios.get(apiUrl).then(handleSearch);
  }

  return (
    <div className="quote-generator">
      <div className="wrapper">
        <div className="quote">
          <Quote data={quote} />
        </div>
        <div>
          <p className="quote-author">
            <em>- {quote.author}</em>
          </p>
        </div>
        <div className="buttons">
          <a className="social-share-button button twitter">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <button className="social-share-button button tumblr">
            <FontAwesomeIcon icon={faTumblr} />
          </button>
          <button className="new-quote-button button" onClick={getQuote}>
            new quote
          </button>
        </div>
      </div>
      <footer>
        by Cecilie Lyng. <a>open-sourced on GitHub</a>.
      </footer>
    </div>
  );
}
