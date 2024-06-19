import React, { useState } from "react";
import axios from "axios";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUser, faFolder } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faTumblr } from "@fortawesome/free-brands-svg-icons";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import "./QuoteGenerator.css";

library.add(faUser, faFolder);

export default function QuoteGenerator() {
  const [quote, setQuote] = useState(
    "it always seems imposible until it's done"
  );
  const [author, setAuthor] = useState("Nelson Mandela");
  const [color, setColor] = useState("#fb6964");

  function handleSearch(response) {
    setQuote(response.data.content);
    setAuthor(response.data.author);
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
          <strong className="quote-icon">
            <FontAwesomeIcon icon={faQuoteLeft} />
          </strong>
          <div className="quote-copy">
            <h1>{quote}</h1>
          </div>
        </div>
        <div>
          <p className="quote-author">
            <em>- {author}</em>
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
        by Cecilie Lyng.{" "}
        <a
          href="https://github.com/ceciliedreyer/random-quote"
          target="_blank"
          rel="noreferrer"
        >
          open-sourced on GitHub
        </a>
        .
      </footer>
    </div>
  );
}
