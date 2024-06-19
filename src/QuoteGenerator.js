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
  return (
    <div className="quote-generator">
      <div className="wrapper">
        <div className="quote">
          <Quote />
        </div>
        <p className="author">
          <em>- Cecilie Dreyer</em>
        </p>
        <div className="buttons">
          <a className="social-share-button button twitter">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <button className="social-share-button button tumblr">
            <FontAwesomeIcon icon={faTumblr} />
          </button>
          <button className="new-quote-button button">new quote</button>
        </div>
      </div>
      <footer>
        by Cecilie Lyng. <a>open-sourced on GitHub</a>.
      </footer>
    </div>
  );
}
